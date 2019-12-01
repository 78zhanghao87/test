<template>
  <div>
    <audio src="/static/audio/romeostune.mp3" autoplay="" :controls="showcontrols" @ended="nextsong()">    </audio>
    Now,
    <span class="type"></span>
  </div>
</template>
<script>
import Typed from "typed.js";
export default {
  name: "blank",
  data() {
    return {
      // currentSong:'',
      showcontrols:true
    };
  },
  mounted() {
    let typed = new Typed(".type", {
      strings: [" you can start from here."],
      typeSpeed: 100,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    });
    typed.start()
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>