'use server'

import { z } from 'zod'

const schema = z.object({
    name: z.string().min(1, 'Name is required.'),
    description: z.string().min(1, 'Description is required.'),
})

export async function createList(prevState: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('listName'),
        description: formData.get('listDescription'),
    }

    const validatedFields = schema.safeParse(rawFormData)

    if (!validatedFields.success) {
        let errors: any = {}

        validatedFields.error.issues.forEach((issue) => {
            errors[issue.path[0]] = issue.message
        })

        formData.append('errors', JSON.stringify(errors))
    }

    return formData
}