# EmeriaPkgTest

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Steps to reproduce

- Close the repo
- Checkout the first commit (`git checkout e45aebba2983debcb374d4e84cb89354da9b42c1`)
- Ensure all version tags for the repo are deleted
- Run `pnpm install`
- Start local registry (`pnpm nx local-registry`)
- Publish the local package (`pnpm nx relese --first-release`)
  - This will release the v1.0.0 of the package
- Install the newly published package (`pnpm add -D -w @emeria-pkg-test/buildable`)
- Change dependency version in `packages/child-two/pacakge.json` from `workspace:*` to `1.0.0`
- Run `pnpm install` to update the lock file graph
- Change the return string in the `buildable.ts` to something else
- Run `pnpm nx serve @emeria-pkg-test/myapp` to see the changes


