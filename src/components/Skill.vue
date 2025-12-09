<template>
  <div class="flex gap-12 justify-evenly pt-3 flex-wrap" v-for="item in skillList" :key="item">
    <div>
      <div class="font-black my-3 dark:text-darkPrimary">{{ item.category }}</div>
      <div class="h-auto xs:h-[200px] flex flex-col flex-wrap">
        <div class="flex flex-col gap-2 m-2" v-for="item in item.items" :key="item">
          <div class="flex items-center gap-2 dark:text-darkPrimary">
            <ICheck class="text-secondary dark:text-secondary" width="20" height="20" />
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const skillList = reactive([
  { category: "前端開發", items: ["HTML", "CSS, SCSS", "JavaScript", "jQuery", "Tailwind CSS", "Github", "RWD", "Axios", "Bootstrap 5", "Vue 3", "astro", "angular"] },
  { category: "後端開發", items: ["MySQL", "PHP"] },
  { category: "使用者介面設計", items: ["Figma", "Wireframe", "Prototype", "Mockup"] },
  { category: "版本控制", items: ["Git", "GitHub", "GitLab", "sourcetree", "fork"] },
  { category: "前端打包", items: ["vite", "webPack"] },
]);
</script>
