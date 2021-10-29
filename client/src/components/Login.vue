<template>
  <div
    class="
      flex
      h-screen
      justify-center
      items-center
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-3xl mx-auto">
      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg text-center leading-6 font-medium text-gray-900">
            Hello CEO
          </h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500 text-center">
            <p>When do you want it?</p>
          </div>
          <form
            class="mt-5 sm:flex sm:items-center"
            v-on:submit.prevent="onSubmit"
          >
            <div class="w-full sm:max-w-xs">
              <label for="answer" class="sr-only">ANSWER</label>
              <input
                v-model="answer"
                type="text"
                name="answer"
                id="answer"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <button
              type="submit"
              class="
                mt-3
                w-full
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                shadow-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
                sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
              "
            >
              Login
            </button>
          </form>
          <div v-if="error" class="rounded-md bg-red-50 p-4 mt-5">
            <div class="flex">
              <div class="ml-3">
                <p class="text-sm font-medium text-red-400">Wrong answer!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return { answer: '', error: false };
  },
  methods: {
    async onSubmit() {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/login`, {
        answer: this.answer,
      });

      this.error = !res.data;

      this.$emit('auth-user', res.data);
    },
  },
};
</script>
