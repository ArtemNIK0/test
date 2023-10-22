<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.5s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateX(-100%);
}

.menu-slide-enter-to,
.menu-slide-leave-from {
  transform: translateX(0%);
}
</style>
