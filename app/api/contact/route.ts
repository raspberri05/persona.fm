import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message cannot be empty"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, message } = schema.parse(body);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: Number(process.env.PORT),
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });

        const mailOptions = {
            to: process.env.EMAIL,
            subject: "New Contact Form Submission",
            html: `<p>You have received a new message:</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return Response.json(
            {
                success: true,
                message: "Email sent successfully",
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json(
                {
                    success: false,
                    error: error.errors.map((err) => ({
                        path: err.path,
                        message: err.message,
                    })),
                },
                { status: 400 },
            );
        }
        return Response.json(
            { success: false, error: "Internal Server Error", message: error },
            {
                status: 500,
            },
        );
    }
}