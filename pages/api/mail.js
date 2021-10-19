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
		from: 'hello@debjitmajumdar.om',
		subject: 'New web form message',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};
	let humpty = '';

	await mail
		.send(data)
		.then((e) => {
			console.log(`Message sent: ${e}`);
			humpty = String(e);
		})
		.catch((err) => {
			console.log(`Error: ${err}`);
			humpty = String(err);
		});
	if (humpty && humpty.includes('202')) {
		console.log('message success 202 yay humpty');
	} else if (humpty && humpty.includes('403')) {
		console.log('message failed on client side -- 403 error');
		dumpty += 'message failed on client side -- 403 error';
	}

	res.status(200).json({ status: 'ok' });

	// const passMessage = await mail.send(data);

	// console.log('Message is sent: ' + passMessage);
	// res.status(200).json({ status: 'ok' });
}

export let dumpty = '';
