import { Router } from "express";
import nodemailer from "nodemailer";
import cors from 'cors';
const router= Router();

 router.post('/email',cors(), async(req, res)=> {
        const{ name, email, message} = req.body;
            const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: '2525',
            secure: false,
            auth: {
                user:'47a1d6f3a1cfc2',
                pass:'6cc57d358a43bd',
            },
            tls: {
                rejectUnauthorized:false
            }
        });

         const info = await transporter.sendMail({
            From: 'Magic Elves <from@example.com>',
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