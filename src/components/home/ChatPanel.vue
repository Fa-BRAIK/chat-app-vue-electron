<template>
    <div class="chat-panel">
        <div class="row no-gutters" v-for="(message, index) in chatPanel" :key="index">
            <div class="col-md-5" :class="message.side">
                
                <div class="chat-bubble">
                    <h6 class="nameOfSender">{{message.username}} : </h6>
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
                    side: 'offset-md-7', 
                    username: this.username
                }
                this.$socket.emit('message', data)
                data.username = "me"
                this.chatPanel.push( data )

                console.log(this.chatPanel)
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

.chat-panel{
    min-height: 75vh !important;
}

.chat-bubble {
  padding: 10px 15px;
  background: #eee;
  margin: 2px 7px;
  border-radius: 20px;
}
.chat-bubble h6{
    float: left;
    padding-right: 5px;
    padding-bottom:5px
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

.offset-md-7 {
  .chat-bubble {
    background: $blue;
    color: #fff;
  }
}

.chat-box-tray {
  background: #eee;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  margin-top: 75vh !important;
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
