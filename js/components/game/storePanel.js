app.component('store-panel',{
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        itemsStore:{
                type: Array,
                required: true,
        },
        itemSelected: {
            type: Object,
            required: true
        },
    },
    methods: {
        updateView(selectedView) {
            this.$emit("selected-view", selectedView);
        },
        selectTool(tool) {
            this.$emit("tool-selected", tool);
            console.log("Tool selected:", tool);
        },
        selectItemStore(item){
            this.$emit("itemstore-selected", item);
        },
        purchaseItem(){
            this.$emit("purchase-item", this.itemSelected.id);
            console.log("Item purchased:", this.itemSelected);
        }
    },
    template: /*html*/`
    <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
            <img src="img/store-panel.png" alt="store-background">
            <div class="buy-item-container">
                <div class="item-buy-description">
                    <h2>{{ itemSelected?.item }} </h2>
                    <p class="item-description">{{ itemSelected?.description }}</p>
                    <div class="market-action">
                        <button class="button-market" @click="purchaseItem">buy item</button>
                        <img class="coin-img" src="img/coin.png" alt="money">
                        <p class="price">{{ itemSelected?.price }}</p>
                    </div>
                </div>
                <img class="item-buy-img" :src="itemSelected?.image" :alt="itemSelected?.item">
            </div>

            <!-- Items Market Container -->
            <div class="items-market-container">
                <div v-for="item in itemsStore" :key="item.id">
                    <img 
                    :src="item.image"
                    class="items-market" 
                    :alt="item.item"
                    @click="selectItemStore(item)">
                </div>
                <!--<img class="items-market" src="img/item-spiderweb.png" alt="">-->
            </div>
        </div>

        <!-- Buttons Panel -->

        <game-buttons 
            @select-tool='selectTool' 
            @selected-view="updateView"
            :cash="$root.cash"
            ></game-buttons>
           
            
            <!-- Tools Panel (contenedor separado) 
            <tools-buttons @select-tool='selectTool'></tools-buttons>-->
           
        </div>
    `
});