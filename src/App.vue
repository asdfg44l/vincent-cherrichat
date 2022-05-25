<template>
  <v-app>
    <v-main>
      <div :class="`theme-${themeColor}`">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      themeColor: "main"
    }
  },
  methods: {
    onSwitchThemeColor(color) {
      this.themeColor = color ? "orange" : 'main'
    }
  },
  created() {
    this.$eventBus.$on("alert:theme", this.onSwitchThemeColor)
  },
  beforeDestroy() {
    this.$eventBus.$off("alert:theme")
  }
};
</script>
