<script lang="ts">
  import Recaptcha from "$lib/security/recaptcha.svelte";

  let loading = false;

  let email: string;
  let password: string;
</script>

<div class="mx-2">
  <div class="max-w-xl mx-auto">
    <h1 class="font-bold text-center text-3xl my-4">데이웰에 지원하세요.</h1>

    <h3 class="font-bold text-2xl mb-2">직접 입력해서 지원하기</h3>

    <a
      class="block bg-green-400 text-center rounded-lg py-1 mb-4"
      href="/surveys/20230330-daywell"
    >
      정보 직접 입력하기
    </a>

    <div class="flex items-center mb-4">
      <hr class="border-[1px] border-black grow" />
      <p class="mx-4">또는</p>
      <hr class="border-[1px] border-black grow" />
    </div>

    <h3 class="font-bold text-2xl mb-2">🐝 베네듀 정보로 30초 지원하기</h3>

    <Recaptcha let:execute>
      <form
        class="relative mb-4"
        on:submit|preventDefault={async () => {
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

        <div class="bg-white rounded-lg p-1">
          <p class="font-bold">개인정보처리방침</p>
          <p>수집하는 정보: 이메일 주소, 비밀번호</p>
          <p>목적: 베네듀 계정 정보 확인</p>
          <p>보유 기간: 저장하지 않으며 확인 즉시 폐기 (최대 30초)</p>
        </div>
        <div class="mb-2">
          <input
            class="form-checkbox rounded-md"
            id="benedu-privacy"
            type="checkbox"
          />
          <label for="benedu-privacy">동의합니다.</label>
        </div>

        <button
          class="bg-yellow-400 block rounded-lg min-w-full py-1"
          class:animate-ping={loading}
          type="submit"
          disabled={loading}
        >
          로그인
        </button>

        <div class="absolute inset-0 bg-black opacity-70" />
        <p class="absolute inset-0 text-center text-white">
          🐝 베네듀 시스템 오류로 금일 점검 중입니다.
        </p>
      </form>
    </Recaptcha>
  </div>
</div>
