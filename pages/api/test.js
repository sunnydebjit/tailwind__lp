import { dumpty } from './mail';

export default async function test(req, res) {
	res.status(200).json({ status: dumpty });
}
