<template>
  <VSystemBar>
    <span>{{ timeString }}</span>
  </VSystemBar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class AppSysbar extends Vue {
  timeString: string = "00:00";

  mounted(): void {
    const updateTime = () => {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");
      const second = String(now.getSeconds()).padStart(2, "0");
      this.timeString = `${hour}:${minute}:${second}`;
    };

    updateTime();
    setInterval(updateTime, 1000);
  }
}
</script>
