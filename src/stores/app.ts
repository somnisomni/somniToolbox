// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const theme: Ref<"light" | "dark"> = ref("dark");

  return { theme };
});
