import { transporter } from "@/lib/transporter";
import { feedbackTemplate, htmlTemplate } from "@/utility/email_template";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  if (
    !formData.has("name") ||
    !formData.has("email") ||
    !formData.has("message")
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }
  const { name, email, message } = Object.fromEntries(formData);

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL,
      subject: `Contact Form Submission from ${name}`,
      html: htmlTemplate(name as string, email as string, message as string),
    };

    const mailOptionsClient = {
      from: `Shipon islam <${process.env.EMAIL}>`,
      to: email as string,
      subject: `Thanks for Reaching Out, ${name}!`,
      html: feedbackTemplate(
        name as string,
        email as string,
        message as string,
      ),
    };
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(mailOptionsClient),
    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error({ error: "Error sending email" }, error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
