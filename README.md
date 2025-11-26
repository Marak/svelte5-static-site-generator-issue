# svelte5-static-site-generator-issue

### Start

After `npm install`, run the development server:

```sh
npm run dev
```

This all works as expected.

### Building

Run the build

```sh
npm run build
```

You can preview the production build with `npm run preview`.

# The Issue

When previewing the build, navigate to `http://localhost:4173/user/Bobby` directly in the browser, it will 404

**Note:** If you navigate to the root page first, then click the link to `/user/Bobby`, it works fine. The issue is only when directly linking to that page.