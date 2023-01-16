import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({ users: [], individualUsers: {} }),
  getters: {},
  actions: {
    async fetchUsers() {
      const f = await fetch("https://reqres.in/api/users");
      const { data } = await f.json();
      this.users = await data;
    },

    async fetchOneUser(userIdentificator) {
      const f = await fetch(`https://reqres.in/api/users/${userIdentificator}`);
      const { data } = await f.json();
      this.individualUsers[userIdentificator] = await data;
    },
  },
});
