/* import {json} from '@sveltejs/kit';
import {load} from 'cheerio';
import {RequestHandler} from './$types';
import {validate} from '$lib/security/recaptcha.js';

export const POST = (async ({fetch, request, platform}) => {
	const {email, password, recaptchaToken} = await request.json();

	await validate({platform: platform!, fetch, responseToken: recaptchaToken});

	await fetch('https://www.benedu.co.kr/Home/Login', {
		method: 'POST',
		body: new URLSearchParams({
			__RequestVerificationToken: String(
				load(await (await fetch('https://www.benedu.co.kr/')).text())(
					'input[name="__RequestVerificationToken"]',
				).val(),
			),
			loginRemember: 'false',
			loginID: email,
			loginPW: password,
			loginGB: '2',
		}),
		credentials: 'include',
	});

	const value = load(
		await (
			await fetch('https://www.benedu.co.kr/Home/MyProfile', {
				credentials: 'include',
			})
		).text(),
	)(
		'#MyProfile > div:nth-child(1) > div.col-sm-7 > div.profile-user-info > div:nth-child(1) > div.profile-info-value > span',
	);

	return json(value);
}) satisfies RequestHandler;
*/
