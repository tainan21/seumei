<template>
   
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,

    items: [
      { icon: "mdi-home-outline" },
      { icon: "mdi-cart-outline" },
      { icon: "mdi-store-outline" },
      { icon: "mdi-calendar-check-outline" },
      { icon: "mdi-apps" },
    ],
  }),
  props: ["drawer"],
  watch: {
    drawer(value) {
      return value;
    },
  },
};
</script>

<style>
.border {
  margin: 0px 8px;
  background: #6f0dff;
  border-radius: 15px;
  text-decoration: none;
  width: 60px;
  height: 60px;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.v-list-item__content {
  padding: 20px 0 !important;
}
.image {
  border: 1px solid white;
}
</style>
