import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          customCollections: ["i"],
		  componentPrefix: '', // 不使用前綴
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      defaultStyle: "", // Style apply to icons
      customCollections: {
        // 將 src/assets/icons 下的 svg 轉為 local 集合
        i: FileSystemIconLoader("src/assets/icons"),
      },
      defaultClass: "icon-[dir]-[name]", // Class names apply to icons
      compiler: "vue3",
    }),
    ViteImageOptimizer({
      png: {
        compressionLevel: 9, // 范围 0-9，9 是最高压缩，完全无损
      },
      jpg: {
        compressionLevel: 9, // 范围 0-9，9 是最高压缩，完全无损
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src", // 设置 @ 符号的别名为项目的 src 目录
    },
  },
});
