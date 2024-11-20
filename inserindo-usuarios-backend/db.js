import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const db_ = process.env.DB;

export const db = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: db_
});