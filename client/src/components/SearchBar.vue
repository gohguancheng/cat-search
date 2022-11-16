<template>
  <div class="relative h-[50px] w-full">
    <div
      class="rounded-[40px] pl-[5px] bg-white flex justify-between w-full h-full"
      @click="selectSearch()"
    >
      <input
        ref="searchInput"
        v-model="input"
        class="my-[10px] ml-[15px] max-w-full focus:outline-none flex-1"
      />
      <button
        class="px-[20px] py-[5px] bg-blue-500 text-white text-md rounded-r-full"
      >
        <img src="@/assets/icons/search.svg" alt="search" class="w-[20px]" />
      </button>
    </div>
    <div class="relative">
      <div
        v-if="isOpen"
        class="bg-white p-[15px] rounded-[15px] shadow-md absolute inset-x-0 top-1 mt-10px"
      >
        <div class="flex justify-between mx-[10px] py-[10px]">
          <p class="text-center">Results</p>
          <img
            src="@/assets/icons/close.svg"
            alt="close"
            class="button w-[15px]"
          />
        </div>
        <div class="max-h-[200px] overflow-y-auto px-[10px]">
          <hr class="border-t-[1px] border-t-gray-500" />
          <template
            v-if="
              Array.isArray(inputFilteredBreeds) && inputFilteredBreeds.length
            "
          >
            <div
              v-for="breed in inputFilteredBreeds"
              :key="breed.id"
              class="button py-[10px] border-b-[1px] border-b-gray-500"
              @click="
                () => {
                  isOpen = false;
                  emit('on-select', breed.id);
                }
              "
            >
              <p v-html="breed.nameHtml"></p>
            </div>
          </template>
          <div v-else class="text-center py-[15px]">No Matching Results</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";

const searchInput = ref<any>(null);
const breeds = ref<Array<any>>([]);
const input = ref<string>("");
const isOpen = ref<boolean>(false);
const emit = defineEmits(["on-select"]);

const selectSearch = () => {
  searchInput.value.focus();
};

onMounted(async () => {
  breeds.value = await axios.get("/api/breeds").then(({ data }) => data);
});

const inputFilteredBreeds = computed(() =>
  breeds.value
    .filter(({ name }) =>
      name.toLowerCase().includes(input.value.toLowerCase())
    )
    .map(({ name, id }) => ({
      name,
      id,
      nameHtml: `${name.replace(
        subStringReg.value,
        (str: string) => `<span class="font-bold">${str}</span>`
      )}`,
    }))
    .slice(0, 6)
);

const subStringReg = computed(() => new RegExp(input.value, "gi"));

watch(input, (newValue) => {
  if (newValue) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
});
</script>
