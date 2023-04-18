<template>
  <VApp :theme="appStore.theme">
    <AppSysbar />
    <AppBar />

    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import AppSysbar from "./components/AppSysbar.vue";
import AppBar from "./components/AppBar.vue";
import { useAppStore } from "./stores/app";

@Component({
  components: {
    AppSysbar,
    AppBar,
  },
})
export default class App extends Vue {
  // ... is this right way to use Pinia store in class component?
  readonly appStore = useAppStore();
}
</script>
