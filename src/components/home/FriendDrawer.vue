<template>
    <div>
        <div class="settings-tray">
            <img class="profile-image" src="https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/60430168_1228575147309374_2946376766538645504_n.jpg?_nc_cat=104&_nc_ht=scontent.fbeg1-1.fna&oh=500b1e9ee57e3ca3d4c9a9ca963f1f3d&oe=5D81D429" alt="">
            <span class="settings-tray--right">
                <i class="material-icons">cached</i>
                <i class="material-icons">message</i>
                <i class="material-icons">menu</i>
            </span>
        </div>
        <div class="search-box">
            <div class="input-wrapper">
                <i class="material-icons">search</i>
                <input placeholder="Search here" type="text">
            </div>
        </div>
        <div v-for="(friend, index) in friends" :key="index">
            <div class="friend-drawer" @click="changeChatPanel(friend.id)">
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
    data: () => ({
        friends: [
            {
                id: 1,
                img: 'http://www.allmyfriends.it/robocop.jpg',
                username: 'Robo Cop',
                lastMessage: 'Hey, you\'re arrested!',
                date: '13:21'
            },
            {
                id: 2,
                img: 'https://www.popcultureshocktoys.com/content/images/thumbs/0006453_optimus-prime-classic-series_600.jpeg',
                username: 'Optimus',
                lastMessage: 'Wanna grab a beer?',
                date: '00:32'
            },
            {
                id: 3,
                img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg',
                username: 'Skynet',
                lastMessage: 'Seen that canned piece of s?',
                date: '13:21'
            },
            {
                id: 4,
                img: 'http://i66.tinypic.com/2qtbqxe.jpg',
                username: 'Termy',
                lastMessage: 'Im studying spanish...',
                date: '13:21'
            },
            {
                id: 5,
                img: 'https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg',
                username: 'XXXXX',
                lastMessage: 'I\'m not sure...',
                date: '13:21'
            },
            {
                id: 6,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI',
                username: 'XXXXX',
                lastMessage: 'Hi, wanna see something?',
                date: '13:21'
            }
        ]
    }),
    methods: {
        changeChatPanel(id) { this.$emit('user:changed', id) }
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

