<template>
    <div id="app">
        <div class="">
            
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
    },
    sockets: {
        logout: function(data) {
            this.users = data.users
        }
    }
}
</script>

<style>
#app{
    overflow: hidden
}

</style>

