<template>
  <div class="user-view">
    <div class="user-profile-wrapper">
      <div
        v-if="store.individualUsers[route.params.userID]"
        class="user-profile"
      >
        <img
          class="user-profile__avatar"
          :src="store.individualUsers[route.params.userID]?.avatar"
          :alt="`${store.individualUsers[route.params.userID]?.first_name} ${
            store.individualUsers[route.params.userID]?.last_name
          }'s avatar`"
        />
        <div class="user-profile__info">
          <h1>
            {{ store.individualUsers[route.params.userID]?.first_name }}
            {{ store.individualUsers[route.params.userID]?.last_name }}
          </h1>
          <p>
            <strong> email: </strong>
            <a
              class="user-profile__email"
              :href="`mailto:${
                store.individualUsers[route.params.userID]?.email
              }`"
            >
              {{ store.individualUsers[route.params.userID]?.email }}
            </a>
          </p>
          <p>
            <strong>user id:</strong>
            {{ store.individualUsers[route.params.userID]?.id }}
          </p>
        </div>
      </div>

      <div v-else class="user-profile__alert-message">
        <h1>
          User with specified id: "{{ route.params.userID }}"<br />not found
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useUsersStore } from "@/store/index";

const route = useRoute();
const store = useUsersStore();

if (!store.individualUsers[route.params.userID])
  store.fetchOneUser(route.params.userID);
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .user-profile {
    width: 300px !important;
  }

  .user-profile-wrapper {
    margin: 25px auto !important;
  }
}

.user-view {
  .user-profile-wrapper {
    margin: 50px auto;
  }

  .user-profile {
    width: 400px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 50px 0;
    flex-direction: column;
    border-radius: 50px;
    box-shadow: inset 0 0px 10px rgb(0 0 0 / 0.1);

    &__alert-message {
      color: red;
      text-align: center;
    }

    &__avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: 0 4px 7px 0px rgb(0, 0, 0, 0.3);
      margin: 0 auto 1em;
    }

    &__info {
      margin: 0 auto;
      h1 {
        text-align: center;
        margin-bottom: 0.5em;
      }
    }

    &__email {
      text-decoration: none;
      opacity: 0.5;
    }
  }
}
</style>
