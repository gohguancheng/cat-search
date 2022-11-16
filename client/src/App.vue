<template>
  <div
    class="h-full w-full flex justify-center items-center bg-blue-500 overflow-hidden"
  >
    <div class="w-[1280px] max-w-full h-[580px] max-h-full relative">
      <div class="absolute inset-0 bg-white opacity-50 xl:rounded-[20px]"></div>
      <div class="relative z-10 p-[20px] h-full w-full flex flex-col">
        <TopBar class="z-10" />
        <div
          class="flex-grow flex items-stretch justify-center h-full w-[1024px] max-w-full mx-auto py-[40px] lg:justify-start"
        >
          <div class="relative z-10 w-full mt-[50px] lg:w-1/2">
            <div class="my-[20px]">
              <h1
                class="text-center text-2xl font-semibold lg:text-5xl lg:text-left lg:ml-[30px]"
              >
                Cat Search
              </h1>
            </div>
            <SearchBar @on-select="(value) => (selectedId = value)" />
          </div>
          <div
            v-if="randomFour && randomFour.length"
            class="absolute flex flex-wrap max-lg:hidden lg:top-0 lg:w-[55%] lg:h-full lg:right-0"
          >
            <div
              v-for="(item, index) in randomFour"
              :key="item"
              class="basis-1/2 p-[5px]"
              :class="[index % 2 ? 'mb-[20px]' : 'mt-[20px]']"
            >
              <img
                :src="item"
                :alt="item"
                class="object-cover w-full max-h-[250px] rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Overlay
      v-if="selectedId"
      :selected-id="selectedId"
      :is-loading="isLoading"
      :results="results"
      class="z-50"
      @on-close="selectedId = ''"
    />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

import { onMounted, ref, watch } from "vue";

import TopBar from "@/components/TopBar.vue";
import SearchBar from "./components/SearchBar.vue";
import Overlay from "./components/Overlay.vue";

interface Results {
  breeds: [{ temperament: string; name: string; wikipedia_url: string }];
  url: string;
  id: string;
}

const selectedId = ref<string>("");
const results = ref<Results[]>([]);
const randomFour = ref<string[]>([]);
const isLoading = ref<boolean>(false);

onMounted(async () => {
  try {
    randomFour.value = await axios
      .get("/api/random/")
      .then((res) => res.data.map(({ url }: { url: string }) => url));
  } catch (e) {
    return;
  }
});

watch(selectedId, async (id) => {
  if (id) {
    isLoading.value = true;
    results.value = await axios
      .post(`/api/search/${id}`)
      .then((res) => res.data);
    isLoading.value = false;
  }
});
</script>
