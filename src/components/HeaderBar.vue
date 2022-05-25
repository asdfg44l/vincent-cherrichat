<template>
  <nav class="nav">
    <!-- nav content -->
    <div class="nav-content d-flex flex-grow-1 align-center">
      <h1 class="text-h5 white--text">Cherri Chat</h1>

      <!-- switch button -->
      <div class="d-flex align-center ml-auto">
        <!-- language switch -->
        <div>
          <v-btn
            outlined
            small
            color="white"
            class="rounded-pill font-bold mr-2"
            :class="{ 'btn--active': $i18n.locale === 'zh-tw' }"
            @click="onSwitchLanguage('zh-tw')"
          >
            中文
          </v-btn>
          <v-btn
            outlined
            small
            color="white"
            class="rounded-pill font-bold"
            :class="{ 'btn--active': $i18n.locale === 'en-us' }"
            @click="onSwitchLanguage('en-us')"
          >
            English
          </v-btn>
        </div>
        <!-- style switch -->
        <span class="white--text ml-2 mr-1">Theme: </span>
        <label class="switch">
          <input type="checkbox" v-model="themeColor" value="orange">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <!-- nav append function -->
    <div class="nav-append d-flex align-center ml-3">
      <!-- user avatar and user name -->
      <div class="border-left--white d-flex align-center px-5">
        <img
          class="rounded-circle"
          src="https://picsum.photos/id/237/50/50"
          alt="user picture"
        />
        <p class="text-h6 white--text mb-0 pl-2">潔西卡</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      themeColor: false
    };
  },
  watch: {
    themeColor() {
      this.onSwitchThemeColor()
    }
  },
  methods: {
    onSwitchLanguage(lang) {
      this.$i18n.locale = lang; //switch language
      sessionStorage.setItem("cherri-chat-language", lang); //save in storage
    },
    onSwitchThemeColor() {
      this.$eventBus.$emit("alert:theme", this.themeColor)
    }
  },
};
</script>
