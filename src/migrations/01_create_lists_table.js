import 'dotenv/config'

import { sql } from '@vercel/postgres';

const result = await sql`
    CREATE TABLE lists (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255)
    );
`;

console.log('Done.')