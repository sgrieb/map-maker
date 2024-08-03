
import ServerUserInfo from './user-info/ServerUserInfo'
import ClientServerInfo from './user-info/ClientUserInfo'

export default function UserInfoSwitcher() {
    // server rendering this is more performant for now
    if(false) {
        return (
            <ClientServerInfo />
        )
    }

    return (
        <div>
            <ServerUserInfo />
        </div>
    );
}
