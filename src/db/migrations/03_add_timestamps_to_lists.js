
import { sql } from '@vercel/postgres';

const migrate = async () => {
    return await sql`
        ALTER TABLE lists
        ADD COLUMN IF NOT EXISTS created_at TIMESTAMP,
        ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP,
        ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMP
        ;
    `;
}

export default {
    migrate
}