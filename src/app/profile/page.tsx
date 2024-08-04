import { getSession } from '@auth0/nextjs-auth0';
import { MapMakerSession } from '@/app/types'

export default async function Page() {
    const { user } = await getSession() as MapMakerSession;

    if(!user) {
        return <h1>No profile found.</h1>
    }

    return <h1>Hello {user.given_name} {user.family_name}!</h1>
}