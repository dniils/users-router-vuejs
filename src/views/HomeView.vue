<template>
  <div class="home-view">
    <div class="users-wrapper">
      <div class="users">
        <router-link
          class="users__link"
          v-for="username in store.users"
          :key="username"
          :to="`/users/${username.id}`"
        >
          <img
            class="users__avatar"
            :src="username.avatar"
            :alt="`${username.first_name} ${username.last_name}'s avatar`"
          />
          <h2 class="users__name">
            {{ username.first_name + " " + username.last_name }}
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUsersStore } from "@/store/index.js";

const store = useUsersStore();

if (store.users.length == 0) {
  store.fetchUsers();
}
</script>

<style scoped lang="scss">
.users-wrapper {
  width: 1200px;
  margin: 0 auto;
}
.users {
  margin-top: 50px;
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  &__buttons {
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  &__btn-prev,
  &__btn-next {
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &__link {
    text-decoration: none;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__avatar {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1em;
  }

  &__name {
    color: #000;
    width: 100%;
    text-align: center;
  }
}
</style>
