
import { sql } from '@vercel/postgres';

const migrate = async () => {
    return await sql`
        CREATE TABLE lists (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255)
        );
    `;
}

export default {
    migrate
}