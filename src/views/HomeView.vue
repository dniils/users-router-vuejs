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
      <button
        class="users__btn-load-more"
        :disabled="store.pageToRequest === store.totalPages"
        @click="store.fetchMoreUsers()"
      >
        Load more
      </button>
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
@media (max-width: 600px) {
  .users {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 400px) {
  .users {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

.users-wrapper {
  margin: 0 auto;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.users {
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  &__link {
    padding: 15px;
    border-radius: 20px;
    text-decoration: none;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    width: 80%;
    box-shadow: inset 0 0 10px rgb(0 0 0 / 0.05);
    transition: all 0.15s ease-in-out;

    &:hover {
      box-shadow: inset 0 0px 10px rgb(0 0 0 / 0.1);
      .users__avatar {
        scale: 0.95;
        box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
      }

      .users__name {
        scale: 0.95;
        opacity: 1;
      }
    }
  }

  &__avatar {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1em;
    transition: all 0.15s ease-in-out;
    width: 130px;
    height: 130px;
  }

  &__name {
    color: #000;
    opacity: 0.6;
    width: 100%;
    font-size: 20px;
    text-align: center;
    transition: all 0.15s ease-in-out;
  }

  &__btn-load-more {
    display: flex;
    margin: 50px auto;
    padding: 10px 30px;
    border-radius: 60px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    border: 0;
    transition: all 0.15s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #000;
      box-shadow: 0 4px 7px 0px rgb(0, 0, 0, 0.3);
      border: 0;
    }

    &:disabled {
      opacity: 0.1;
    }
  }
}
</style>
