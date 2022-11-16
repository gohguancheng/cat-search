<template>
  <div class="fixed inset-0 bg-white lg:px-[30px]">
    <div
      v-show="isLoading"
      class="w-full h-full flex justify-center items-center"
    >
      <Spinner />
    </div>
    <div
      v-show="!isLoading && results && results.length"
      class="w-full h-full max-h-full flex flex-col"
    >
      <div class="flex justify-center">
        <div class="text-center" v-if="info">
          <a :href="info.link" target="_blank">
            <h1 class="hover:underline text-4xl font-bold my-[10px]">
              {{ info.name }}
            </h1>
          </a>
          <p class="mb-[20px]">{{ info.temperament }}</p>
        </div>
      </div>
      <div
        class="flex-grow flex flex-wrap justify-center gap-[20px] overflow-y-auto py-[50px] lg:px-[30px]"
      >
        <div v-for="item of results" :key="item.id" class="lg:flex">
          <img
            class="object-cover w-full h-[150px] rounded-lg lg:w-[300px]"
            :src="item.url"
            :alt="item.id"
          />
        </div>
      </div>
      <div
        class="fixed max-lg:inset-x-0 max-lg:bottom-[10px] lg:bottom-full lg:top-[10px] lg:right-[10px]"
      >
        <div
          class="w-[50px] bg-white rounded-full mx-auto lg:relative lg:right-0 lg:mx-0"
        >
          <img
            src="@/assets/icons/close.svg"
            alt="close"
            class="button w-[50px]"
            @click="emit('on-close')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Spinner from "@/components/Spinner.vue";

interface Props {
  selectedId: string;
  isLoading: boolean;
  results: [
    {
      breeds: [
        {
          temperament: string;
          name: string;
          wikipedia_url: string;
        }
      ];
      url: string;
      id: string;
    }
  ];
}

const props = defineProps<Props>();

const emit = defineEmits(["on-close"]);
const info = computed(() => {
  if (props.results) {
    const entry = props.results[0];
    if (entry && Array.isArray(entry.breeds)) {
      return {
        name: props?.results[0].breeds[0].name,
        temperament: props?.results[0].breeds[0].temperament,
        link: props?.results[0].breeds[0]["wikipedia_url"],
      };
    }
  }
  return null;
});
</script>
