<template>
    <div>
        <div><h2>teste</h2></div>
        <div v-if="pedidos.length > 0">
            <div v-for="pedido in pedidos" :key="pedido.id">
                <img :src="'images/product/' + pedido.image" class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5" alt="">
                 {{pedido.id}} - {{pedido.name}} - {{pedido.price}} - {{pedido.image}}
            </div>
        </div>
        <div>
            <div @click="teste()">formatar texto</div>
            <a  :href="url + pedido_txt" >enviar mensagem</a>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                pedidos: [],
                pedido_txt: '',
                url: 'https://api.whatsapp.com/send?phone=+5514991414142&text='
            }
            
        },
        methods: {
            teste() {
                this.pedidos.forEach(element => {
                   this.pedido_txt += element.name + " "  
                   this.pedido_txt += element.price + " "  
                });
                console.log(this.pedido_txt)
            }
        },
        
        
   created() {
            
  },
mounted () {
   
    this.$appState.pedidos.forEach(element => {
        this.pedidos.push( element)
    });
    console.log(this.pedidos)
      /* this.emitter.on("toggle-sidebar", pedidos => {
      this.pedidos.push(pedidos);
       console.log(pedidos)
    }); */
},
    }
</script>