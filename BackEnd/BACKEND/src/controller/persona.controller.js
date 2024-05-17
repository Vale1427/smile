//Libreria de encriptacion
import CryptoJS from 'crypto-js';

//modelos
import {invitado, persona} from '../models/personaModel.js'

//Conexion a la base de datos
import {getConnectionToHappySmile, sql} from '../DataBase/connections/connection.js'
//#region  METODOS POST

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns res || error 
 */
export const addGuest = async (req, res) =>{
    let registro = invitado;
    //Rellenar el modelo con datos reales
    registro.nombre = req.body.name;
    registro.ApellidoP = req.body.app;
    registro.ApellidoM = req.body.apm;
    registro.correoElectronico = req.body.email;
    registro.Telefono = req.body.phone;
    registro.FechaNacimiento = req.body.fecNac;
    if(!hasEmptyEspaces(registro)){
        try {
            const pool = await getConnectionToHappySmile(addGuest.name);
            try {
                const respuestaRegistro = await pool.request()
                    .input("correoElectronico", sql.VarChar(100), registro.correoElectronico)
                    .input("nombre", sql.VarChar(100), registro.nombre)
                    .input("ApellidoP", sql.VarChar(100), registro.ApellidoP)
                    .input("ApellidoM", sql.VarChar(100), registro.ApellidoM)
                    .input("Telefono", sql.VarChar(20), registro.Telefono)
                    .input("FechaNacimiento", sql.Date, registro.FechaNacimiento)
                    .query("EXEC up_registrarInvitado @correoElectronico, @nombre, @ApellidoP, @ApellidoM, @Telefono, @FechaNacimiento")

            console.log("error3");

                console.log(respuestaRegistro);
                res.status(200).json(
                    {
                        msg: "procedimiento exitoso"
                    }
                )
            } catch (error) {
                res.status(503).json(ErrorFunction(error, addGuest.name))    
            }
        } catch (error) {
            res.status(503).json(ErrorFunction(error, addGuest.name))
        }
    }else{
        return res.status(400).json(
            {
                "status": 400,
                "msg": "Bad request. Fill all inputs please"
            }
        )
    }

    
   
}
//#endregion



//#region FUNCIONES PRIVADAS


function hasEmptyEspaces(obj) {
    // Convertir el objeto a un array de sus claves
    const claves = Object.keys(obj);
  
    // Recorrer las claves
    for (const clave of claves) {
      // Obtener el valor de la propiedad actual
      const valor = obj[clave];
  
      // Revisar si el valor es un espacio vacío, `null`, `undefined` o el valor `0`
      if (valor === ''|| valor === undefined || valor === 0) {
        return true; // Si se encuentra un valor vacío, se retorna `true`
      }
    }
  
    // Si no se encontró ningún valor vacío, se retorna `false`
    return false;
  }

function encriptWord(contrasenia){
    let hashWord = undefined;
    try {
        let hashWord = CryptoJS.SHA512(contrasenia).toString();
        return hashWord
    } catch (error) {
        return hashWord;
    }finally{
        console.log(hashWord);
    }
}

/**
 * @function Error
 * @param {*} error 
 * @param {*} modulo
 * @description This function should be used within the try-catch block. 
 * In the catch part, you can send the error. 
 * It should also receive the name of the module that uses this function. 
 * @example
 * function example(){}
 *  try{
 *      ***code***
 *  }catch(error){
 *      return Error(error, example.name)
 *  }
 * }
 * @returns {JSON} 
 * @author Victor Javier Otero Vizcayno
 * @dateCreation 01/04/2024
 * @dateUpdate --/--/----
 */
function ErrorFunction(error, metodo) {
    console.clear()
    console.log("Se ha tenido un error en: " + metodo)
    console.error(error.message+"\n")
    console.log("Error a mas detalle:\n\n", error);
    let respuesta =
    {

        status: 500,
        msg: "Ha ocurrido un error interno en el servidor",
        respuesta: error.message

    }
    return respuesta;
}