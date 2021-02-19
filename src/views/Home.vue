<template>
  <div class="home">
      <div class="testTost" @click="showToast">testTost</div>
      <input type="text" v-focus>
      <div class="drag" v-drag></div>
      <div>这是dev分支的内容,继续进行修改</div>
  </div>
</template>
<style type="scss" scoped>
  .drag{
    position: absolute;
    top: 200px;
    left: 100px;
    width: 300px;
    height: 100px;
    border: 1px solid red;
  }
</style>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  methods:{
    showToast(e){
      this.$toast.show({message:'hh'})
    }
  }
}
</script>
