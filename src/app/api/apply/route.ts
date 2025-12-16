import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type Body = {
  name: string;
  email: string;
  cover?: string;
  roleTitle?: string;
  fileName?: string | null;
  fileBase64?: string | null;
};

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const attachments = [] as any[];
    if (body.fileBase64 && body.fileName) {
      attachments.push({
        filename: body.fileName,
        content: Buffer.from(body.fileBase64, 'base64'),
      });
    }

    const mail = {
      from: `${body.name} <${body.email}>`,
      to: 'careers@luvaa.app',
      subject: `New application - ${body.roleTitle || 'Role'}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nRole: ${body.roleTitle || ''}\n\nCover:\n${body.cover || ''}`,
      attachments,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
