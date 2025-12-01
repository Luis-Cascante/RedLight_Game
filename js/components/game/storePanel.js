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
    },
    methods: {
        updateView(selectedView) {
            this.$emit("selected-view", selectedView);
        },
    },
    template: /*html*/`
    <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
            <img src="img/store-panel.png" alt="store-background">
            <div class="buy-item-container">
                <div class="item-buy-description">
                    <h2>item name</h2>
                    <p class="item-description">item description</p>
                    <div class="market-action">
                        <button class="button-market">buy item</button>
                        <img class="coin-img" src="img/coin.png" alt="money">
                        <p class="price">100</p>
                    </div>
                </div>
                <img class="item-buy-img" src="img/item-potion4.png" alt="potion">
            </div>

            <!-- Items Market Container -->
            <div class="items-market-container">
                <div v-for="item in itemsStore" :key="item.id">
                    <img 
                    :src="item.image"
                    class="items-market" 
                    :alt="item.item">
                </div>
                <!--<img class="items-market" src="img/item-spiderweb.png" alt="">-->
            </div>
        </div>

        <!-- Buttons Panel -->

        <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>
           
            
            <!-- Tools Panel (contenedor separado) 
            <tools-buttons @select-tool='selectTool'></tools-buttons>-->
           
        </div>
    `
});