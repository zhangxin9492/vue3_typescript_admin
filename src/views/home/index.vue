<template>
  <div class="about">
    <Header />
    <Sidebar />
    <div class="content-box" :class="{ 'content-collapse': false }">
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Header from '../../components/Header.vue';
import Sidebar from '../../components/Slider.vue';
const tagsList = ref([]);
</script>
