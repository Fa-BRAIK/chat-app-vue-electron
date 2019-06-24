<template>
  <div>
    <div class="settings-tray">
      <img class="profile-image" src="/img/avatar.svg" alt="">
    </div>
    <div class="text-center" v-if="friends.length === 0"> 
      <h6 class="display-5">You have no contact online!</h6>
    </div>
      <div v-else v-for="(friend, index) in friends" :key="index">
        <div class="friend-drawer">
        <img class="profile-image" :src="friend.img" alt="">
        <div class="text">
          <h6>{{ friend.username }}</h6>
          <p class="text-muted">{{ friend.lastMessage }}</p>
        </div>
        <span class="time text-muted small">{{ friend.date }}</span>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    users: Array
  },
  watch: {
    users: function(newVal) {
      this.friends = newVal.filter(friend => {
        return friend !== this.username
      })
      this.friends = this.friends.map(friend => {
        return {
          img: '/img/avatar.svg',
          username: friend,
          lastMessage: '',
          date: ''
        }
      })
    }
  },
  data: () => ({
    friends: [],
  }),
  methods: {
    changeChatPanel(username) { this.$emit('user:changed', username) },
  },
  mounted() {
    this.friends = this.users
  }
}
</script>

<style lang="scss">
@import '../../scss/colors.scss';

.settings-tray {
  background: #eee;
  padding: 10px 15px;
  border-radius: 7px;
  
  .no-gutters {
    padding: 0;
  }
  
  &--right {
    float: right;
    
    i {
      margin-top: 10px;
      font-size: 25px;
      color: grey;
      margin-left: 14px;
      transition: .3s;
      
      &:hover {
        color: $blue;
        cursor: pointer;
      }
    }
  }
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 40px;
}

.search-box {
  background: #fafafa;
  padding: 10px 13px;
  
  .input-wrapper {
    background: #fff;
    border-radius: 40px;
    
    i {
      color: grey;
      margin-left: 7px; 
      vertical-align: middle;
    }
  }
}

.friend-drawer {
  padding: 10px 15px;
  display: flex;
  vertical-align: baseline;
  background: #fff;
  transition: .3s ease;
  
  &--grey {
    background: #eee;
  }
  
  .text {
    margin-left: 12px;
    width: 70%;
    
    h6 {
      margin-top: 6px;
      margin-bottom: 0;
    }
    
    p {
      margin: 0;
    }
  }
  
  &:hover {
    background: $blue;
    cursor: pointer;
    
    p,
    h6,
    .time {
      color: #fff !important;
    }
  }
}

hr {
  margin: 5px auto;
  width: 60%;
}
</style>

