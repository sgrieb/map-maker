
import { sql } from '@vercel/postgres';

const migrate = async () => {
    return await sql`
        ALTER TABLE lists ADD COLUMN IF NOT EXISTS user_id VARCHAR(255);
    `;
}

export default {
    migrate
}