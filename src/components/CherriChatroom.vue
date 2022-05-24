<template>
    <div class="d-flex flex-column">
        <!-- user identity and append function -->
        <div class="d-flex align-center justify-space-between box-shadow--bottom py-2 px-5">
            <!-- user avatar and user name -->
            <div class="d-flex align-center">
                <img
                    class="rounded-circle"
                    src="https://picsum.photos/id/237/60/60"
                    alt="user picture"
                />
                <p class="text-h6 pl-3 mb-0">{{userId}}</p>
            </div>
            <!-- append function -->
            <div class="d-flex">
                <!-- search btn -->
                <v-btn :icon="true" class="mx-1" @click="searchObj.isOpen = !searchObj.isOpen">
                    <i class="c-icon c-icon--search"></i>
                </v-btn>

                <!-- note -->
                <v-tooltip bottom :open-on-hover="false" :open-on-focus="false" color="white">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            :icon="true"
                            class="mx-1"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <i class="c-icon c-icon--note"></i>
                        </v-btn>
                    </template>
                    <UserNote />
                </v-tooltip>
            </div>
        </div>
        <!-- search bar -->
        <div class="position-relative">
            <v-text-field v-show="searchObj.isOpen" class="w-100 position-absolute px-2" v-model="searchObj.text" color="success">
                <template slot="append">
                    <div class="d-flex align-center">
                        <p class="mb-0 text-gray">0則相符的訊息</p>
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
          <div class="d-flex flex-column justify-end align-end border-bottom--main flex-grow-1">
            <p
                class="chat-item chat-item--main rounded-pill"
                v-for="item in chatList"
                :key="item.id"
            >
                {{item.text}}
            </p>
          </div>
          <!-- chat input -->
          <div class="d-flex px-2 py-3 h-20">
            <textarea v-model="chatText" class="form-control" type="text" name="chat text" placeholder="輸入訊息..." @keyup.enter="addChatRecords"/>
            <v-btn :icon="true" @click="addChatRecords">
                <i class="c-icon c-icon--sent"></i>
            </v-btn>
          </div>
        </div>
    </div>
</template>

<script>
import UserNote from '@/components/UserNote.vue'

export default {
    name: "CherriChatroom",
    components: {
        UserNote
    },
    props: {
        userId: {
            type: String
        }
    },
    data: () => {
        return {
            searchObj: {
                text: "",
                isOpen: false
            },
            chatText: "",
            chatList: [
                {
                    id: "wdgaz1",
                    text: "hello"
                },
                {
                    id: "wfwgh123",
                    text: "world"
                }
            ]
        }
    },
    methods: {
        addChatRecords() {
            if(!this.chatText) return

            let chatObj = {
                id: "daffa",
                text: this.chatText
            }
            this.chatList.push(chatObj)

            //clear
            this.chatText = ""
        }
    }
}
</script>