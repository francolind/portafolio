import express from 'express';
import router from './router/index.js';
import cors from 'cors';
import {PORT} from './router/config.js';

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:false}));

app.get('/',(req, res )=> res.send('<h1>hola desde express</h1>'));

app.use(express.json());

app.use(router)



app.use((req, res, next)=> {
    res.status(404).json({
        message:'not found'
    })
})

app.listen(PORT)
console.log('server running on port ', PORT)
