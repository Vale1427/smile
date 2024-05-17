//#region Imports
import app from './configuration/app.js';
import './DataBase/connections/connection.js'
//#endregion
app.listen(app.get('port'));
console.clear();
console.log("Server on port", app.get('port'));
console.log('Enlace al puerto: '+'http://localhost:'+app.get('port'));
