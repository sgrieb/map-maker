
import { sql } from '@vercel/postgres';
import { getSession } from "@auth0/nextjs-auth0";

export default async function Page() {
  const session = await getSession()

  const { rows } =
    await sql`SELECT * FROM lists WHERE user_id > ${session?.user.sub};`;

    return (
      <article>
          <h1>Lists</h1>
          {rows.length > 0 && 
            <div>Here&apos;s some lists!</div>
          }
          {rows.length == 0 && 
            <div>You have no lists!</div>
          }
          <a href="/list/add"><button className="mt-6 btn btn-primary">Add a List</button></a>
      </article>
    )  
}