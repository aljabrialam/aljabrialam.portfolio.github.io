import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';
import react from '@vitejs/plugin-react';
const isStorybook = process.argv[1]?.includes('storybook');
import { vercelPreset } from '@vercel/remix/vite';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
    outDir: 'build'
  },
  // base: "/aljabrialam.portfolio.github.io/",
  server: {
    port: 7777,
  },
  base: "/portfolio/",
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remixCloudflareDevProxy(),
    remix({
      target: "spa",
      // ssr: false,
      basename: "/portfolio/",
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
      server: {
        host: true
      },
      presets: [vercelPreset()],
      // buildEnd(args) {
      //   // if (!args.viteConfig.isProduction) return;

      //   // When deploying to GitHub Pages, if you navigate from / to another
      //   // route and refresh the tab, it will show the default GH Pages 404
      //   // page. This happens because GH Pages is not configured to send all
      //   // traffic to the index.html where we can load our client-side JS.
      //   // To fix this, we can create a 404.html file that contains the same
      //   // content as index.html. This way, when the user refreshes the page,
      //   // GH Pages will serve our 404.html and everything will work as
      //   //expected.
      //   const buildPath = args.viteConfig.build.outDir;
      //   // copyFileSync(
      //   //   join(buildPath, "index.html"),
      //   //   join(buildPath, "404.html"),
      //   // );
      // },
    }),
    jsconfigPaths()
    // react()
  ],
});
