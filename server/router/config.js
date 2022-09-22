import {config} from 'dotenv';

config()

export const PORT = process.env.PORT || 3000
export const MAIL_HOST = process.env.MAIL_HOST ||'smtp.mailtrap.io'
export const MAIL_PORT = process.env.MAIL_PORT ||'465'
export const MAIL_USER = process.env.MAIL_USER ||'47a1d6f3a1cfc2'
export const MAIL_PASS = process.env.MAIL_PASS ||'6cc57d358a43bd'
export const MAIL_FROM = process.env.MAIL_FROM ||'<from@example.com>'