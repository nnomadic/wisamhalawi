<template>
  <div class="arrow" @click="next()">
    <div class="arrow-top"></div>
    <div class="arrow-bottom"></div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$emit('next')
    },
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  cursor: pointer;
  // height: 120px;
  left: 50%;
  position: absolute;
  // top: 50%;
  bottom: 10px;
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
  transition: transform 0.1s;
  width: 45px;
  height: 65px;

  $transition-time: 0.15s;

  &-top,
  &-bottom {
    background-color: $gray;
    height: 4px;
    left: -5px;
    position: absolute;
    top: 50%;
    width: 100%;

    &:after {
      background-color: $dark-electric;
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      transition: all $transition-time;
    }
  }

  &-top {
    transform: rotate(45deg);
    transform-origin: bottom right;

    &:after {
      left: 100%;
      right: 0;
      transition-delay: 0s;
    }
  }

  &-bottom {
    transform: rotate(-45deg);
    transform-origin: top right;

    &:after {
      left: 0;
      right: 100%;
      transition-delay: $transition-time;
    }
  }

  &:hover & {
    &-top:after {
      left: 0;
      transition-delay: $transition-time;
    }

    &-bottom:after {
      right: 0;
      transition-delay: 0s;
    }
  }

  &:active {
    transform: translateX(-50%) translateY(-50%) rotate(90deg) scale(0.9);
  }
}
</style>
