<template>
  <div class="p-4 mx-auto max-w-7xl text-center dark:bg-black">
    <div class="cursor-pointer flex justify-end" @click="changeDarkMode">
      <ILight v-if="!isDark" class="cursor-pointer text-primary dark:text-secondary" width="24" height="24" />
      <IMoon v-else class="cursor-pointer text-primary dark:text-secondary" width="24" height="24" />
    </div>
    <div class="w-[136px] m-auto">
      <div class="m-auto rounded-full overflow-hidden p-1 border-4 border-primary dark:border-darkPrimary">
        <div class="rounded-full overflow-hidden">
          <img class="m-auto align-bottom" :src="person" :alt="'個人照片'" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[15px] mt-[39px]">
      <div class="text-center text-3xl font-black text-forth dark:text-darkPrimary">賴世原 Tim</div>
      <div class="text-center font-black dark:text-darkThird">前端工程師 Frontend Developer</div>
      <div class="flex justify-center gap-4">
        <div>
          <a href="https://www.facebook.com/lockon.stratos.568">
            <IFacebook class="cursor-pointer text-third dark:text-darkThird" :icon="'facebook'" width="24" height="24" />
          </a>
        </div>
        <div>
          <a href="https://github.com/lockon1248">
            <IGithub class="cursor-pointer text-third dark:text-darkThird" width="24" height="24" />
          </a>
        </div>
        <div>
          <IMail class="cursor-pointer text-third dark:text-darkThird" width="24" height="24" />
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-4 m-4">
      <div class="w-[75px]" v-for="item in personalData" :key="item">
        <div class="dark:text-darkPrimary">{{ item.content }}</div>
        <div class="text-forth font-black dark:text-darkThird">{{ item.title }}</div>
      </div>
    </div>
    <div class="flex justify-center gap-4">
      <div class="h-[50px] leading-10 p-3 bg-primary dark:bg-darkPrimary shadow-md flex items-center rounded-md text-white dark:text-black">
        <a href="https://drive.google.com/file/d/1gUtqkVXWQj49aH8mH9hLMTTGIkWxXJ2a/view?usp=drive_link" class="flex gap-3 items-center">
          <p>查看履歷</p>
          <ILink class="cursor-pointer text-white dark:text-black" width="20" height="20" />
        </a>
      </div>
      <div class="h-[50px] border-2 leading-10 flex items-center p-4 border-primary rounded-md dark:border-darkPrimary">
        <a href="tel:+886-9-75556202">
          <ITel lass="cursor-pointer text-primary dark:text-darkPrimary" width="20" height="20" />
        </a>
      </div>
    </div>
    <div>
      <nav class="inline-block">
        <ul class="flex p-1 my-10 bg-slate-200 rounded cursor-pointer shadow-md flex-wrap dark:bg-darkThird">
          <li
            @click="key = 'resume'"
            class="px-10 py-3 rounded-md flex-grow transition duration-300 ease-in-out"
            :class="{
              'bg-primary shadow-2xl text-white dark:bg-darkPrimary dark:text-black': key === 'resume',
              'bg-slate-200 dark:bg-darkThird dark:text-darkPrimary': key !== 'resume',
            }"
          >
            經歷
          </li>
          <li
            @click="key = 'portfolio'"
            class="px-10 py-3 rounded-md flex-grow transition duration-300 ease-in-out"
            :class="{
              'bg-primary shadow-2xl text-white dark:bg-darkPrimary dark:text-black': key === 'portfolio',
              'bg-slate-200 dark:bg-darkThird dark:text-darkPrimary': key !== 'portfolio',
            }"
          >
            作品集
          </li>
          <li
            @click="key = 'skill'"
            class="px-10 py-3 rounded-md flex-grow transition duration-300 ease-in-out"
            :class="{
              'bg-primary shadow-2xl text-white dark:bg-darkPrimary dark:text-black': key === 'skill',
              'bg-slate-200 dark:bg-darkThird dark:text-darkPrimary': key !== 'skill',
            }"
          >
            技能
          </li>
        </ul>
      </nav>
    </div>
    <div class="mx-auto flex justify-around flex-wrap">
      <Resume v-if="key === 'resume'" />
      <Portfolio v-if="key === 'portfolio'" />
      <Skill v-if="key === 'skill'" />
    </div>
  </div>
</template>
<script setup>
import Skill from "@/components/Skill.vue";
import Resume from "@/components/Resume.vue";
import Portfolio from "@/components/Portfolio.vue";
import person from '@/assets/img/personal.jpg';
import { ref, onMounted } from "vue";
const key = ref("resume");
const isDark = ref(false);
const personalData = ref([
  { title: "工作經驗", content: "6Y+" },
  { title: "專案", content: "6+" },
  { title: "年紀", content: "30+" },
]);
const getDarkMode = () => {
  isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(isDark.value);
};
const changeDarkMode = () => {
  isDark.value = !isDark.value;
  const appRoot = document.getElementsByTagName("body")[0]; // 使用索引訪問第一個元素
  if (isDark.value) {
    appRoot.classList.add("dark");
  } else {
    appRoot.classList.remove("dark");
  }
};
onMounted(() => {
  document.title = "My Portfolio"; // 设置文档标题
  getDarkMode();
});
</script>
