<template>
  <transition name="fade">
    <div class="toast" v-if="isshow">
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      time: 2000,
      isshow: false,
    };
  },
  methods: {
    show({ message, time = 1000 }) {
      this.isshow = true;
      this.message = message;
      setTimeout(() => {
        this.isshow = false;
        this.message = "";
      }, time);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 30px;
  width: 1200px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  background-color: rgba(62, 134, 201, 0.5);
  z-index: 999;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter {
  opacity: 0;
  top: -30px;
}
.fade-leave-to {
  opacity: 0;
  top: 40px;
}
</style>