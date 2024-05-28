import pg from 'pg';
const { Pool }= pg

const testPool = new Pool(useRuntimeConfig().dbConfig);

export const usePG = () => {
    const getClient = async () => {
        return await testPool.connect()
    }

    const query = async (text, values) => {
        if(values) {
            return await testPool.query(text, values)
        } else {
            return await testPool.query(text)
        }
    }

    return {
        getClient,
        query,
    }
}