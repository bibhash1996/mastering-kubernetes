import 'dotenv/config'
import express from 'express';
import initialise from './init';
import router from './routes';
import cors from 'cors';


const app = express();
app.use(cors())

app.use(router);

const port = 8080;


initialise().then(() => {
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
})
