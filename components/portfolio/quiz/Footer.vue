<template>
  <div class="mx-auto mt-6 mt-md-12 mb-6" style="max-width: 960px">
    <v-footer class="py-6 px-9 px-md-3" style="background: inherit" padless>
      <p class="caption text-justify">
        {{ translate.disclaimer }}
      </p>
      <p class="caption text-justify">
        {{ translate.disclaimer }} &copy; {{ new Date().getFullYear() }} {{ translate.footer }}
      </p>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  components: {},
  props: {
    translate: {}
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped lang="scss">
</style>
