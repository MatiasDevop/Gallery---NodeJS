if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}// its only excute when it is disting to production

//require('dotenv').config();//this only use in produccion


const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('Enviorement', process.env.NODE_ENV);
});