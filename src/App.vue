<template>
  <div class="h-full w-full flex justify-center items-center bg-blue-500">
    <div class="w-[1280px] max-w-full h-[580px] max-h-full relative">
      <div class="absolute inset-0 bg-white opacity-50 xl:rounded-[20px]"></div>
      <div class="relative z-10 p-[20px] h-full w-full">
        <TopBar />
        <div class="flex">
          <div class="z-10">
            <div></div>
            <div>Search</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from "@/components/TopBar.vue";
</script>
