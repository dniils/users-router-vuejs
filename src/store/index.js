import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    individualUsers: {},
    totalPages: null,
    pageToRequest: 1,
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const f = await fetch(
        `https://reqres.in/api/users?page=${this.pageToRequest}`
      );
      const { data, total_pages } = await f.json();
      this.users = await data;
      this.totalPages = total_pages;
    },

    async fetchOneUser(userIdentificator) {
      const f = await fetch(`https://reqres.in/api/users/${userIdentificator}`);
      const { data } = await f.json();
      this.individualUsers[userIdentificator] = await data;
    },

    async fetchMoreUsers() {
      this.pageToRequest++;
      const f = await fetch(
        `https://reqres.in/api/users?page=${this.pageToRequest}`
      );
      const { data } = await f.json();
      this.users = [...this.users, ...data];
    },
  },
});
