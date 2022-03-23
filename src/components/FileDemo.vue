<template>
  <div id="btn-app">
    <h1>Vue Bottom Navigation</h1>
    <div>
      <div class="color-picker-container">
        <span>Foreground</span>
        <input
          type="color"
          name="foreground"
          id="foreground"
          v-model="foregroundColor"
        />
        <span class="pick-color">{{ foregroundColor }}</span>
      </div>

      <div class="color-picker-container">
        <span>Badge</span>
        <input
          type="color"
          id="badge"
          name="badge"
          v-model="badgeColor"
        />
        <span class="pick-color">{{ badgeColor }}</span>
      </div>
    </div>

    <BottomNavigation
      :options="options"
      :badge-color="badgeColor"
      :foreground-color="foregroundColor"
      v-model="selected"
    />
  </div>
</template>

<script>
import BottomNavigation from "./BottomNavigation.vue";

export default {
  name: "App",
  components: { BottomNavigation },
  data: () => ({
    selected: 1,
    options: [
      {
        id: 1,
        icon: "pi pi-home",
        title: "Home",
        childs: [
          { id: 101, icon: "pi pi-ban", title: "Products", to: '/products'},
          { id: 102, icon: "pi pi-ban", title: "Discount" },
          { id: 103, icon: "pi pi-ban", title: "Gifts", badge: 7 },
        ],
      },
      { id: 2, icon: "pi pi-tag", title: "Promoção", path : {  name : "home"  } },
      {
        id: 3,
        icon: "pi pi-bars",
        title: "Opções",
        childs: [
          { id: 301, icon: "fas fa-bookmark", title: "Bookmarks" },
          { id: 302, icon: "fas fa-tasks", title: "Tasks" },
          { id: 303, icon: "fas fa-tachometer-alt", title: "Dashboard" },
          { id: 304, icon: "fas fa-ticket-alt", title: "Tickets" },
          { id: 305, icon: "fas fa-file-signature", title: "Contract" },
        ],
      },
      { id: 4, icon: "pi pi-shopping-cart", title: "Carrinho", path: '../pages/carrinho', badge: 15 },
      { id: 5, icon: "pi pi-user", title: "Conta", path: '/dashboard' },
    ],

    foregroundColor: "#42A5F5",
    badgeColor: "#FBC02D",
  }),
};
</script>

<style scoped>
#btn-app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
}

.color-picker-container {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.color-picker-container input {
  width: 150px;
  height: 40px;
  margin: 20px 10px;
  border: 2px solid #eee;
  border-radius: 8px;
  cursor: pointer;
}

.pick-color {
  border: 1px solid #eee;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 #eee;
  color: gray;
}
</style>
