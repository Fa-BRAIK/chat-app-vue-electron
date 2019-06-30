<template>
  <div>
    <div class="chat-panel mt-2 mb-1">
      <div
        class="row no-gutters messages-container"
        v-for="(message, index) in chatPanel"
        :key="index"
      >
        <div class="col-md-5" :class="message.side">
          <div class="chat-bubble">
            <h6 class="nameOfSender">{{message.username}} :</h6>
            <span v-show="message.content !== ''">{{ message.content }}</span>
            <img v-show="message.file !== ''" :src="message.file" class="messageImage">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="chat-box-tray">
          <input hidden id="sendImageInput" type="file" @change="sendImage()">
          <button class="btn"><i class="material-icons" @click="uploadImage()">attach_file</i></button>
          <input
            class="form-control"
            type="text"
            v-model="message"
            placeholder="Type your message here..."
            @keypress.enter="sendMessage()"
          >
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
    message: "",
    chatPanel: []
  }),
  methods: {
    sendMessage() {
      if (this.message !== "") {
        let data = {
          content: this.message,
          side: "offset-md-7",
          username: this.username,
          file: ''
        };
        this.$socket.emit("message", data);
        data.username = "me";
        this.chatPanel.push(data);

        this.message = "";
      }
    },
    uploadImage() {
      document.querySelector('#sendImageInput').click()
    },
    sendImage() {
      let file = document.querySelector('#sendImageInput').files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let data = {
          content: "",
          side: "offset-md-7",
          username: this.username,
          file: reader.result
        };
        this.$socket.emit('image', data)
      }
    },
    scrollToEnd() {
      var container = document.querySelector(".chat-panel")
      var scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
    }
  },
  sockets: {
    publicMessage: function(data) {
      if (data.username !== this.username) this.chatPanel.push(data)
    },
    fileMessage: function(data) {
      if (data.username !== this.username) data.side = ''
    
      console.log(data)
      this.chatPanel.push(data)
    }
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  }
};
</script>

<style lang="scss">
@import "../../scss/colors.scss";

.messageImage{
  max-width : 200px;
  height: auto;
  
}


.chat-panel {
  min-height: 76vh !important;
  max-height: 76vh !important;
  min-width: 72vw !important;
  overflow-y: scroll;
}

.chat-bubble {
  padding: 10px 15px;
  background: #eee;
  margin: 2px 7px;
  border-radius: 20px;
}
.chat-bubble h6 {
  float: left;
  padding-right: 5px;
  padding-bottom: 5px;
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
  min-width: 72vw !important;
  background: #eee;
  display: flex;
  padding: 10px 10px;
  border-radius: 7px !important;
  align-items: center;
  bottom: 0;

  input {
    margin: 0 0 0 16px;
    padding: 6px 10px;
  }

  i {
    color: grey;
    font-size: 25px;
    vertical-align: middle;

    &:last-of-type {
      margin-left: 25px;
    }
  }
}
</style>
