import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const session = await getSession();

  if(!session || !session.user) {
    return (
      <div>No user session</div>
    )
  }

  const user = session.user

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}