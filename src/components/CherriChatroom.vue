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
          :src="chatroomInfo.avatar"
          alt="user picture"
        />
        <p class="text-h6 pl-3 mb-0">{{ chatroomInfo.name }}</p>
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
        class="w-100 position-absolute px-2 background-transparent"
        v-model="searchObj.text"
        @keyup.enter="onSearchHandler"
        color="success"
      >
        <template slot="append">
          <div class="d-flex align-center">
            <p class="mb-0 text-gray">{{ $tc("search_message_outcome", searchQuantity) }}</p>
            <v-btn :icon="true" @click="searchObj.text=''">
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
        class="d-flex flex-column-reverse align-end flex-grow-1 border-bottom--main vh-50 overflow-auto -scroll px-3 py-3"
      >
        <p
          class="chat-item chat-item--main rounded-pill"
          :class="{ 'highlight-allow': allowUseHighlight() }"
          v-for="item in reverseList"
          :key="item.id"
          v-html="allowUseHighlight(item.highlight) ? item.highlight : item.content"
        >
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
        isOpen: false
      },
      //聊天對象資訊
      chatroomInfo: {
        userId: "",
        name: "",
        avatar: "",
      },
      chatText: "", //新訊息
      chatList: [], //聊天訊息
    };
  },
  watch: {
    userId() {
      this.getChatRoomData();
    },
    'searchObj.text'(value) {
      if(value == "") {
        this.getChatRecord()
      }
    }
  },
  computed: {
    reverseList() {
      return [...this.chatList].reverse();
    },
    searchQuantity() {
      let target = this.searchObj.text.trim()
      if(!target) return 0

      let str = this.chatList.map(item => item.highlight).join("")
      let re = new RegExp(`(${target})`, 'g')
      return str.match(re, str) ? str.match(re, str).length : 0
    }
  },
  methods: {
    //取得聊天對象資訊
    getFriendInfoById() {
      this.$http
        .apiGetUserById(this.userId)
        .then((data) => {
          this.chatroomInfo = { ...this.chatroomInfo, ...data[0] };
        })
        .catch((e) => {
          console.error(e);
        });
    },
    //取得聊天紀錄
    getChatRecord() {
      this.$http
        .apiGetChatRecord(this.userId)
        .then((data) => {
          this.chatList = [...data];
        })
        .catch((e) => {
          console.error(e);
        });
    },
    //取得聊天室必須資訊
    getChatRoomData() {
      this.getFriendInfoById();
      this.getChatRecord();
    },
    //新增聊天紀錄
    addChatRecords() {
      if (!this.chatText.trim()) return;

      let chatObj = {
        chatroomId: this.userId,
        content: this.chatText.trim(),
        date: new Date().getTime(),
      };
      this.$http.apiAddChatRecord(chatObj);
      this.getChatRoomData();
      //clear
      this.chatText = "";
    },
    //搜尋字句
    onSearchHandler() {
      if(!this.searchObj.text.trim()) return

      this.chatList = this.chatList.map(item => {
        if(item.content.match(this.searchObj.text.trim())) {
          const target = this.searchObj.text.trim()
          let re = new RegExp(`(${target})`, 'g')
          item.highlight = item.content.replace(re, '<span class="highlight">$1</span>')
        }
        return item
      })
    },
    //是否套用highlight
    allowUseHighlight(isHighlight) {
      return this.searchObj.isOpen && this.searchObj.text.trim() && isHighlight
    }
  },
  created() {
    this.getChatRoomData();
  },
};
</script>
