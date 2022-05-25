<template>
  <v-app :class="`theme-${themeColor}`">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      themeColor: "main",
    };
  },
  methods: {
    onSwitchThemeColor(color) {
      this.themeColor = color ? "orange" : "main";
    },
  },
  created() {
    this.$eventBus.$on("alert:theme", this.onSwitchThemeColor);
  },
  beforeDestroy() {
    this.$eventBus.$off("alert:theme");
  },
};
</script>
