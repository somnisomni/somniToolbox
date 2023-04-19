<template>
  <VSystemBar>
    <span>{{ APP_VERSION }}</span>
    <VSpacer />
    <span>{{ timeString }}</span>
  </VSystemBar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import { APP_VERSION } from "@/constants";

@Component
export default class AppSysbar extends Vue {
  APP_VERSION = APP_VERSION;
  timeString: string = "00:00";
  timeLastMinute: number = 0;

  mounted(): void {
    const updateTime = () => {
      const now = new Date();

      if(this.timeLastMinute !== now.getMinutes()) {
        this.timeLastMinute = now.getMinutes();

        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        this.timeString = `${hour}:${minute}`;
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }
}
</script>
