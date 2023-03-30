import {error} from '@sveltejs/kit';

export async function validate(
	{
		platform,
		fetch,
		responseToken,
		remoteIp,
		requiredScore = 0.5,
	}: {
		platform: App.Platform;
		fetch: WindowOrWorkerGlobalScope['fetch'];
		responseToken: string;
		remoteIp?: string;
		requiredScore?: number;
	},
) {
	const response = await fetch(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			method: 'POST',
			body: new URLSearchParams({
				secret: platform.env.RECAPTCHA_SECRET,
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
