import { getSession } from '@auth0/nextjs-auth0';
import { MapMakerSession } from '@/app/types'
import UserInfoSwitcher from './UserInfoSwitcher';

export default async function Page() {
    const { user } = await getSession() as MapMakerSession;

    if(!user) {
        return <h1>Profile Section: No profile found.</h1>
    }

    return (<UserInfoSwitcher />)
}