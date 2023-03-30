<script lang="ts">
  import * as Survey from "survey-knockout";
  import "survey-knockout/defaultV2.css";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let surveyContainer: HTMLDivElement;

  onMount(() => {
    Survey.StylesManager.applyTheme("defaultV2");

    const survey = new Survey.Survey(data.props?.surveyDataObject);

    // Survey.onComplete.add(sendDataToServer);

    survey.render(surveyContainer);
  });
</script>

<svelte:head>
  <title>MCPE_PC Survey</title>

  <meta name="og:title" content="MCPE_PC Survey" />
</svelte:head>

<h1 class="font-bold text-center text-2xl">MCPE_PC Survey</h1>

{#if data.props?.surveyDataObject.meta?.deadline}
  <p>
    제출 기한: {new Date(
      data.props.surveyDataObject.meta.deadline
    ).toLocaleDateString()}
  </p>
{/if}

<div bind:this={surveyContainer} />
