import sgMail from '@sendgrid/mail'

import { constants } from '../../../config/constants'

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, message } = await req.json()
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const { CONTACT_FORM_EMAIL_TO, CONTACT_FORM_EMAIL_FROM } = constants

  if (!SENDGRID_API_KEY) {
    return new Response('Missing Sendgrid API key', { status: 500 })
  }

  sgMail.setApiKey(SENDGRID_API_KEY)

  try {
    await sgMail.send({
      to: CONTACT_FORM_EMAIL_TO,
      from: `Contact Brawo Impact <${CONTACT_FORM_EMAIL_FROM}>`,
      replyTo: `${firstName} ${lastName} <${email}>`,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: message,
      html: `
            <p><strong>Prénom:</strong> ${firstName}</p>
            <p><strong>Nom:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
          `
    })

    return new Response('Email has been sent')
  } catch (err) {
    return new Response(`Error sending email: ${err}`, { status: 500 })
  }
}
