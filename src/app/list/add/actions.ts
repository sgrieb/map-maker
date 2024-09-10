'use server'

import { z } from 'zod'
import { getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';

type CreateListPayload = {
    name: string,
    description: string,
    userId: string,
}

const query = async (name: string, description: string, userId: string) => {
    return await sql`
        INSERT INTO lists (name, description, user_id, created_at, updated_at)
        VALUES (${name}, ${description}, ${userId}, NOW(), NOW());
    `;
}

const schema = z.object({
    name: z.string().min(1, 'Name is required.'),
    description: z.string().min(1, 'Description is required.'),
})

export async function createList(prevState: any, formData: FormData) {
    const session = await getSession();

    const rawFormData = {
        name: formData.get('listName'),
        description: formData.get('listDescription'),
        userId: session?.user.sub.toString()
    } as CreateListPayload

    const validatedFields = schema.safeParse(rawFormData)

    if (!validatedFields.success) {
        let errors: any = {}

        validatedFields.error.issues.forEach((issue) => {
            errors[issue.path[0]] = issue.message
        })

        formData.append('errors', JSON.stringify(errors))
    } else {
        // TODO: add some error handling here
        await query(rawFormData.name, rawFormData.description, rawFormData.userId)
    }

    return formData
}