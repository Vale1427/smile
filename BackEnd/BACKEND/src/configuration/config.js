import { config } from "dotenv";
config();
export const puerto = {
    port : process.env.PORT || 3600
}

export const databaseHappySmile ={
    user: process.env.DB_USER_HP || '',
    password : process.env.DB_PASWD_HP || '',
    database : process.env.DB_DBNAME_HP ||'',
    server : process.env.DB_SERVER_HP || ''
}

export const  privateKeys = {
    
}