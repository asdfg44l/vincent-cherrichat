<template>
  <v-container class="d-flex vh-100">
    <v-row>
      <!-- friends-list -->
      <v-col
        cols="4"
        md="3"
        class="py-0"
      >
        <friends-list class="h-100"/>
      </v-col>
      <!-- chat-content -->
      <v-col
        cols="8"
        md="9"
        class="py-0"
      >
        <div>hhhhh</div>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
  import FriendsList from '@/components/FriendsList.vue'

  export default {
    name: 'CherriChat',
    components: {
      FriendsList
    },
  }
</script>
