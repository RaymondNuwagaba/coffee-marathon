import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'website@coffeemarathonug.com',
      to: process.env.CONTACT_EMAIL ?? 'info@coffeemarathonug.com',
      subject: `Website contact: ${subject ?? 'General enquiry'}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject ?? 'General enquiry'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      replyTo: email,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
