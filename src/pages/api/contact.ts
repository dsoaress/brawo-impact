import formData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next/types'

import { constants } from '../../config/constants'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, email, subject, message } = req.body
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
  const { CONTACT_FORM_EMAIL_DOMAIN, CONTACT_FORM_EMAIL_TO } = constants

  if (!MAILGUN_API_KEY) {
    return res.status(500).json({ error: 'Missing Mailgun API key' })
  }

  const mailgun = new Mailgun(formData)
  const mg = mailgun.client({ username: 'api', key: MAILGUN_API_KEY })

  try {
    await mg.messages.create(CONTACT_FORM_EMAIL_DOMAIN, {
      from: `Contact Brawo Impact <contact@${CONTACT_FORM_EMAIL_DOMAIN}>`,
      to: [CONTACT_FORM_EMAIL_TO],
      'h:Reply-To': `${firstName} ${lastName} <${email}>`,
      subject,
      text: message
    })

    res.json({ message: 'Email has been sent' })
  } catch (err) {
    res.status(500).json({ error: `Error sending email: ${err}` })
  }
}
