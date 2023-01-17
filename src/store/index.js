import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    individualUsers: {},
    pageToRequest: 1,
    weHaveMoreUsersToLoad: true,
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const f = await fetch("https://reqres.in/api/users?page=1");
      const { data } = await f.json();
      this.users = await data;
    },

    async fetchOneUser(userIdentificator) {
      const f = await fetch(`https://reqres.in/api/users/${userIdentificator}`);
      const { data } = await f.json();
      this.individualUsers[userIdentificator] = await data;
    },

    async fetchMoreUsers() {
      if (this.weHaveMoreUsersToLoad) {
        this.pageToRequest++;
        const f = await fetch(
          `https://reqres.in/api/users?page=${this.pageToRequest}`
        );
        const { data } = await f.json();

        if (data.length) {
          this.users = [...this.users, ...data];
        } else {
          this.weHaveMoreUsersToLoad = false;
          alert("That's all we got!");
        }
      }
    },
  },
});
