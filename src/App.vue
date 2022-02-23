<template>
  <div class="container mx-auto mt-6">
    <p class="text-xl text-gray-900 text-center mb-4">
      Search profile on <a class="text-indigo-500 hover:underline no-underline" href="https://github.com">github</a>
    </p>
    <div class="w-10/12 mx-auto search flex flex-row items-center">
      <SearchInput />
      <SearchButton class="ml-4" />
    </div>
    <div class="user w-10/12 mx-auto mt-8">
      <div class="user_card">
        <div class="user_card_inner bg-gray-100 p-4 inline-block rounded-2xl">
          <a class="text-2xl text-gray-800 hover:text-blue-600 transition" href="https://github.com/hyperspace42"
            ><span class="text-sky-500">#</span>hyperspace42</a
          >
          <div class="flex flex-col mt-6 gap-6">
            <img class="w-48 h-48 rounded-2xl" draggable="false" src="https://avatars.githubusercontent.com/u/79422457?v=4" alt="" />
            <div class="flex flex-col">
              <span class="text-xl text-gray-800">Followers: <span class="text-amber-500">1</span></span>
              <span class="text-xl text-gray-800 my-1">Following: <span class="text-orange-500">1</span></span>
              <span class="text-xl text-gray-800">Public repos: <span class="text-rose-500">17</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="user_repos">
        <div class="user_repos_inner">
          <RepoComponent />
          <RepoComponent />
          <RepoComponent />
          <RepoComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SearchInput from '@/components/SearchInput.vue';
import SearchButton from '@/components/SearchButton.vue';
import RepoComponent from '@/components/RepoComponent.vue';

export default defineComponent({
  name: 'App',
  components: { SearchInput, SearchButton, RepoComponent },
});
</script>

<style lang="scss">
.user {
  display: grid;
  grid-template-columns: 3fr 10fr;
  grid-template-rows: 1fr;
  grid-gap: 1rem;

  &_repos {
    &_inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 1rem;
    }
  }
}
</style>
