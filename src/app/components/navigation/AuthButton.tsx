
import { getSession } from '@auth0/nextjs-auth0';

export default async function AuthButton() {
    let href = '/api/auth/login'
    let text = 'Login'

    const session = await getSession();

    if(session && session.user) {
        href = '/api/auth/logout'
        text = 'Logout'
    }

    return (
        <a
            href={href}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
            {text}
        </a>
    );
}
