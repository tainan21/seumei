(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d8642a"],{"498a":function(t,e,c){"use strict";var n=c("23e7"),o=c("58a8").trim,r=c("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return o(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,c){var n=c("e330"),o=c("1d80"),r=c("577e"),i=c("5899"),l=n("".replace),u="["+i+"]",a=RegExp("^"+u+u+"*"),d=RegExp(u+u+"*$"),s=function(t){return function(e){var c=r(o(e));return 1&t&&(c=l(c,a,"")),2&t&&(c=l(c,d,"")),c}};t.exports={start:s(1),end:s(2),trim:s(3)}},c3fb:function(t,e,c){"use strict";c.r(e);c("b0c0"),c("a4d3"),c("e01a");var n=c("7a23"),o=function(t){return Object(n["C"])("data-v-1cc5da1c"),t=t(),Object(n["A"])(),t},r={class:"grid"},i={class:"col-12"},l={class:"card"},u={class:"my-2"},a={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},d=o((function(){return Object(n["j"])("h5",{class:"m-0"},"Manage Products",-1)})),s={class:"block mt-2 md:mt-0 p-input-icon-left"},b=o((function(){return Object(n["j"])("i",{class:"pi pi-search"},null,-1)})),p=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Code",-1)})),j=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Name",-1)})),f=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Image",-1)})),m=["src","alt"],O=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Price",-1)})),h=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Category",-1)})),g=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Rating",-1)})),v=o((function(){return Object(n["j"])("span",{class:"p-column-title"},"Status",-1)})),y=["src","alt"],S={class:"field"},P=o((function(){return Object(n["j"])("label",{for:"name"},"Name",-1)})),w={key:0,class:"p-invalid"},C={class:"field"},k=o((function(){return Object(n["j"])("label",{for:"description"},"Description",-1)})),D={class:"field"},V=o((function(){return Object(n["j"])("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1)})),x={key:0},L={key:1},U={key:2},I={class:"field"},N=o((function(){return Object(n["j"])("label",{class:"mb-3"},"Category",-1)})),_={class:"formgrid grid"},H={class:"field-radiobutton col-6"},T=o((function(){return Object(n["j"])("label",{for:"category1"},"Accessories",-1)})),R={class:"field-radiobutton col-6"},z=o((function(){return Object(n["j"])("label",{for:"category2"},"Clothing",-1)})),F={class:"field-radiobutton col-6"},q=o((function(){return Object(n["j"])("label",{for:"category3"},"Electronics",-1)})),A={class:"field-radiobutton col-6"},E=o((function(){return Object(n["j"])("label",{for:"category4"},"Fitness",-1)})),M={class:"formgrid grid"},K={class:"field col"},$=o((function(){return Object(n["j"])("label",{for:"price"},"Price",-1)})),B={class:"field col"},J=o((function(){return Object(n["j"])("label",{for:"quantity"},"Quantity",-1)})),Y={class:"flex align-items-center justify-content-center"},Q=o((function(){return Object(n["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)})),W={key:0},G=Object(n["m"])("Are you sure you want to delete "),X=Object(n["m"])("?"),Z={class:"flex align-items-center justify-content-center"},tt=o((function(){return Object(n["j"])("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)})),et={key:0};function ct(t,e,c,o,ct,nt){var ot=Object(n["H"])("Toast"),rt=Object(n["H"])("Button"),it=Object(n["H"])("FileUpload"),lt=Object(n["H"])("Toolbar"),ut=Object(n["H"])("InputText"),at=Object(n["H"])("Column"),dt=Object(n["H"])("Rating"),st=Object(n["H"])("DataTable"),bt=Object(n["H"])("Textarea"),pt=Object(n["H"])("Dropdown"),jt=Object(n["H"])("RadioButton"),ft=Object(n["H"])("InputNumber"),mt=Object(n["H"])("Dialog");return Object(n["z"])(),Object(n["i"])("div",r,[Object(n["j"])("div",i,[Object(n["j"])("div",l,[Object(n["n"])(ot),Object(n["n"])(lt,{class:"mb-4"},{start:Object(n["S"])((function(){return[Object(n["j"])("div",u,[Object(n["n"])(rt,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:nt.openNew},null,8,["onClick"]),Object(n["n"])(rt,{label:"Delete",icon:"pi pi-trash",class:"p-button-danger",onClick:nt.confirmDeleteSelected,disabled:!ct.selectedProducts||!ct.selectedProducts.length},null,8,["onClick","disabled"])])]})),end:Object(n["S"])((function(){return[Object(n["n"])(it,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),Object(n["n"])(rt,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:e[0]||(e[0]=function(t){return nt.exportCSV(t)})})]})),_:1}),Object(n["n"])(st,{ref:"dt",value:ct.products,selection:ct.selectedProducts,"onUpdate:selection":e[2]||(e[2]=function(t){return ct.selectedProducts=t}),dataKey:"id",paginator:!0,rows:10,filters:ct.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(n["S"])((function(){return[Object(n["j"])("div",a,[d,Object(n["j"])("span",s,[b,Object(n["n"])(ut,{modelValue:ct.filters["global"].value,"onUpdate:modelValue":e[1]||(e[1]=function(t){return ct.filters["global"].value=t}),placeholder:"Search..."},null,8,["modelValue"])])])]})),default:Object(n["S"])((function(){return[Object(n["n"])(at,{selectionMode:"multiple",headerStyle:"width: 3rem"}),Object(n["n"])(at,{field:"code",header:"Code",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[p,Object(n["m"])(" "+Object(n["L"])(t.data.code),1)]})),_:1}),Object(n["n"])(at,{field:"name",header:"Name",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[j,Object(n["m"])(" "+Object(n["L"])(t.data.name),1)]})),_:1}),Object(n["n"])(at,{header:"Image",headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[f,Object(n["j"])("img",{src:"images/product/"+t.data.image,alt:t.data.image,class:"shadow-2",width:"100"},null,8,m)]})),_:1}),Object(n["n"])(at,{field:"price",header:"Price",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:Object(n["S"])((function(t){return[O,Object(n["m"])(" "+Object(n["L"])(nt.formatCurrency(t.data.price)),1)]})),_:1}),Object(n["n"])(at,{field:"category",header:"Category",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[h,Object(n["m"])(" "+Object(n["L"])(nt.formatCurrency(t.data.category)),1)]})),_:1}),Object(n["n"])(at,{field:"rating",header:"Reviews",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[g,Object(n["n"])(dt,{modelValue:t.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]})),_:1}),Object(n["n"])(at,{field:"inventoryStatus",header:"Status",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:Object(n["S"])((function(t){return[v,Object(n["j"])("span",{class:Object(n["u"])("product-badge status-"+(t.data.inventoryStatus?t.data.inventoryStatus.toLowerCase():""))},Object(n["L"])(t.data.inventoryStatus),3)]})),_:1}),Object(n["n"])(at,null,{body:Object(n["S"])((function(t){return[Object(n["n"])(rt,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(e){return nt.editProduct(t.data)}},null,8,["onClick"]),Object(n["n"])(rt,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(e){return nt.confirmDeleteProduct(t.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value","selection","filters"]),Object(n["n"])(mt,{visible:ct.productDialog,"onUpdate:visible":e[12]||(e[12]=function(t){return ct.productDialog=t}),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:Object(n["S"])((function(){return[Object(n["n"])(rt,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:nt.hideDialog},null,8,["onClick"]),Object(n["n"])(rt,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:nt.saveProduct},null,8,["onClick"])]})),default:Object(n["S"])((function(){return[ct.product.image?(Object(n["z"])(),Object(n["i"])("img",{key:0,src:"images/product/"+ct.product.image,alt:ct.product.image,width:"150",class:"mt-0 mx-auto mb-5 block shadow-2"},null,8,y)):Object(n["h"])("",!0),Object(n["j"])("div",S,[P,Object(n["n"])(ut,{id:"name",modelValue:ct.product.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return ct.product.name=t}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(n["u"])({"p-invalid":ct.submitted&&!ct.product.name})},null,8,["modelValue","class"]),ct.submitted&&!ct.product.name?(Object(n["z"])(),Object(n["i"])("small",w,"Name is required.")):Object(n["h"])("",!0)]),Object(n["j"])("div",C,[k,Object(n["n"])(bt,{id:"description",modelValue:ct.product.description,"onUpdate:modelValue":e[4]||(e[4]=function(t){return ct.product.description=t}),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),Object(n["j"])("div",D,[V,Object(n["n"])(pt,{id:"inventoryStatus",modelValue:ct.product.inventoryStatus,"onUpdate:modelValue":e[5]||(e[5]=function(t){return ct.product.inventoryStatus=t}),options:ct.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:Object(n["S"])((function(t){return[t.value&&t.value.value?(Object(n["z"])(),Object(n["i"])("div",x,[Object(n["j"])("span",{class:Object(n["u"])("product-badge status-"+t.value.value)},Object(n["L"])(t.value.label),3)])):t.value&&!t.value.value?(Object(n["z"])(),Object(n["i"])("div",L,[Object(n["j"])("span",{class:Object(n["u"])("product-badge status-"+t.value.toLowerCase())},Object(n["L"])(t.value),3)])):(Object(n["z"])(),Object(n["i"])("span",U,Object(n["L"])(t.placeholder),1))]})),_:1},8,["modelValue","options"])]),Object(n["j"])("div",I,[N,Object(n["j"])("div",_,[Object(n["j"])("div",H,[Object(n["n"])(jt,{id:"category1",name:"category",value:"Accessories",modelValue:ct.product.category,"onUpdate:modelValue":e[6]||(e[6]=function(t){return ct.product.category=t})},null,8,["modelValue"]),T]),Object(n["j"])("div",R,[Object(n["n"])(jt,{id:"category2",name:"category",value:"Clothing",modelValue:ct.product.category,"onUpdate:modelValue":e[7]||(e[7]=function(t){return ct.product.category=t})},null,8,["modelValue"]),z]),Object(n["j"])("div",F,[Object(n["n"])(jt,{id:"category3",name:"category",value:"Electronics",modelValue:ct.product.category,"onUpdate:modelValue":e[8]||(e[8]=function(t){return ct.product.category=t})},null,8,["modelValue"]),q]),Object(n["j"])("div",A,[Object(n["n"])(jt,{id:"category4",name:"category",value:"Fitness",modelValue:ct.product.category,"onUpdate:modelValue":e[9]||(e[9]=function(t){return ct.product.category=t})},null,8,["modelValue"]),E])])]),Object(n["j"])("div",M,[Object(n["j"])("div",K,[$,Object(n["n"])(ft,{id:"price",modelValue:ct.product.price,"onUpdate:modelValue":e[10]||(e[10]=function(t){return ct.product.price=t}),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),Object(n["j"])("div",B,[J,Object(n["n"])(ft,{id:"quantity",modelValue:ct.product.quantity,"onUpdate:modelValue":e[11]||(e[11]=function(t){return ct.product.quantity=t}),integeronly:""},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(n["n"])(mt,{visible:ct.deleteProductDialog,"onUpdate:visible":e[14]||(e[14]=function(t){return ct.deleteProductDialog=t}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(n["S"])((function(){return[Object(n["n"])(rt,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[13]||(e[13]=function(t){return ct.deleteProductDialog=!1})}),Object(n["n"])(rt,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:nt.deleteProduct},null,8,["onClick"])]})),default:Object(n["S"])((function(){return[Object(n["j"])("div",Y,[Q,ct.product?(Object(n["z"])(),Object(n["i"])("span",W,[G,Object(n["j"])("b",null,Object(n["L"])(ct.product.name),1),X])):Object(n["h"])("",!0)])]})),_:1},8,["visible"]),Object(n["n"])(mt,{visible:ct.deleteProductsDialog,"onUpdate:visible":e[16]||(e[16]=function(t){return ct.deleteProductsDialog=t}),style:{width:"450px"},header:"Confirm",modal:!0},{footer:Object(n["S"])((function(){return[Object(n["n"])(rt,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:e[15]||(e[15]=function(t){return ct.deleteProductsDialog=!1})}),Object(n["n"])(rt,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:nt.deleteSelectedProducts},null,8,["onClick"])]})),default:Object(n["S"])((function(){return[Object(n["j"])("div",Z,[tt,ct.product?(Object(n["z"])(),Object(n["i"])("span",et,"Are you sure you want to delete the selected products?")):Object(n["h"])("",!0)])]})),_:1},8,["visible"])])])])}var nt=c("5530"),ot=(c("498a"),c("4de4"),c("d3b7"),c("caad"),c("2532"),c("0393")),rt=c("e9c0"),it={data:function(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}},productService:null,created:function(){this.productService=new rt["a"],this.initFilters()},mounted:function(){var t=this;this.productService.getProducts().then((function(e){return t.products=e}))},methods:{formatCurrency:function(t){if(t)return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog:function(){this.productDialog=!1,this.submitted=!1},saveProduct:function(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct:function(t){this.product=Object(nt["a"])({},t),this.productDialog=!0},confirmDeleteProduct:function(t){this.product=t,this.deleteProductDialog=!0},deleteProduct:function(){var t=this;this.products=this.products.filter((function(e){return e.id!==t.product.id})),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById:function(t){for(var e=-1,c=0;c<this.products.length;c++)if(this.products[c].id===t){e=c;break}return e},createId:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<5;c++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},exportCSV:function(){this.$refs.dt.exportCSV()},confirmDeleteSelected:function(){this.deleteProductsDialog=!0},deleteSelectedProducts:function(){var t=this;this.products=this.products.filter((function(e){return!t.selectedProducts.includes(e)})),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},initFilters:function(){this.filters={global:{value:null,matchMode:ot["a"].CONTAINS}}}}},lt=(c("e348"),c("d959")),ut=c.n(lt);const at=ut()(it,[["render",ct],["__scopeId","data-v-1cc5da1c"]]);e["default"]=at},c8d2:function(t,e,c){var n=c("5e77").PROPER,o=c("d039"),r=c("5899"),i="​᠎";t.exports=function(t){return o((function(){return!!r[t]()||i[t]()!==i||n&&r[t].name!==t}))}},e348:function(t,e,c){"use strict";c("f4e2")},f4e2:function(t,e,c){}}]);
//# sourceMappingURL=chunk-02d8642a.5464da4d.js.map