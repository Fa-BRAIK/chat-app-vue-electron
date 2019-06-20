<template>
  <div id="app">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-4 border-right">
              <friend-drawer @user:changed='userChangeEvent($event)'></friend-drawer>
            </div>
            <div class="col-md-8">
                <div class="settings-tray">
                    <div class="friend-drawer no-gutters friend-drawer--grey">
                        <img class="profile-image" src="http://www.allmyfriends.it/robocop.jpg" alt="">
                        <div class="text">
                            <h6>Robo Cop</h6>
                            <p class="text-muted">Layin' down the law since like before Christ...</p>
                        </div>
                        <span class="settings-tray--right">
                            <i class="material-icons">cached</i>
                            <i class="material-icons">message</i>
                            <i class="material-icons">menu</i>
                        </span>
                    </div>
                </div>
                <chat-panel :userId='user_id'></chat-panel>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FriendDrawer from './components/FriendDrawer'
import ChatPanel from './components/ChatPanel'

export default {
  name: 'app',
  data: () => ({
    user_id: -1
  }),
  methods: {
    userChangeEvent(user_id) { this.user_id = user_id }
  },
  components: { FriendDrawer, ChatPanel }
}
</script>

<style lang="scss">
@import './scss/colors.scss';

html, body {
  overflow-x: hidden;
}

#app {
  min-width: 100vw;
  min-height: 100vh !important;
}

body {
  text-rendering: optimizeLegibility;
}

.container {
  min-height: 100vh !important;
  min-width: 100vw;
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
