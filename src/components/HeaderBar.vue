<template>
  <nav class="nav">
    <!-- nav content -->
    <div class="nav-content d-flex flex-grow-1 align-center">
      <h1 class="text-h5 white--text">Cherri Chat</h1>
      <!-- language switch -->
      <div class="ml-auto">
        <v-btn
          outlined
          small
          color="white"
          class="rounded-pill font-bold mr-2"
          :class="{ 'btn--active': selectedLang === 'zh-tw' }"
          @click="onSwitchLanguage('zh-tw')"
        >
          中文
        </v-btn>
        <v-btn
          outlined
          small
          color="white"
          class="rounded-pill font-bold"
          :class="{ 'btn--active': selectedLang === 'en-us' }"
          @click="onSwitchLanguage('en-us')"
        >
          English
        </v-btn>
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
        <p class="text-h6 white--text mb-0 pl-2">UserName</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      selectedLang: "zh-tw",
    };
  },
  methods: {
    onSwitchLanguage(lang) {
      this.selectedLang = lang;
    },
  },
};
</script>
