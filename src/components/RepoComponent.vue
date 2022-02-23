<template>
  <div class="user_repo bg-gray-100 p-4 inline-block rounded-2xl">
    <a
      class="repo_title text-2xl text-gray-800 hover:underline mb-2 transition"
      href="https://github.com/hyperspace42/activity-app"
      target="_blank"
      >activity-app</a
    > <!-- slice to 32 symbols -->
    <div class="flex flex-col gap-1 mt-4">
      <p :style="getLanguageBadgeStyle" class="text-xl py-2px px-4px self-start rounded-lg">{{ lang }}</p>
      <p class="text-xl text-gray-700">
        Size: <span :style="`color: ${getLanguageTextColorStyle()}`">{{ size }}</span
        >{{ sizeType }}
      </p>
      <div class="user_repo_stars flex flex-row items-center ml-auto">
        <span class="text-lg text-gray-800">0</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { languageColors } from '@/languageColors';

export default defineComponent({
  setup() {
    const repoSize = 1244;
    const lang = 'Svelte';

    const size = computed((): string | number => {
      return repoSize >= 1024 ? (repoSize / 1024).toFixed(2) : repoSize;
    });

    const sizeType = computed((): string => {
      return repoSize >= 1024 ? 'Mb' : 'Kb';
    });

    const getLanguageBgColorStyle = function (): string {
      return `background: ${languageColors[lang].color}; `;
    };

    const getLanguageTextColorStyle = function (): string {
      const color = hexToRgb(languageColors[lang].color);
      if (Math.ceil(color.reduce((start, next) => start + next) / 3) <= 180) {
        return languageColors[lang].color;
      } else {
        return '#2a2727';
      }
    };

    const getLanguageTextLightnessStyle = function (): string {
      const color = hexToRgb(languageColors[lang].color);

      if (Math.ceil(color.reduce((start, next) => start + next) / 3) <= 150) {
        return 'color: #eeedf5';
      } else {
        return 'color: #2a2727';
      }
    };

    const getLanguageBadgeStyle = computed((): string => {
      return getLanguageBgColorStyle() + getLanguageTextLightnessStyle();
    });

    const hexToRgb = function (hex: string): number[] {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return [parseInt(result![1], 16), parseInt(result![2], 16), parseInt(result![3], 16)];
    };

    return {
      size,
      sizeType,
      lang,
      getLanguageBadgeStyle,
      getLanguageTextColorStyle,
    };
  },
});
</script>

<style scoped></style>
