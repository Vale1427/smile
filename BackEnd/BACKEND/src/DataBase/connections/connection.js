//#region imports 

//Impotar librerias de mssql
import sql from 'mssql'

//Se importa las credenciales
import {databaseHappySmile} from '../../configuration/config.js'

//#endregion

//Objeto con la configuracion para la conexion
const dbSetting = {
    user: databaseHappySmile.user || "",
    password :databaseHappySmile.password || "",
    server: databaseHappySmile.server || "",
    database: databaseHappySmile.database || "",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

/**
 * @async
 * @function getConnectionToHappySmile 
 * @param {string} metodo
 * @example
 * import {getConnectionToHappySmile} from "Path where the .js file is located."
 * async function example(){
 * const pool = await getConnectionToHappySmile(example.name)
 * const respuesta = await pool.request()
 *                   .query("Here should go the query.")
 * pool.close()
 * } 
 * @moreInformation 
 * https://www.npmjs.com/package/mssql 
 * @returns pool || error 
 * @author Victor Javier Otero Vizcayno
 * @creationDate 28/03/2024
 * @updateDate 01/04/2024
 */
export async function getConnectionToHappySmile(metodo) {
    try {
        const pool = await sql.connect(dbSetting);
        console.log("Conexion con: ", databaseHappySmile.database, " lograda")
        return pool;
    } catch (error) {
        console.log("Hubo en error en la conexion a la base de datos\nMas detalles: ")
        console.log("\n\n", "-".repeat(15),"\n",error.message,"\n","-".repeat(15));        
        throw new Error(`${error.message}`);
   
    }finally{
        console.log("El ultimo metodo que utilizo la conexón es: " + metodo)
    }
}
export {sql}