import { Pool } from 'pg';

const pool = new Pool(useRuntimeConfig().dbConfig);

export const usePG = () => {
    const getClient = async () => {
        return await pool.connect()
    }

    const query = async (text, values) => {
        if(values) {
            return await pool.query(text, values)
        } else {
            return await pool.query(text)
        }
    }

    return {
        getClient,
        query,
    }
}