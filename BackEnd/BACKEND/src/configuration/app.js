//#region imports 

//configuraciones
import {puerto} from './config.js'

//Librerias externas de nodejs
import express from "express";
import cors from "cors"
import morgan from "morgan";


//rutas de la API
import personaRoutes from '../routes/personas.routes.js';
//#endregion 



//CREACION DE OBSJETOS
const app = express()


//SETTINGS
app.set('port', puerto.port || 3500)

//#region MiddleWares

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: ["http://localhost:4200"]}))
app.use(morgan("dev"));

//#endregion

//#region ROUTES
app.use(personaRoutes);
//#endregion 


//Exportar el modulo
export default app;

