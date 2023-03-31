import {error, json} from '@sveltejs/kit';
import {load} from 'cheerio';
import type {RequestHandler} from './$types';
import {validate} from '$lib/security/recaptcha.js';

export const POST = (async ({fetch, request}) => {
	const {email, password, recaptchaToken} = await request.json();

	await validate(fetch, recaptchaToken);

	const loginResponse = await fetch('https://www.benedu.co.kr/Home/Login', {
		method: 'POST',
		body: new URLSearchParams([
			[
				'__RequestVerificationToken',
				String(
					load(
						await (
							await fetch('https://www.benedu.co.kr/', {credentials: 'include'})
						).text(),
					)('input[name="__RequestVerificationToken"]').val(),
				),
			],
			['loginRemember', 'true'],
			['loginRemember', 'false'],
			['loginID', email],
			['loginPW', password],
			['loginGB', '2'],
		]),
		credentials: 'include',
		redirect: 'manual',
	});

	if (!loginResponse.ok) {
		console.log(loginResponse.url);
		throw error(400, '로그인에 실패했습니다.');
	}

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
