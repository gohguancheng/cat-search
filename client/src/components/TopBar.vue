<template>
  <div class="w-[1000px] max-w-full mx-auto">
    <div class="flex items-end gap-[50px]">
      <div class="flex items-end gap-[10px]">
        <img src="@/assets/logo.svg" />
        <h1 class="flex-initial text-base md:text-2xl font-bold">Cat Search</h1>
      </div>
      <ul class="flex md:gap-[20px] flex-1">
        <li
          class="text-xs md:text-base button px-[10px] py-[5px] rounded-[5px]"
        >
          <a href="/"> Home </a>
        </li>
        <li
          class="text-xs md:text-base button px-[10px] py-[5px] rounded-[5px]"
        >
          <a href="https://www.linkedin.com/in/gohguancheng" target="_blank">
            About Me
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
