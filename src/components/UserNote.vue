<template>
  <v-card class="mx-auto" max-width="350" tile>
    <!-- user note input -->
    <v-list-item>
      <v-list-item-content>
        <textarea
          class="form-control border border--main pa-3"
          name="user note"
          cols="30"
          rows="5"
          :placeholder="$t('placehoder_common')"
          v-model="noteText"
        ></textarea>
        <v-btn @click="addUserNote" class="btn--main mt-1 rounded-sm">{{$t('add_common')}}</v-btn>
      </v-list-item-content>
    </v-list-item>

    <div class="px-4 py-2">
      <v-divider class="border--second"></v-divider>
    </div>

    <v-list-item class="pb-3" v-for="userNote in userNoteList" :key="userNote.id">
      <v-list-item-content>
        <div class="border border--second pa-2 position-relative">
          <v-list-item-title class="text-main"
            >{{getFormatTime(userNote.date)}}</v-list-item-title
          >
          <p class="mb-0 mt-2">{{userNote.content}}</p>
          <!-- delete button -->
          <v-btn @click="deleteUserNote(userNote.id)" :icon="true" class="position-absolute to-right-top">
            <i class="c-icon c-icon--close-xs"></i>
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userNoteList: [],
      noteText: ""
    }
  },
  methods: {
    getUserNote() {
      this.$http.apiGetUserNote()
        .then(data => {
          this.userNoteList = [...data]
        })
        .catch(e => {
          console.error(e)
        })
    },
    getFormatTime(date) {
      let formatTime = new Date(Number(date)).toLocaleString('zh-tw', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      })

      return formatTime;
    },
    addUserNote() {
      if(!this.noteText.trim()) return

      let noteObj = {
        userId: "Jessica",
        content: this.noteText.trim(),
        date: new Date().getTime()
      }
      this.$http.apiAddUserNote(noteObj)
      this.getUserNote()

      this.noteText = ""
    },
    deleteUserNote(id) {
      this.$http.apiDeleteUserNote(id)
      this.getUserNote()
    }
  },
  created() {
    this.getUserNote()
  }
}
</script>
