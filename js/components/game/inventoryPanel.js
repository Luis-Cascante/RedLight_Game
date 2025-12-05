app.component('inventory-panel', {
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        inventory: {
            type: Array,
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
        selectInventoryItem(item) {
            this.$emit("inventory-item-selected", item);
        },
        sellItem(item) {
            this.$emit("sell-product", item.id, item.quantity || 1);
        }
    },
    template: /*html*/`
    <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="img/inventory-panel.png" alt="">
                <div class="items-inventory-container">
                    <div v-for="item in inventory" :key="item.id" class="inventory-item-wrapper">
                        <img 
                        :src="item.image"
                        class="items-inventory" 
                        :alt="item.item"
                        @click="selectInventoryItem(item)">
                        <span class="item-quantity">{{ item.quantity }}</span>
                        <button class="sell-btn" @click="sellItem(item)">sell</button>
                    </div>
                    <!--<img class="items-inventory" src="img/item-spiderweb.png" alt="">-->
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
