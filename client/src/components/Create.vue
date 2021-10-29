<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
        <form class="space-y-6" v-on:submit.prevent="onSubmit" ref="form">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <div class="mt-1">
              <input
                v-model="title"
                id="title"
                name="title"
                type="text"
                required=""
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
            >
              Task Description
            </label>
            <div class="mt-1">
              <input
                id="description"
                name="description"
                v-model="description"
                type="text"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Create',
  data() {
    return { title: '', description: '' };
  },
  methods: {
    onSubmit: function () {
      const { title, description } = this;
      const body = {
        title,
        description,
      };

      this.$emit('add-task', body);
      this.clearInputs();
    },
    clearInputs() {
      this.title = '';
      this.description = '';
    },
  },
};
</script>
