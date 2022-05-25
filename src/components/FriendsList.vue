<template>
  <div class="box-shadow--right">
    <!-- title -->
    <div class="py-3">{{$t("friends_list")}}({{friendsList.length}})</div>
    <div class="c-list c-list--devide">
      <div
        v-for="list in friendsList"
        :key="list.userId"
        @click="onClickHandler(list.userId)"
        class="c-list-item d-flex align-center"
        :class="{ 'c-list-item--active': seletedUserId === list.userId }"
      >
        <!-- user-item -->
        <img
          class="rounded-circle"
          :src="list.avatar"
          alt="user picture"
        />
        <div class="pl-4">
          <p class="mb-0">{{ list.name }}</p>
          <p class="mb-0">{{ list.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendsList",
  data: () => {
    return {
      seletedUserId: "",
      friendsList: [],
    };
  },
  methods: {
    onClickHandler(userId) {
      this.seletedUserId = userId;
      this.$emit("user-select", userId);
    },
    getFriendList() {
      this.$http.apiGetUserList()
        .then(data => this.friendsList = [...data])
        .catch(e => console.error(e))
    }
  },
  created() {
    this.getFriendList()
  }
};
</script>
