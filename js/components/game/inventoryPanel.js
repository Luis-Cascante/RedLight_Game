app.component('inventory-panel',{
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        inventory:{
                type: Array,
                required: true
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
                <img src="img/inventory-panel.png" alt="">
                <div class="items-inventory-container">
                    <div v-for="item in inventory" :key="item.id">
                        <img 
                        :src="item.image"
                        class="items-inventory" 
                        :alt="item.item">
                    </div>
                    <!--<img class="items-inventory" src="img/item-spiderweb.png" alt="">-->
                </div>
            
        </div>

        <!-- Buttons Panel -->
             <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>

            <!-- Tools Panel (contenedor separado)
           <tools-buttons @select-tool='selectTool'></tools-buttons>-->
        </div>
    `
});