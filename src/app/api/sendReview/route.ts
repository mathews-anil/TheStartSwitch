import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_X1CbigeJ_Bdtcs7kdhhzepXrsv1Fn4NPy');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email');
    const fileEntry = formData.get('file');

    if (!email || !fileEntry) {
      return NextResponse.json(
        { success: false, message: 'Email and file are required.' },
        { status: 400 }
      );
    }

    // Type assertion to File
    if (!(fileEntry instanceof File)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file.' },
        { status: 400 }
      );
    }

    const file: File = fileEntry; // now TS knows it's a File
    const buffer = Buffer.from(await file.arrayBuffer());

    const data = await resend.emails.send({
      from: 'The Start Switch <noreply@email.thestartswitch.com>',
      to: 'author@mathews.com',
      subject: 'New Review Form Submission',
      html: `
        <h3>New Review Submission</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>File:</strong> Attached below.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer.toString('base64'),
        },
      ],
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
