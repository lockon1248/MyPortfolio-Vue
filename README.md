# My Portfolio - Vue 3
以 Vue 3 + Vite 打造的個人作品集網站，整合經歷時間軸、作品列表、技能標籤與深淺色主題切換，可在桌面與行動端瀏覽。

- Demo：https://my-portfolio-vue-six.vercel.app/#/
- 作者：賴世原 Tim（Frontend Developer）

## 特色
- 主題切換：依系統偏好預設，並提供明暗模式按鈕切換。
- 資訊總覽：首頁即呈現照片、社群/聯絡連結與重點數據（年資、專案數等）。
- 模組化版塊：經歷（時間軸）、作品集卡片（GitHub / Demo 連結）、技能分類列表，資料集中於各組件陣列便於維護。
- 響應式設計：Tailwind CSS + SCSS 自訂，支援 700px 以下的版面調整。
- 輕量開發：Vite 開發體驗、Composition API，搭配自動載入圖示套件。

## 技術棧
- 前端框架：Vue 3（Composition API）
- 開發工具：Vite、Vue Router（hash history）
- 樣式：Tailwind CSS、SCSS
- 圖示：unplugin-icons（@iconify-json/ic、@iconify-json/il）
- 其他：Vite Plugin Image Optimizer、Autoprefixer、PostCSS

## 專案結構
```
MyPortfolio-Vue/
├─ src/
│  ├─ App.vue                # 首頁版面與主題切換
│  ├─ main.js                # 入口、載入 router 與全域樣式
│  ├─ router/index.js        # 使用 hash history（目前未定義頁面路由）
│  ├─ components/
│  │  ├─ Resume.vue          # 求學/工作經歷時間軸
│  │  ├─ Portfolio.vue       # 作品集卡片（GitHub、Demo 按鈕）
│  │  └─ Skill.vue           # 技能分類列表
│  ├─ assets/                # 個人照片、作品截圖、SVG 圖示
│  └─ assets/styles/main.css # Tailwind 入口
├─ public/                   # 靜態資源
├─ package.json              # 腳本與依賴
└─ vite.config.js
```

## 環境需求
- Node.js 18+（建議與 Vite 官方相容的 LTS 版本）
- npm 9+（或使用 pnpm / yarn 亦可自行調整）

## 快速開始
```bash
# 安裝依賴
npm install

# 開發伺服器
npm run dev

# 開發伺服器（局域網裝置可連）
npm run host

# 打包靜態檔案
npm run build

# 預覽打包結果
npm run preview
```

## 自訂內容
- 個人資料 / 數據：`src/App.vue` 內的 `personalData` 陣列與社群連結。
- 履歷與工作時間軸：`src/components/Resume.vue` 中的 `dataList`。
- 作品卡片：`src/components/Portfolio.vue` 中的 `portfolioData`（圖片放於 `src/assets/img/portfolio/`）。
- 技能列表：`src/components/Skill.vue` 中的 `skillList`。

## 部署建議
- 已以 hash history 配合靜態站台（如 Vercel、GitHub Pages）運行；打包後的 `dist/` 可直接上傳至任意靜態主機。
- 若需自訂網域或 SEO，可在 `index.html` 調整 meta 標籤與 OG 設定。
