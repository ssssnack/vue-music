<template>
 <div>
歌手
 </div>
</template>

<script> 
import Singer from 'common/js/singer'
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
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        const key = item.Findex
        if(!map[key]) {
          map[key] ={
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
           id: item.Fsinger_mid,
            name: item.Fsinger_name
        }))
      })
      //为了得到有序列表，需要处理map
      let hot =[]
      let ret =[]
      for(let key in map){
        let val =map[key]
        if(val.title.match(/[a-zA-Z]/)){
          ret.push()
        }else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      //排序
      ret.sort((a,b) =>{
        return a.title.charCodeAt(0) -b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components: {}
};
</script>

<style>

</style>
