import nodemailer from "nodemailer";


export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.email',
            secure: false,
            port: 587,
            auth: {
                user: 'from@mail.com', // Укажите ваш адрес отправителя
                pass: 'password', // Укажите пароль от вашего адреса отправителя
            },
        });
        const mailOptions = {
            from: 'from@mail.com', // Адрес отправителя
            to: 'to@mail.com', // Адрес получателя
            subject: 'Новое сообщение с формы',
            html: `
        <h3>Заголовок письма</h3>
        <li> Name: ${name}</li>
        <li> Email or phone number: ${email}</li> 
        <li> Message: ${message}</li> `
        }
        await transporter.sendMail(mailOptions)

        return Response.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return Response.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}
