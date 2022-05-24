<template>
  <div class="box-shadow--right">
    <!-- title -->
    <div class="py-3">好友列表(3)</div>
    <div class="c-list c-list--devide">
      <div
        v-for="list in friendsList"
        :key="list.id"
        @click="onClickHandler(list.id)"
        class="c-list-item d-flex align-center"
        :class="{'c-list-item--active': seletedUserId === list.id}"
      >
        <!-- user-item -->
        <img
          class="rounded-circle"
          src="https://picsum.photos/id/237/80/80"
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
      friendsList: [
        {
          id: "dawd",
          name: "aaa",
          description: "hello aaaaaa~",
        },
        {
          id: "wegga",
          name: "bbb",
          description: "hello aaaaaa~",
        },
        {
          id: "whhyt",
          name: "ccc",
          description: "hello aaaaaa~",
        },
      ],
    };
  },
  methods: {
    onClickHandler(userId) {
      this.seletedUserId = userId
      this.$emit("user-select", userId)
    }
  }
};
</script>
