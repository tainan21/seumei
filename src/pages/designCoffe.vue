
<template>
  <div>
    <sidebar-menu-akahon 
      @search-input-emit="search"
    />
  </div>
</template>

<script>
import SidebarMenuAkahon from "../components/MenuSideBar.vue"

export default {
  name: "App",
  components: {
    SidebarMenuAkahon,
  },
  methods: {}
}
</script>

<style></style>
