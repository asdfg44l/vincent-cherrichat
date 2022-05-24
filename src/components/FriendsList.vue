<template>
    <div class="box-shadow--right">
        <!-- title -->
        <div class="py-3">
            好友列表(3)
        </div>
        <div class="c-list c-list--devide">
            <div v-for="list in friendsList" :key="list.id" class="c-list-item d-flex align-center">
                <!-- user-item -->
                <img class="rounded-circle" src="https://picsum.photos/id/237/80/80" alt="user picture">
                <div class="pl-4">
                    <p class="mb-0">{{list.name}}</p>
                    <p class="mb-0">{{list.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FriendsList",
    data: () => {
        return {
            friendsList: [
                {
                    id: 'dawd',
                    name: 'aaa',
                    description: 'hello aaaaaa~'
                },
                {
                    id: 'wegga',
                    name: 'bbb',
                    description: 'hello aaaaaa~'
                },
                {
                    id: 'whhyt',
                    name: "ccc",
                    description: 'hello aaaaaa~'
                }
            ]
        }
    }
}
</script>
