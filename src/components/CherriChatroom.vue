<template>
    <div>
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
                <v-btn :icon="true" class="mx-1" @click="searchObj.isOpen = !searchObj.isOpen">
                    <i class="c-icon c-icon--search"></i>
                </v-btn>
                <v-btn :icon="true" class="mx-1">
                    <i class="c-icon c-icon--note"></i>
                </v-btn>
            </div>
        </div>
        <!-- search bar -->
        <v-text-field v-show="searchObj.isOpen" class="px-2" v-model="searchObj.text" color="success">
            <template slot="append">
                <div class="d-flex align-center">
                    <p class="mb-0 text-gray">0則相符的訊息</p>
                    <v-btn :icon="true" class="p-0" @click="searchObj.text = ''">
                        <i class="c-icon c-icon--close-sm"></i>
                    </v-btn>
                </div>
            </template>
        </v-text-field>

        <!-- chat records -->
        <div class="d-flex flex-column">
          <div class="border-bottom">

          </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            searchObj: {
                text: "",
                isOpen: false
            }
        }
    },
    props: {
        userId: {
            type: String
        }
    }
}
</script>