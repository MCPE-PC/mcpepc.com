<script lang="ts">
  import Recaptcha from "$lib/security/recaptcha.svelte";

  let loading = false;

  let email: string;
  let password: string;
</script>

<div class="mx-2">
  <div class="max-w-xl mx-auto">
    <h1 class="font-bold text-center text-3xl my-4">데이웰에 지원하세요.</h1>
    <p>지원은 3월 31일 오전 8시 15분에 시작합니다!</p>

    <!--
    <h3 class="font-bold text-2xl mb-2">🐝 베네듀 정보로 30초 지원하기</h3>

    <form class="mb-4">
      <input
        class="block form-input rounded-lg min-w-full mb-2"
        type="text"
        placeholder="베네듀 계정 이메일"
        readonly={loading}
        bind:value={email}
      />

      <input
        class="block form-input rounded-lg min-w-full mb-2"
        type="password"
        placeholder="베네듀 계정 비밀번호"
        readonly={loading}
        bind:value={password}
      />

      <Recaptcha let:execute>
        <button
          class="bg-yellow-400 block rounded-lg min-w-full py-1"
          class:animate-ping={loading}
          type="submit"
          disabled={loading}
          on:click={async () => {
            loading = true;

            const response = await fetch("/api/fetch-benedu", {
              method: "POST",
              body: JSON.stringify({
                email,
                password,
                recaptchaToken: await execute(),
              }),
            });

            console.log(await response.json());

            loading = false;
          }}
        >
          로그인
        </button>
      </Recaptcha>
    </form>

    <div class="flex items-center mb-4">
      <hr class="border-[1px] border-black grow" />
      <p class="mx-4">또는</p>
      <hr class="border-[1px] border-black grow" />
    </div>
    <a
      class="block bg-green-400 font-bold text-center text-2xl rounded-lg py-1 mb-4"
      href="/surveys/20230330-daywell"
    >
      정보 직접 입력하기
    </a>
  -->
  </div>
</div>
