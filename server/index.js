import express from 'express';
import router from './router/index.js';
import cors from 'cors';
import path from 'path';
import * as url from 'url';
import {PORT} from './router/config.js'

const app = express();
app.use(cors());

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(router)

app.use((req, res, next)=> {
    res.status(404).json({
        message:'not found'
    })
})

app.listen(PORT)
console.log('server running on port ', PORT)