<template>
  <div class="cont mx-auto mt-6">
    <p class="text-xl text-gray-900 text-center mb-4">
      Search profile on <a class="text-indigo-500 hover:underline no-underline" href="https://github.com">github</a>
    </p>
    <div class="w-full mx-auto search flex flex-row items-center">
      <SearchInput @input-username="getInputUsername" @input-enter="getGithubProfile" />
      <SearchButton @button-enter="getGithubProfile" class="ml-4" />
    </div>
    <div v-if="user" class="user w-full mx-auto mt-8">
      <div class="user_card">
        <div class="user_card_inner bg-gray-100 p-4 inline-block rounded-2xl">
          <a class="text-2xl text-gray-800 hover:underline transition" :href="user.html_url" target="_blank"
            ><span class="text-sky-500">#</span>{{ user.login }}</a
          >
          <div class="flex flex-col mt-6 gap-6">
            <img class="w-full rounded-2xl" draggable="false" :src="user.avatar_url" alt="" />
            <div class="flex flex-col">
              <span class="text-xl text-gray-800"
                >Followers: <span class="text-amber-500">{{ user.followers }}</span></span
              >
              <span class="text-xl text-gray-800 my-1"
                >Following: <span class="text-orange-500">{{ user.following }}</span></span
              >
              <span class="text-xl text-gray-800"
                >Public repos: <span class="text-rose-500">{{ user.public_repos }}</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="user_repos">
        <div class="user_repos_inner">
          <RepoComponent
            v-for="repo in repos"
            :key="repo"
            :title="repo.name"
            :url="repo.html_url"
            :language="String(repo.language)"
            :repoSize="repo.size"
            :stars="repo.stargazers_count"
          />
        </div>
      </div>
    </div>
    <div v-else class="mt-16 text-center">
      <p class="text-6xl text-gray-700">Find user<span class="text-purple-500">!</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import SearchInput from '@/components/SearchInput.vue';
import SearchButton from '@/components/SearchButton.vue';
import RepoComponent from '@/components/RepoComponent.vue';

import { getUserInfo, getUserRepos } from '@/api';

export default defineComponent({
  name: 'App',
  components: { SearchInput, SearchButton, RepoComponent },

  setup() {
    const inputText = ref('');
    const user = ref();
    const repos = ref();

    const getInputUsername = function (text: string) {
      inputText.value = text;
    };

    const getGithubProfile = async function () {
      if (!inputText.value.trim()) return;

      user.value = await getUserInfo(inputText.value);
      repos.value = await getUserRepos(inputText.value);
    };

    return {
      getInputUsername,
      getGithubProfile,
      user,
      repos,
    };
  },
});
</script>

<style lang="scss">
.cont {
  width: 85%;
}

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

@media screen and (max-width: 768px) {
  .cont {
    width: 90%;
  }

  .user {
    grid-template-columns: 3fr 10fr;
    grid-template-rows: 1fr;

    &_repos {
      &_inner {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .user {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
</style>
