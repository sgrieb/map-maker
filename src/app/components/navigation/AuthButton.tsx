
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthButton() {
    let href = '/api/auth/login'
    let text = 'Login'

    const { user, error, isLoading } = useUser();

    if (isLoading || error) return (<></>);

    if(user) {
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
