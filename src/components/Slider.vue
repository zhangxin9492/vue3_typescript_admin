<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon><edit /></el-icon>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group
              v-for="subItem in item.subs"
              :key="subItem.index"
            >
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon><edit /></el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Edit } from '@element-plus/icons-vue';
const items = [
  {
    icon: 'el-icon-lx-home',
    index: '/dashboard',
    title: '系统首页',
  },
  {
    icon: 'el-icon-lx-calendar',
    index: '3',
    title: '表单相关',
    subs: [
      {
        index: '/form',
        title: '基本表单',
      },
      {
        index: '/upload',
        title: '文件上传',
      },
      {
        index: '4',
        title: '三级菜单',
        subs: [
          {
            index: '/editor',
            title: '富文本编辑器',
          },
        ],
      },
    ],
  },
  {
    icon: '',
    index: '/table',
    title: '表格',
  },
];

const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});

// const store = useStore();
const collapse = false;
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
