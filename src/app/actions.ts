'use server'
 
export async function createList(userId: string, formData: FormData) {
    const rawFormData = {
      name: formData.get('listName'),
      description: formData.get('listDescription'),
    }
 
    console.log(`got form data: ${JSON.stringify(rawFormData)}`)
    // mutate data
    // revalidate cache
  }