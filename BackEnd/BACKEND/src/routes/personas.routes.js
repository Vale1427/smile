//Importamos Router de express. Nos permitira usar rutas
import {Router} from 'express';


//Importamos los controles de los personas
import * as personasController from '../controller/persona.controller.js'

//Se crea un objeto para router
const router = Router();

//#region CREATION
router.post('/api/createGuessAccount', personasController.addGuest);
//#endregion

//#region REQUEST
router.get('/api/', )
//#endregion

//#region PUT
//#endregion

//#region DELETE
//#endregion

export default router;