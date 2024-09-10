'use server'

import { z } from 'zod'
import { getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';

type CreateListPayload = {
    name: string,
    description: string,
    userId: string,
}

const query = async (payload :CreateListPayload) => {
    return await sql`
        INSERT INTO lists (name, description, user_id, created_at, updated_at)
        VALUES (${payload.name}, ${payload.description}, ${payload.userId}, NOW(), NOW());
    `;
}

const schema = z.object({
    name: z.string().min(1, 'Name is required.'),
    description: z.string().min(1, 'Description is required.'),
})

export async function createList(prevState: any, formData: FormData) {
    const session = await getSession();
    let errors: any = {}

    const payload = {
        name: formData.get('listName'),
        description: formData.get('listDescription'),
        userId: session?.user.sub.toString()
    } as CreateListPayload

    const validatedFields = schema.safeParse(payload)

    if (!validatedFields.success) {
        validatedFields.error.issues.forEach((issue) => {
            errors[issue.path[0]] = issue.message
        })

        formData.append('errors', JSON.stringify(errors))
    } else {
        try {
            await query(payload)
            formData.append('success', `List successfully created.`)
        }
        catch(e: any) {
            errors['sql'] = e.message
            formData.append('errors', JSON.stringify(errors))
        }
    }

    return formData
}