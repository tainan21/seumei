<template class="grid col-12" >
  <div class="bannerLegenda flex align-items-center justify-content-center lg:p-5 p-3">
		<div class="fontBanner m-3 text-white">{{name_empresa}}</div>
     <svg viewBox="0 0 124.000000 152.000000" preserveAspectRatio="xMidYMid meet" fill="none" >
          <g id="BG" transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)" enable-background="none" rect="none">
            <path id="BGElement" d="M484 1510 c-228 -41 -387 -181 -456 -400 -20 -65 -23 -95 -23 -225 1 -170 14 -237 70 -350 71 -145 306 -416 421 -485 49 -29 67 -35 118 -35 93 0 142 29 271 159 185 186 292 345 332 496 25 92 24 330 -1 420 -40 144 -141 283 -251 344 -97 54 -189 78 -315 82 -63 1 -138 -1 -166 -6z m-179 -733 c111 -66 239 -242 252 -345 5 -45 3 -51 -17 -62 -59 -32 -193 14 -281 97 -105 98 -135 253 -60 310 21 16 80 16 106 0z m749 -18 c36 -43 36 -124 1 -196 -50 -99 -176 -189 -280 -200 -71 -7 -95 7 -95 56 0 83 127 274 225 339 65 43 113 44 149 1z m-332 -561 c-20 -20 -33 -23 -102 -23 -69 0 -82 3 -102 23 l-22 22 124 0 124 0 -22 -22z"
              fill="#E6E6E6"
            />
          </g>
      </svg>
	</div>
	<a class="flex align-items-center"></a>
	<div class="surface-card flex align-items-center justify-content-center overflow-hidden" style="background:rgb(255 255 255)">
		<div class="justify-content-center">
			<div class="card">
				<div class="flex justify-content-between flex-wrap card-container purple-container">
					<div class="flex align-items-center justify-content-center  font-bold  border-round m-2" style="color: rgb(127, 143, 159);"><i class="pi pi-map-marker mr-2 ml-2" style="color: #000" ></i>Galaxia Burguer - Pereiras / SP</div>
					<div :class="{'bg-green-500': verify_hour(), 'bg-close': !verify_hour() }" class="flex align-items-center justify-content-center font-bold text-white p-2 border-round m-2">
						<div  v-if="!verify_hour()"> <i  class="pi pi-fw pi-ban mr-2 ml-2" style="vertical-align: center;"></i>Fechado </div>
            <div  v-if="verify_hour()"> <i  class="pi pi-fw pi-map mr-2 ml-2" style="vertical-align: center;"></i>Aberto </div>
					</div>
				</div>
				<DataView :value="filtered_extra_list" :layout="layout" :paginator="false" :sortOrder="sortOrder" :sortField="sortField">
					<template #header >
						<div class="grid grid-nogutter testetemplate" >
							<div class="col-10">
                <div class="grid grid-nogutter">
                  <Toast />
                  <div class="col-12 lg:col-4 md:col-6 sm:col-12 flex justify-content-around">
                    <Button @click="filters.category = 'Lanches'" icon="bx bx-restaurant" label="Lanches" class="bg-red-custom button-filter mr-2 mt-2"/>
                    <Button @click="filters.category = 'Porções'" icon="pi pi-moon" label="Porções" class="bg-black-custom  button-filter mr-2 mt-2"/>
                  </div>
                  <div class="col-12 lg:col-4 md:col-6 sm:col-12 flex justify-content-around">
                    <Button @click="filters.category = 'Bebidas'" icon="bx bx-beer" label="Bebidas" class="bg-orange-custom button-filter mr-2 mt-2"/>
                    <Button @click="filters.category = 'Sobremesas'" icon="bx bx-coffee-togo" label="Sobremesas" class="bg-redLight-custom button-filter mr-2 mt-2"/>
                  </div>
                  <div class="col-12 lg:col-2  sm:col-12 flex justify-content-around">
                    <Button @click="filters.category = ''" icon="pi pi-align-left" label="todos" class="bg-cianes-custom button-filter mr-2 mt-2"/>
                  </div>
                </div>
							</div>
							<div class="col-2 text-right">
								<DataViewLayoutOptions v-model="layout" />
							</div>
						</div>
					</template>
					<template #list="slotProps">
						<div class="col-12 overflow-hidden" style="min-width: 80%">
              <div v-if="slotProps.data.show" class="boxTitle"><h5 class="Legenda boxTitleText">{{slotProps.data.category}}</h5></div>
							<a @click="open(slotProps.data)" icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
								class="cursor-pointer flex flex-row align-items-center button-burguer">
									<div class="flex-1 text-left">
										<h5 class="" style="margin-bottom: 10px; display: block; font-size: 16px; line-height: 120%; font-weight: 700;">{{ slotProps.data.name }}</h5>
										<div class="mb-3 pr-3 legenda">{{ slotProps.data.description }}</div>
										<span class="text-2xl font-semibold mb-2 align-self-center md:align-self-end" style=" color: rgb(48, 51, 60); margin-top: 10px; font-size: 16px; line-height: 120%; font-weight: bold; font: 'Work Sans', sans-serif;">{{ formatCurrency(slotProps.data.price) }}</span>
									</div>
								<div class=" flex flex-column justify-content-between align-items-end md:mt-0"> <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="my-1 w-7rem shadow-2 mr-3" style=" object-fit: cover; height: 6rem; border-radius: 4px; background: rgb(196, 196, 196);"/></div>
							</a>
						</div>
					</template>
					<template #grid="slotProps">
						<div class="col-12 md:col-4">
							<div class="card m-3 border-1 surface-border">
								<div class="flex align-items-center justify-content-between">
									<div class="flex align-items-center">
										<i class="pi pi-tag mr-2"></i><span class="font-semibold">{{slotProps.data.category}}</span>
									</div>
									<span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
								</div>
								<div class="text-center">
									<img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-9 shadow-2 my-3 mx-0" />
									<div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
									<div class="mb-3">{{ slotProps.data.description }}</div>
								</div>
								<div class="flex align-items-center justify-content-between">
									<Toast />
									<span class="text-2xl font-semibold">{{formatCurrency(slotProps.data.price)}}</span>
									<Button label="Show" style="width: auto" icon="pi pi-shopping-cart" @click="open(slotProps.data)"> Comprar </Button>
               <!--  <router-link :to="'/product/' + slotProps.data.price" class="text-decoration-none">
                      <button class="btn btn-warning btn-sm w-100 d-flex align-items-center justify-content-center">
                          More Info
                          <i class="fas fa-angle-double-right mx-1"></i>
                      </button>
                  </router-link> -->
								</div>
							</div>
						</div>
					</template>
				</DataView>
			</div>
		</div>
	</div>
	<div id="btn-app"> <BottomNavigation :options="options" :badge-color="badgeColor" :foreground-color="foregroundColor" v-model="selected"/> </div>
</template>
<script>
import ProductService from "../service/ProductService";
import BottomNavigation from "../components/BottomNavigation.vue";
import moment from 'moment'
export default {
  name: "App",
  components: { BottomNavigation },
  data() {
    return {
    name_empresa: "Galaxia Burguer",
	  total_product: null,
     id: null,
     total: null,
	  imageModal: null,
     carrinho_recuperado: null,
     carrinho: [],
     car: [],
     display: false,
     visibleFull: false,
     dropdownValue: null,
     radioValue: null,
     additional: [],
     message: [],
     switchValue: false,
     dataviewValue: null,
     layout: "list",
     sortKey: null,
     sortOrder: null,
     sortField: null,
     filters:{
       category: null,
     },
     selected: 1,
      options: [{
	    id: 1, icon: "pi pi-home", title: "Home", path: '../pages/faça-seu-pedido', badge: null,
     },
		{ id: 2, icon: "pi pi-shopping-cart", title: "Carrinho", path: '../pages/carrinho', badge: null },
	],
	foregroundColor: "#42A5F5",
	badgeColor: "#FBC02D",
  option_sort:{
    value: null
  },
  order_by: null,
  order_type: null,};},
  productService: null,
  computed: {
    totalAdd() {
      let total = this.total;
      this.additional.forEach((element) => {
        if (element.selected || element.selected == null) {
          total += element.price;
        }
      });
      return total;
    },
    /*
      filtered_product() {
      return this.dataviewValue.filter((data) => {
      
        for (var [key, value] of Object.entries(this.filters)) {
          if (value === null || value === "") continue;
          if (key === "task") {
            return true;
          }
          if (
            (data[key] === null || data[key] === undefined) &&
            value !== "null"
          )
            return false;
          else if (data[key] === null && value === "null") continue;
          */
     filtered_extra_list() {      
      if(this.dataviewValue){      
        return this.dataviewValue.filter((extra) => {
          for (var [key, value] of Object.entries(this.filters)) {
            if (value === null || value === "") continue;


            if (
              (extra[key] === null || extra[key] === undefined) &&
              value !== "null"
            )
              return false;
            else if (extra[key] === null && value === "null") continue;

            if (
              !extra[key]
                .toString()
                .toLowerCase()
                .includes(value.toString().toLowerCase())
            ) {
              return false;
            }
          }
          return extra;
        });
      }
      else{
        return null
      }
    },
    sliced_product_list() {
      return this.sorted_product_list;
    },
    sorted_product_list() {
     let sorted 
     this.dataviewValue? sorted = this.dataviewValue.slice().sort((a, b) => {
        if (a[this.order_by] > b[this.order_by]) {
          return 1;
        }
        return -1;
      }) : null
      if (this.order_type === 2) {
        sorted = sorted.reverse();
      }
      return sorted;
    },
  },
  created() {
     this.productService = new ProductService();
     this.productService.getProducts().then((data) =>{ 
       this.dataviewValue = data 
       this.organize_obj()
       });
  },
  mounted() {
    this.teste_getLocalStorage(false);
    this.productService.getAdditional().then((data) => (this.additional = data));
   
    
  },
  methods: {
    verify_hour(){
      
      let hour = moment(new Date()).format(' HH:mm')         
      let string_hour = hour.split(":");
      if(parseInt(string_hour[0]) > 16){
        return true        
      }
      else if(parseInt(string_hour[0]) > 0 && parseInt(string_hour[0]) < 2){
        return true
      }
      else { return false}
     
    },

    organize_obj(){
    
    let categorias = []
    let produtos = []
    let contador = 0
    this.dataviewValue.forEach((element) => {
      if(!categorias.includes(element.category)){
        categorias.push(element.category)
      }
     });     
    
     categorias.forEach((categoria, index) => {  
      
     this.dataviewValue.forEach(element => {
                    
        if(element.category == categoria){
         
          if(contador == index){
            contador++
            element.show = true                      
            produtos.push(element)
          }     
          else{
             produtos.push(element) 
          }                        
       }
       });
     });

     this.dataviewValue = produtos
    },
    open(payload) {
      //const username = this.produtos.category
      this.$router.push({ path: '/product'  })
      //this.$router.push({ path: `/product/${username}`})
      //this.$router.push({ name: '/product/', params: { username }  })
      //router.push({ name: 'user', params: { username } })
      this.esvaziar_carrinho()
      this.teste_localStorage_set(payload)

    },
    formatCurrency(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    teste_localStorage_set(payload) {
      this.carrinho.push({ payload: payload });
      window.localStorage.setItem("product", JSON.stringify(this.carrinho));
      this.teste_getLocalStorage(true);
    },
    add_additional() {
		for (let index = 0; index < this.dataviewValue.length; index++) {
			if ( this.dataviewValue[index].id == this.id){
				this.dataviewValue[index].additional = [];
				this.additional.forEach(element => {
					if(element.selected)
						this.dataviewValue[index].additional.push(element);
				});        
				return this.dataviewValue[index]
			}
		} 
    },
    teste_getLocalStorage(payload) {
      const carrinho_salvo = window.localStorage.getItem("carrinho");
      if (carrinho_salvo) {
        this.carrinho_recuperado = JSON.parse(carrinho_salvo);
        if (!payload) {
          this.carrinho_recuperado.forEach((element) => {
            this.carrinho.push(element);
          });
        }
      }
    },
    esvaziar_carrinho() {
      this.carrinho = [];
      window.localStorage.setItem("product", JSON.stringify(this.carrinho));
    },
    close() {
      this.display = false;
    },
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;
      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
    add_product(data) {
      this.$appState.pedidos.push(data);
      this.car.push(data);
      this.total_product = 0;
      this.car.forEach((element) => {
      this.total_product += element.price;
      });
    },
  },
  /* 
        emits: ['change-theme'],
        computed: {
            logoColor() {
                if (this.$appState.darkTheme) return 'white';
                return 'dark';
            },
        },
        */
};
</script>
<style scoped lang="scss">
@import "../assets/demo/badges.scss";
@import url("http://fonts.cdnfonts.com/css/gagalin");
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

</style>
<style>

.p-buttonset .p-button:first-of-type{
  width: 100% !important;
}
.p-buttonset .p-button:last-of-type{
  width: 100% !important;
}
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){
  width: 100% !important;
}
@media (min-width: 768px) {
  .p-buttonset .p-button:first-of-type{
  width: 50% !important;
}
.p-buttonset .p-button:last-of-type{
  width: 50% !important;
}
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){
  width: 50% !important;
}
}
.bannerLegenda{
  background: url("/images/banner-galaxia.jpg") center / cover;
  height: 5%;
  object-fit: cover;
}
.boxTitle{
    position: relative;
    margin-bottom: 0px;
    padding: 24px 16px 16px;
    border-bottom: 1px solid rgb(232, 234, 237);
    font-size: 14px;
    font-weight: bold;
    word-break: break-word;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: rgb(72, 84, 96);
    background: rgb(243, 245, 247);
    width: 100%;
}
.svg-animation-container {
  width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 24px;
  margin: 0 auto;
  border-radius: 20%;
  height: 500px;
}

.svg-animation-container svg {
  width: 100%;
}

svg {
  width: 9%;
}

#BGElement {
  animation: changeColor 5s infinite alternate;
}

.bartop{
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  padding: 5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  color: white;
  animation: changeColorBarTop 5s infinite alternate;

}
.testetemplate{
  margin-bottom: 10px;
}
</style>