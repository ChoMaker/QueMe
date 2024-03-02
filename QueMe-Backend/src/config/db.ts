import mysql, { Connection } from 'mysql2/promise';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chovy2812',
    database: 'QueMe',
});