import type { NextApiRequest} from 'next';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request){
    const data = await req.json()

    const messageSent = {
        sent: true
    }
    
    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    let sub = "Portfolio message from " + data.values.name;

    const mailOptions = {
        from: email,
        to: process.env.TO_EMAIL,

    }

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: email,
            pass: pass,
        }
    })


    try{
        await transporter.sendMail({
            ...mailOptions,
            subject: sub,
            text: data.values.message
        })

        return NextResponse.json([messageSent])
    } catch(e) {
        console.log(e);
        messageSent.sent  =  false;
        return NextResponse.json([messageSent])
    }
}