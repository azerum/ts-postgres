function secToMsec(value?: number) {
    if (typeof value === "number" && !isNaN(value)) {
        return value * 1000;
    }
}

export const host = process.env.PGHOST || 'localhost';
export const port = parseInt(process.env.PGPORT as string, 10) || 5432;
export const user = process.env.PGUSER || (
    process.platform === 'win32' ? process.env.USERNAME : process.env.USER
) as string;
export const database = process.env.PGDATABASE;
export const password = process.env.PGPASSWORD;
export const preparedStatementPrefix = 'tsp_';
export const sslMode = process.env.PGSSLMODE;
export const connectionTimeout = secToMsec(
    parseInt(process.env.PGCONNECT_TIMEOUT as string, 10)
);
export const clientEncoding = process.env.PGCLIENTENCODING;
