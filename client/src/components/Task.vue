<template>
  <td
    class="px-6 py-4 whitespace-nowrap"
    :class="[task.completed ? 'line-through' : '']"
  >
    <div class="flex items-center">
      <div class="ml-4">
        <div class="text-m font-medium text-gray-900">
          {{ task.title }}
        </div>
        <div class="text-sm text-gray-500">
          {{ task.description }}
        </div>
      </div>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center h-5 justify-center">
      <input
        @change="setStatus"
        id="completed"
        name="completed"
        type="checkbox"
        :checked="task.completed"
        class="
          focus:ring-indigo-500
          h-4
          w-4
          text-indigo-600
          border-gray-300
          rounded
        "
      />
    </div>
  </td>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tasks',
  props: {
    task: Object,
  },
  methods: {
    setStatus(e) {
      const isCompleted = e.target.checked;

      this.$props.task.completed = isCompleted;
      axios.put(`${process.env.VUE_APP_API_URL}/tasks/${this.task._id}`, {
        completed: isCompleted,
      });
    },
  },
};
</script>
