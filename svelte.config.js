import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      // Use absolute URLs for assets so deep links like /dashboard/... don't look for `_app` under the current path
      relative: false,
    },
    prerender: {
      handleUnseenRoutes: 'warn',
      entries: ['*'],  // Prerender only the root route (homepage) as static HTML
      handleHttpError: 'warn'
    },
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      // Use a separate SPA fallback so it doesn't overwrite the prerendered /index.html
      // This still lets the CDN serve client-side routes via 200.html while the homepage remains prerendered
      // fallback: "200.html", // 200.html fallback is causing direct linking to break...
      fallback: "200.html",
      precompress: false,
      strict: false,
    }),
    alias: {
      "@/*": "./path/to/lib/*",
    },
  },
};

export default config;
