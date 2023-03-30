<script lang="ts">
  async function execute(action = "submit") {
    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute("6LdCkEIlAAAAAM9h7_lWyXxoT6PNkflpWk4MNe6X", { action })
          .then((token) => {
            resolve(token);
          });
      });
    });
  }
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?render=6LdCkEIlAAAAAM9h7_lWyXxoT6PNkflpWk4MNe6X"
  ></script>
</svelte:head>

<slot {execute} />
