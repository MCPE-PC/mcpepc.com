<script context="module" lang="ts">
	import type {Load} from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const res = await fetch('/data/surveys/' + encodeURIComponent(page.params.id.trim().toLowerCase()) + '.json');

		if (res.ok) {
			const surveyDataObject = await res.json();

	  	if (page.query.has('clientId')) {
				surveyDataObject.clientId = page.query.get('clientId');
			}

			return {
				props: { surveyDataObject }
			};
		}

		return {
			status: res.status,
			error: new Error(res.statusText),
		};
	};
</script>

<script lang="ts">
	import type {SurveyModel} from 'survey-knockout';
	import * as Survey from 'survey-knockout/survey.ko.min.js';
	import 'survey-knockout/modern.min.css';
  import { onMount } from 'svelte';

  Survey.StylesManager.applyTheme("modern");

	export let surveyDataObject: Record<string, any>;

  onMount(() => {
    const survey: SurveyModel = new Survey.Model(surveyDataObject, 'surveyContainer');
  });

	// survey.onComplete.add((sender) => {});
</script>

<svelte:head>
	<title>MCPE_PC Survey</title>
</svelte:head>

<div>
	<h1>MCPE_PC 설문조사</h1>
	<div id="surveyContainer" style="background: #ffffff;"></div>
</div>
