export default {

  "apps/satu-login-landingpage/**/*.{js,jsx,ts,tsx}": [
    "pnpm --filter satu-login-landingpage exec eslint --fix",
    "prettier --write"
  ],
  "apps/satu-login-app/**/*.{js,jsx,ts,tsx}": [
    "pnpm --filter satu-login-app exec eslint --fix",
    "prettier --write"
  ],
  "packages/ui/**/*.{js,jsx,ts,tsx}": [
    "pnpm --filter @workspace/ui exec eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ]
}
