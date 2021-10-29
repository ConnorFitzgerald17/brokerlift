<template>
  <Login v-if="!isAuth" @auth-user="authUser" :isAuth="isAuth" />
  <div v-if="isAuth" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2
        class="
          text-2xl text-center
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
        "
      >
        BrokerLift Challenge
      </h2>
      <Create @add-task="addTask" />
      <Tasks :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue';
import Create from './components/Create.vue';
import Login from './components/Login.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Create,
    Tasks,
    Login,
  },
  data() {
    return {
      tasks: [],
      isAuth: false,
    };
  },
  async created() {
    this.tasks = await this.getTasks();
  },
  methods: {
    async getTasks() {
      try {
        const res = await axios.get(`${process.env.VUE_APP_API_URL}/tasks`);
        return res.data;
      } catch (e) {
        // Logging would normally be here
        console.log(e);
        return [];
      }
    },
    async addTask(task) {
      const res = await axios.post(
        `${process.env.VUE_APP_API_URL}/tasks`,
        task
      );
      this.tasks = [...this.tasks, res.data];
    },
    async authUser(auth) {
      this.isAuth = auth;
    },
  },
};
</script>
