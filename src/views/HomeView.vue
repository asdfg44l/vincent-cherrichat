<template>
  <v-container class="d-flex vh-100 py-0">
    <v-row :dense="true" no-gutters>
      <!-- friends-list -->
      <v-col cols="4" md="3" class="py-0">
        <friends-list @user-select="userSelectHandler" class="h-100" />
      </v-col>
      <!-- chat-content -->
      <v-col cols="8" md="9" class="py-0">
        <cherri-chatroom-warp :userId="userId" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FriendsList from "@/components/FriendsList.vue";
import CherriChatroomWarp from "@/components/CherriChatroomWarp.vue";

export default {
  name: "CherriChat",
  components: {
    FriendsList,
    CherriChatroomWarp,
  },
  data: () => {
    return {
      userId: "",
    };
  },
  methods: {
    userSelectHandler(userId) {
      this.userId = userId
    }
  }
};
</script>
