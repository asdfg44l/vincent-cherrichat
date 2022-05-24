<template>
  <div class="d-flex flex-column h-100">
    <HeaderBar />
    <component :is="componentsName" :userId="userId" class="flex-grow-1"/>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue"
import CherriChatroom from "@/components/CherriChatroom.vue"
import DefaultView from "@/components/DefaultView.vue"

export default {
  name: "CherriChatroomWarp",
  components: {
    HeaderBar,
    CherriChatroom,
    DefaultView
  },
  props: {
    userId: {
      type: String,
    },
  },
  computed: {
    componentsName() {
      return this.userId ? "CherriChatroom" : "DefaultView"
    }
  }
};
</script>
