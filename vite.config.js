import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			symbolId: 'icon-[dir]-[name]', // 指定symbolId格式 預設：'icon-[dir]-[name]
			inject: 'body-last' | 'body-first', // 自定义插入位置
			customDomId: '__svg__icons__dom__' // 自訂 Dom ID
		}),
		ViteImageOptimizer({
			png: {
				compressionLevel: 9, // 范围 0-9，9 是最高压缩，完全无损
			},
			jpg: {
				compressionLevel: 9, // 范围 0-9，9 是最高压缩，完全无损
			}
		})
	],
	resolve: {
		alias: {
			'@': '/src' // 设置 @ 符号的别名为项目的 src 目录
		}
	}
});
