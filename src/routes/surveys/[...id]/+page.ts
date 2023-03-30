import type {PageLoad} from './$types';

export const load = (async ({fetch, url, params}) => {
	const response = await fetch(
		'/data/surveys/'
			+ encodeURIComponent(params.id.trim().toLowerCase())
			+ '.json',
	);

	if (response.ok) {
		const surveyDataObject = await response.json();

		if (url.searchParams.has('clientId')) {
			surveyDataObject.clientId = url.searchParams.get('clientId');
		}

		return {
			props: {surveyDataObject},
		};
	}

	return {
		status: response.status,
		error: new Error(response.statusText),
	};
}) satisfies PageLoad;
