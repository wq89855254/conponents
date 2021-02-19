<template>
  <div class="home">
      <div class="testTost" @click="showToast">testTost</div>
      <input type="text" v-focus>
  </div>
</template>

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
