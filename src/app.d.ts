declare global {
	namespace App {
		// Interface Error {}
		// interface Locals {}
		// interface PageData {}

		// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
				RECAPTCHA_SECRET: string;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
