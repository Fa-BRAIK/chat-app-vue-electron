<template>
    <div class="row">
        <div id="login" class="col-8 col-lg-6 mx-auto">
            <h1 class="display-4 text-center mt-5 mb-5">Login</h1>
            <div class="alert alert-danger" v-show="isErrorMessage()">
                <p>{{ errorMessage }}</p>
            </div>
            <div class="from-group my-2">
                <input class="form-control" type="text" :value="server" placeholder="http://localhost:xxxx">
            </div>
            <div class="form-group my-2">
                <input class="form-control" type="text" v-model="username" @keypress.enter="login()" autofocus>
            </div>
            <button class="btn btn-primary btn-block my-2" @click="login()">Log in</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        server: 'http://localhost:3010',
        username: '',
        errorMessage: ''
    }),
    methods: {
        login() { 
            console.log( { server: this.server, username: this.username } ) 
            this.$socket.emit('login', { server: this.server, username: this.username })
            
        },
        isErrorMessage() { return this.errorMessage !== '' }
    },
    sockets: {
        UserAlreadyExists: function(data) {
            this.errorMessage = data.message
        }
    }
}
</script>

<style lang="scss" scoped>
.row {
    margin-top: 25%;
}

#login {
    border: 2px solid #aaaaaa;
    -webkit-box-shadow: 0px 10px 23px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 23px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 23px -10px rgba(0,0,0,0.75);
}
</style>

