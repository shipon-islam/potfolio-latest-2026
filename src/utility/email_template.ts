export const htmlTemplate = (name: string, email: string, message: string) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>

<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f6f8; padding:40px 20px;">
    <tr>
      <td align="center">

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e5e7eb;">

      <!-- Header -->
      <tr>
        <td style="padding:28px 32px; border-bottom:1px solid #e5e7eb;">
          <div style="font-size:13px; color:#6b7280; margin-bottom:8px;">
            NEW WEBSITE MESSAGE
          </div>

          <div style="font-size:24px; font-weight:700; color:#111827;">
            You received a new message
          </div>
        </td>
      </tr>

      <!-- Contact Information -->
      <tr>
        <td style="padding:30px 32px 10px;">

          <div style="font-size:13px; font-weight:600; color:#6b7280; margin-bottom:8px;">
            FROM
          </div>

          <div style="font-size:18px; font-weight:600; color:#111827; margin-bottom:4px;">
            ${name}
          </div>

          <a href="mailto:${email}"
            style="font-size:14px; color:#2563eb; text-decoration:none;">
            ${email}
          </a>

        </td>
      </tr>

      <!-- Message -->
      <tr>
        <td style="padding:25px 32px 32px;">

          <div style="font-size:13px; font-weight:600; color:#6b7280; margin-bottom:10px;">
            MESSAGE
          </div>

          <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px; padding:20px; font-size:15px; line-height:1.7; color:#374151;">
            ${message}
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px 32px; background:#f9fafb; border-top:1px solid #e5e7eb;">

          <div style="font-size:12px; line-height:1.6; color:#9ca3af;">
            This message was submitted through your portfolio website.
          </div>

        </td>
      </tr>

    </table>

  </td>
</tr>

  </table>

</body>
</html>
`;
};
export const feedbackTemplate = (
  name: string,
  email: string,
  message: string,
) => {
  return `<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Reaching Out</title>
</head>

<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f6f8; padding:40px 20px;">
    <tr>
      <td align="center">

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e5e7eb;">

      <!-- Header -->
      <tr>
        <td style="padding:32px; text-align:center; border-bottom:1px solid #e5e7eb;">

          <div style="
            width:52px;
            height:52px;
            margin:0 auto 16px;
            border-radius:50%;
            background:#f3f4f6;
            line-height:52px;
            font-size:24px;
          ">
            ✓
          </div>

          <h1 style="
            margin:0;
            font-size:26px;
            line-height:1.3;
            color:#111827;
          ">
            Thank You for Reaching Out!
          </h1>

        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:32px;">

          <p style="
            margin:0 0 18px;
            font-size:16px;
            line-height:1.7;
            color:#374151;
          ">
            Hi <strong>${name}</strong>,
          </p>

          <p style="
            margin:0 0 18px;
            font-size:15px;
            line-height:1.7;
            color:#4b5563;
          ">
            Thanks for getting in touch through my website. I've received your
            message successfully and appreciate you taking the time to reach out.
          </p>

          <p style="
            margin:0 0 24px;
            font-size:15px;
            line-height:1.7;
            color:#4b5563;
          ">
            I'll review your message and get back to you as soon as possible.
          </p>

          <!-- Message Summary -->
          <div style="
            background:#f8fafc;
            border:1px solid #e5e7eb;
            border-radius:12px;
            padding:20px;
            margin-bottom:24px;
          ">

            <div style="
              font-size:12px;
              font-weight:700;
              letter-spacing:.5px;
              color:#6b7280;
              margin-bottom:10px;
            ">
              YOUR MESSAGE
            </div>

            <div style="
              font-size:14px;
              line-height:1.7;
              color:#374151;
            ">
              ${message}
            </div>

          </div>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.6;
            color:#6b7280;
          ">
            Best regards,<br />
            <strong style="color:#111827;">Shipon Islam</strong><br />
            Full Stack Web Developer
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="
          padding:20px 32px;
          background:#f9fafb;
          border-top:1px solid #e5e7eb;
          text-align:center;
        ">

          <p style="
            margin:0;
            font-size:12px;
            line-height:1.6;
            color:#9ca3af;
          ">
            This is an automated confirmation email.
            Please don't reply to this message.
          </p>

        </td>
      </tr>

    </table>

  </td>
</tr>

  </table>

</body>
</html>
`;
};
