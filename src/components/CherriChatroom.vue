<template>
  <div class="d-flex flex-column">
    <!-- user identity and append function -->
    <div
      class="d-flex align-center justify-space-between box-shadow--bottom py-2 px-5"
    >
      <!-- user avatar and user name -->
      <div class="d-flex align-center">
        <img
          class="rounded-circle"
          src="https://picsum.photos/id/237/60/60"
          alt="user picture"
        />
        <p class="text-h6 pl-3 mb-0">{{ userId }}</p>
      </div>
      <!-- append function -->
      <div class="d-flex">
        <!-- search btn -->
        <v-btn
          :icon="true"
          class="mx-1"
          @click="searchObj.isOpen = !searchObj.isOpen"
        >
          <i class="c-icon c-icon--search"></i>
        </v-btn>

        <!-- note -->
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn :icon="true" v-bind="attrs" v-on="on">
              <i class="c-icon c-icon--note"></i>
            </v-btn>
          </template>
          <user-note />
        </v-menu>
      </div>
    </div>
    <!-- search bar -->
    <div class="position-relative">
      <v-text-field
        v-show="searchObj.isOpen"
        class="w-100 position-absolute px-2"
        v-model="searchObj.text"
        color="success"
      >
        <template slot="append">
          <div class="d-flex align-center">
            <p class="mb-0 text-gray">{{$tc("search_message_outcome", 1)}}</p>
            <v-btn :icon="true" @click="searchObj.text = ''">
              <i class="c-icon c-icon--close-sm"></i>
            </v-btn>
          </div>
        </template>
      </v-text-field>
    </div>

    <!-- chat records -->
    <div class="d-flex flex-column flex-grow-1">
      <!-- chat view > chatitem -->
      <div
        class="d-flex flex-column-reverse align-end flex-grow-1 border-bottom--main h-max overflow-scroll px-3 py-3"
      >
        <p
          class="chat-item chat-item--main rounded-pill"
          v-for="item in reverseList"
          :key="item.id"
        >
          {{ item.text }}
        </p>
      </div>
      <!-- chat input -->
      <div class="d-flex px-2 py-3 h-20">
        <textarea
          v-model="chatText"
          class="form-control"
          name="chat text"
          :placeholder="$t('placehoder_common')"
          @keyup.enter="addChatRecords"
        />
        <v-btn :icon="true" @click="addChatRecords">
          <i class="c-icon c-icon--sent"></i>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import UserNote from "@/components/UserNote.vue";

export default {
  name: "CherriChatroom",
  components: {
    UserNote,
  },
  props: {
    userId: {
      type: String,
    },
  },
  data: () => {
    return {
      searchObj: {
        text: "",
        isOpen: false,
      },
      chatText: "",
      chatList: [
        {
          id: "wdgaz1",
          text: "hello",
        },
        {
          id: "wfwgh123",
          text: "world",
        },
      ],
    };
  },
  computed: {
    reverseList() {
      return [...this.chatList].reverse();
    },
  },
  methods: {
    addChatRecords() {
      if (!this.chatText.trim()) return;

      let chatObj = {
        id: "daffa",
        text: this.chatText,
      };
      this.chatList.push(chatObj);

      //clear
      this.chatText = "";
    },
  },
};
</script>
