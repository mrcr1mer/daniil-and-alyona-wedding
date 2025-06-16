<template>
  <main class="page">
    <greeting />
    <event-details />
    <Map />
    <schedule />
    <dress-code />
    <notes />
  </main>
  <footer v-animate.title class="footer">
    Ждем вас на торжестве <span>&#x2764;</span>
  </footer>
</template>

<script setup>
import Greeting from "@/components/templates/greeting/index.vue"
import EventDetails from "@/components/templates/event-details/index.vue"
import Map from "@/components/atom/map/index.vue"
import Schedule from "@/components/templates/schedule/index.vue"
import DressCode from "@/components/templates/dress-code/index.vue"
import Notes from "@/components/templates/notes/index.vue"
</script>

<style scoped lang="scss">
.page {
  max-width: 425px;
  margin-inline: auto;
}

.footer {
  padding: 0 20px 30px;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    color: #484848;
  }
}
</style>
