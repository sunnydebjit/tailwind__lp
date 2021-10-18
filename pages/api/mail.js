// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
	const body = JSON.parse(req.body);
	const message = `
	Name: ${body.name}\r\n
	Email: ${body.email}\r\n
	Message: ${body.message}
	`;

	const data = {
		to: 'sunnydebjit@gmail.com',
		from: 'hello@debjitmajumdar.com',
		subject: 'New web form message',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	await mail
		.send(data)
		.then(() => console.log('send mail success'))
		.catch(console.log);

	res.status(200).json({ status: 'ok' });
}
