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
        ></textarea>
        <v-btn class="btn--main mt-1 rounded-sm">{{$t('add_common')}}</v-btn>
      </v-list-item-content>
    </v-list-item>

    <div class="px-4 py-2">
      <v-divider class="border--second"></v-divider>
    </div>

    <v-list-item class="pb-3">
      <v-list-item-content>
        <div class="border border--second pa-2 position-relative">
          <v-list-item-title class="text-main"
            >2022/05/25 09:22</v-list-item-title
          >
          <p class="mb-0 mt-2">備忘訊息</p>
          <!-- delete button -->
          <v-btn :icon="true" class="position-absolute to-right-top">
            <i class="c-icon c-icon--close-xs"></i>
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
