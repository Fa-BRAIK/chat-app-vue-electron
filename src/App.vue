<template>
    <div id="app">
        <div class="container">
            
            <router-view 
                :username="username"
                :users="users"
                @login="userHasLoggedIn($event)"
            >
            </router-view>
            
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        username: '',
        users: []
    }),
    methods: {
        userHasLoggedIn(data) {
            this.username = data.username
            this.users = data.users
        }
    }
}
</script>
