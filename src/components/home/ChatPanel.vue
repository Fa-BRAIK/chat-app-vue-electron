<template>
    <div class="chat-panel">
        <div class="row no-gutters" v-for="(message, index) in chatPanel" :key="index">
            <div class="col-md-3" :class="message.side">
                <div class="chat-bubble">
                    {{ message.content }}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="chat-box-tray">
                    <i class="material-icons">attach_file</i>
                    <input class="form-control" type="text" v-model="message" placeholder="Type your message here..." @keypress.enter="sendMessage()">
                    <i class="material-icons">send</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        username: String
    },
    data: () => ({
        message: '',
        chatPanel: [
            // {
            //     content: 'Hello dude!',
            //     side: '',
            //     username: ''
            // },
            // {
            //     content: 'Hello dude! aaa',
            //     side: 'offset-md-9',
            //     username: ''
            // },
        ]
    }),
    methods: {
        sendMessage() {
            if (this.message !== '') {
                let data = {
                    content: this.message, 
                    side: 'offset-md-9', 
                    username: this.username
                }
                this.chatPanel.push( data )

                console.log(this.chatPanel)
                this.$socket.emit('message', data)
                this.message = ''
            }
        }
    },
    sockets: {
        publicMessage: function(data) {
            if (data.username !== this.username) 
                this.chatPanel.push(data)
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.chat-bubble {
  padding: 10px 14px;
  background: #eee;
  margin: 10px 30px;
  border-radius: 9px;
}

@keyframes slideFromLeft {
    0% {
        margin-left: -200px;
        opacity: 0;
    }
    100% {
        margin: 10px 30px;
        opacity: 1;
    }
}

.offset-md-9 {
  .chat-bubble {
    background: $blue;
    color: #fff;
  }
}

.chat-box-tray {
  background: #eee;
  display: flex;
  align-items: baseline;
  padding: 10px 15px;
  align-items: center;
  margin-top: 17px;
  bottom: 0;
  
  input {
    margin: 0 10px;
    padding: 6px 2px;
  }
  
  i {
    color: grey;
    font-size: 30px;
    vertical-align: middle;
    
    &:last-of-type {
      margin-left: 25px;
    }
  }
}
</style>
