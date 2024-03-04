import mysql, { Connection } from 'mysql2/promise';

export const connection = mysql.createConnection({
    host: '203.150.107.159',
    port: 3306,
    user: 'queme',
    password: 'password@queme',
    database: 'queme',
});