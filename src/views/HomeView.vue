<template>
  <v-container class="d-flex vh-100">
    <v-row :dense="true">
      <!-- friends-list -->
      <v-col cols="4" md="3" class="px-0 py-0">
        <friends-list class="h-100" />
      </v-col>
      <!-- chat-content -->
      <v-col cols="8" md="9" class="px-0 py-0">
        <cherri-chatroom :userId="userId" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FriendsList from "@/components/FriendsList.vue";
import CherriChatroom from "@/components/CherriChatroom.vue";

export default {
  name: "CherriChat",
  components: {
    FriendsList,
    CherriChatroom,
  },
  data: () => {
    return {
      userId: "",
    };
  },
};
</script>
