<template>
 <div>
歌手
 </div>
</template>

<script> 
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
const HOT_NAME ='热门'
const HOT_SINGER_LEN =10
/* eslint-disable */
export default {
  data() {
    return{
       singers: []
    }
   
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) =>{
        if(res.code ==ERR_OK){
          this.singers =res.data.list
          console.log(this.singers)
        }
      })
    },
    _normalizeSinger(list) {
      //热门数据&&字母排序对象
      let map ={
        hot: {
          title:HOT_NAME,
          items:[]
        }
      }
      list.forEach((item,index)=> {
        if(index< HOT_SINGER_LEN){
          map.hot.items.push({
            id: item.Fsinger_mid,
            name: item.Fsinger_name,
            avator: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        const key = item.Findex
        if(!map[key]) {
          map[key] ={
            title: key,
            items: []
          }
        }
        map[key].items.push({
           id: item.Fsinger_mid,
            name: item.Fsinger_name,
            avator: `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
    }
  },
  components: {}
};
</script>

<style>

</style>
