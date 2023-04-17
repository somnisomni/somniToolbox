<template>
  <VApp theme="dark">
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

@Component({
  components: {
    AppSysbar,
    AppBar,
  },
})
export default class App extends Vue { }
</script>
