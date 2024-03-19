import 'dotenv/config'
import express from 'express';
import initialise from './init';
import router from './routes';


const app = express();
app.use(router);

const port = 3000;


initialise().then(() => {
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
})
