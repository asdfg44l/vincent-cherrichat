<template>
  <div class="h-100">
    <HeaderBar />
    <component :is="'DefaultView'" />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import DefaultView from "@/components/DefaultView.vue"

export default {
  name: "CherriChatroom",
  components: {
    HeaderBar,
    DefaultView
  },
  props: {
    userId: {
      type: String,
    },
  },
};
</script>
