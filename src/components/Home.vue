<template>
  <div class="row no-gutters">
    <div class="col-md-3 border-right">
      <friend-drawer 
        :username="userInfo.username"
        :users="userInfo.users"
        @user:changed='userChangeEvent($event)'
      >
      </friend-drawer>
    </div>
    <div class="col-md-8 ml-3 mt-2">
        <div class="chatPanel-holder settings-tray">
            <div class=" no-gutters friend-drawer--grey">
                <h6> Hello again {{username}} !</h6>
                <!-- <span class="settings-tray--right">
                  <i class="material-icons">cached</i>
                  <i class="material-icons">menu</i>
                </span> -->
            </div>
        </div>
        <chat-panel :username='username'></chat-panel>
    </div>
  </div>
</template>

<script>
import FriendDrawer from './home/FriendDrawer'
import ChatPanel from './home/ChatPanel'

export default {
  props: {
    username: String,
    users: Array
  },
  name: 'app',
  data: () => ({
    choosedUser: -1,
    userInfo: {
      username: '',
      users: []
    }
  }),
  watch: {
    users: function(newVal) {
      this.userInfo.users = newVal
    }
  },
  methods: {
    userChangeEvent(username) { this.choosedUser = username },
  },
  sockets: {
    login: function(data) {
      this.userInfo.users = data.users
    }
  },
  components: { FriendDrawer, ChatPanel },
  mounted() {
    this.userInfo.username = this.username
    this.userInfo.users = this.users
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors.scss';

html, body {
  overflow-x: hidden;
}

#app {
  min-width: 100vw !important;
  min-height: 100% !important;

}

body {
  text-rendering: optimizeLegibility;
}

.chatPanel-holder{
  min-width: 72vw !important;
}

.container {
  min-height: 100% !important;
  min-width: 100vw !important;
  margin :0;
  padding: 0;
  background: #fff;
}

input {
  border: none;
  border-radius: 30px;
  width: 80%;

  &::placeholder {
    color: #e3e3e3;
    font-weight: 300;
    margin-left: 20px;
  }

  &:focus {
    outline: none;
  }
}
</style>
