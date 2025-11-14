import { Resend } from 'resend';

const resend = new Resend('re_X1CbigeJ_Bdtcs7kdhhzepXrsv1Fn4NPy'); // client verified key

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email is required' }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'The Start Switch <noreply@email.thestartswitch.com>', // verified sender
      to: 'author@mathews.com',   // client recipient
      subject: 'New Toolkit Form Submission',
      html: `<p><strong>Email:</strong> ${email}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
