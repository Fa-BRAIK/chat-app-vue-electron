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
                    <input type="text" placeholder="Type your message here...">
                    <i class="material-icons">send</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userId: Number
    },
    watch: {
        userId: function(newVal, oldVal) {
            console.log('user_id changed!')
            console.log('the old value is', oldVal, 'the new value is', newVal)
        }
    },
    data: () => ({
        chatPanel: [
            {
                content: 'Hello dude!',
                side: ''
            },
            {
                content: 'Hello dude!',
                side: 'offset-md-9'
            },
            {
                content: 'Hello dude!',
                side: 'offset-md-9'
            },
            {
                content: 'Hello dude!',
                side: ''
            },
            {
                content: 'Hello dude!',
                side: ''
            },
            {
                content: 'Hello dude!',
                side: ''
            },
            {
                content: 'Hello dude!',
                side: 'offset-md-9'
            },
            {
                content: 'Hello dude!',
                side: 'offset-md-9'
            }
        ]
    }),
    created() {
        console.log(this.userId)
    }
}
</script>

<style lang="scss">
@import '../scss/colors.scss';

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
