import {error} from '@sveltejs/kit';

export async function validate(
	fetch: WindowOrWorkerGlobalScope['fetch'],
	responseToken: string,
	{
		remoteIp,
		requiredScore = 0.5,
	}: {
		remoteIp?: string;
		requiredScore?: number;
	} = {},
) {
	const response = await fetch(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			method: 'POST',
			body: new URLSearchParams({
				secret: import.meta.env.VITE_RECAPTCHA_SECRET,
				response: responseToken,
				...(remoteIp
					? {
						remoteip: remoteIp,
					}
					: {}),
			}),
		},
	);

	if (!response.ok) {
		throw error(400, 'reCAPTCHA not available');
	}

	const data = await response.json();

	if (!data.success) {
		throw error(400, 'Invalid reCAPTCHA response');
	}

	if (data.score < requiredScore) {
		throw error(400, 'reCAPTCHA score too low');
	}
}
