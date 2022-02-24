<template>
  <input
    v-model="inputText"
    @input="handleInput"
    @keypress.enter="handleEnter"
    class="text-xl text-gray-800 placeholder-gray-600 hover:border-indigo-300 focus:border-indigo-400 outline-none border-2 border-transparent w-full py-2 px-3 rounded-xl transition"
    type="text"
    placeholder="Enter a username..."
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, { emit }) {
    const inputText = ref('');

    const handleInput = function() {
      emit('input-username', inputText.value)
    }

    const handleEnter = function() {
      emit('input-enter')
    }

    return {
      inputText,
      handleInput,
      handleEnter
    };
  },
});
</script>

<style scoped></style>
