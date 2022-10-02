// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Mailgun from 'mailgun-js';

const mgCredentials: { apiKey: string, domain: string } = {
    apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
    domain: 'adrielsan.social'
}

const sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to,
        from,
        subject,
        text: content
    }
    return Mailgun(mgCredentials).messages().send(data)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            await sendEmail(req.body.email, 'Adriel Santana <no-reply@adrielsan.social>', req.body.subject, req.body.message)
            res.status(200).json({ validate: true })
        } catch (error) {
            console.log(error)
            res.status(500).json({ validate: false })
        }
    }
}