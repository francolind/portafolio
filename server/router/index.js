import { Router } from "express";
import nodemailer from "nodemailer";
import {MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } from './config.js'
import cors from 'cors';
const router= Router();

 router.post('/email',cors(), async(req, res)=> {
        const{ name, email, message} = req.body;
            const transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: MAIL_PORT,
            secure: false,
            auth: {
                user:MAIL_USER,
                pass:MAIL_PASS,
            },
            tls: {
                rejectUnauthorized:false
            }
        });

         const info = await transporter.sendMail({
            from:'to email<from@example.com>',
            to:'francolind95.fl@gmail.com',
            subject:'website contact form',
            html: `
            <h2> here is your email</h2>
            <p>${name}</p>
            <p>${email}</p>
            <p>${message}</P>
            `,
        });
        res.send('resivido')
        console.log('message sent', info.messageId);
    })


export default router;