app.component('views-game', {
    props: {
        selectedView: {
            type: String,
            default: "main-menu",
        }
    },
    data() {
        return {
            activeTool: null
        }
    },
    computed: {

    },
    methods: {
        updateView(selectedView) {
            this.$emit("selected-view", selectedView)
        },


        // metodo para seleccionar herramienta
        selectTool(tool) {

            if (tool === "scythe") {

                if (this.activeTool === "scythe") {

                    // desactiva scythe
                    this.activeTool = null;
                    document.body.style.cursor = "auto";
                    this.$emit("tool-selected", null);
                } else {

                    // activar scythe
                    this.activeTool = "scythe";
                    document.body.style.cursor = "url(\"./img/ScytheOnly.png\") 16 16, auto";
                    this.$emit("tool-selected", "scythe");
                }
            }


            if (tool === "plant") {

                if (this.activeTool === "plant") {
                    // desactiva plant
                    this.activeTool = null;
                    document.body.style.cursor = "auto";
                    this.$emit("tool-selected", null);
                } else {
                    // activar plant
                    this.activeTool = "plant";
                    document.body.style.cursor = "url(\"./img/HandOnly.png\") 16 16, auto";
                    this.$emit("tool-selected", "plant");
                }

            }


            if (tool === "fertilizer") {

                if (this.activeTool === "fertilizer") {
                    // desactiva fertilizer
                    this.activeTool = null;
                    document.body.style.cursor = "auto";
                    this.$emit("tool-selected", null);
                } else {
                    // activar fertilizer
                    this.activeTool = "fertilizer";
                    document.body.style.cursor = "url(\"./img/FertilizerOnly.png\") 16 16, auto";
                    this.$emit("tool-selected", "fertilizer");
                }

            }

            if (tool === "bucket") {
                if (this.activeTool === "bucket") {
                    // desactiva bucket
                    this.activeTool = null;
                    document.body.style.cursor = "auto";
                    this.$emit("tool-selected", null);
                } else {
                    // activar bucket
                    this.activeTool = "bucket";
                    document.body.style.cursor = "url(\"./img/BucketOnly.png\") 16 16, auto";
                    this.$emit("tool-selected", "bucket");
                }
            }

            if (tool === "resume") {
                // desactiva cualquier herramienta em curso
                this.activeTool = null;
                document.body.style.cursor = "auto";
                this.$emit("tool-selected", null);
            }

            if (tool === "store-panel" || tool === "cauldron-panel" || tool === "inventory-panel" || tool === "main-menu") {
                // desactiva cualquier herramienta em curso
                this.activeTool = null;
                document.body.style.cursor = "auto";
                this.$emit("tool-selected", null);
            }
        }
    },
    template: /*html*/ `

    <!-- Main Menu Panel -->
    <div v-if="selectedView === 'main-menu'"> 

        <h1 class="main-title"> RedLight Farm </h1>

        <div class="buttons">
            <button v-on:click="updateView('game-panel')" class="buttons-style"><img src="./img/startGame-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('instructions')" class="buttons-style"><img src="./img/instructions-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('lore')" class="buttons-style"><img src="./img/lore-btn.png" alt="lore button"></button>
            <button v-on:click="updateView('main-menu')" class="buttons-style"><img src="./img/signOut-btn.png" alt="signout button"></button>
        </div>
    </div>

    <!-- Instructions Panel -->
    <div v-else-if="selectedView === 'instructions'">
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/instrucciones.png" alt="panel de instrucciones">
                <button v-on:click="updateView('main-menu')" class="buttons-style button-exit"><img src="./img/exit-btn.png" alt="exit-btn"></button>
            </div>
        </div>
    </div>

    <!-- Lore Panel -->
    <div v-else-if="selectedView === 'lore'">
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/Lore.png" alt="panel de instrucciones">
                <button v-on:click="updateView('main-menu')" class="buttons-style button-exit"><img src="./img/exit-btn.png" alt="exit-btn"></button>
            </div>
        </div>
    </div>
    
    <!-- Game Panel -->
    <div v-else-if="selectedView === 'game-panel'">

        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="./img/GameLayer.png" alt="Game Layer">
                <div class="farm-panel">
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                    <div ><img class="plants" src="./img/spideyFlower_stage3.png" alt=""></div>
                </div>
        </div>

            <!-- Buttons Panel -->
            <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>

            <!-- Tools Panel (separate container) -->
           <tools-buttons @select-tool='selectTool'></tools-buttons> 
        </div>
    </div>
    <!-- Store Panel -->
    <div v-else-if="selectedView === 'store-panel'">

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
                <img class="item-buy-img" src="img/itemPocion.png" alt="potion">
            </div>

            <!-- Items Market Container -->
            <div class="items-market-container">
                <img class="items-market" src="img/item-potion1.png" alt="">
                <img class="items-market" src="img/item-potion2.png" alt="">
                <img class="items-market" src="img/itemPocion.png" alt="">
                <img class="items-market" src="img/item-potion1.png" alt="">
                <img class="items-market" src="img/item-potion2.png" alt="">
                <img class="items-market" src="img/item-spiderweb.png" alt="">
                <img class="items-market" src="img/item-potion1.png" alt="">
                <img class="items-market" src="img/item-potion2.png" alt="">
                <img class="items-market" src="img/itemPocion.png" alt="">
                <img class="items-market" src="img/item-potion1.png" alt="">
                <img class="items-market" src="img/item-potion2.png" alt="">
                <img class="items-market" src="img/item-spiderweb.png" alt="">
            </div>
        </div>

        <!-- Buttons Panel -->

        <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>
           
            
            <!-- Tools Panel (contenedor separado) 
            <tools-buttons @select-tool='selectTool'></tools-buttons>-->
           
        </div>
    </div>

    <!-- Cauldron Panel -->
    <div v-else-if="selectedView === 'cauldron-panel'">

        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
            <img src="./img/cauldron-panel.png" alt="Game Layer">
            <div class="potions-container">
                <div class="potions-craft-container">
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                </div>
                <div class="craft-potion">
                    <div class="description-potion">
                        <h2>Potion name</h2>
                        <p class="description-potion-requirement">requiere:</p>
                        <div class="ingredientes-container">
                            <div class="ingrediente-item">
                                <img class="ingrediente-img" src="img/item-spiderweb.png" alt="">
                                <p class="ingrediente-qty">5</p>
                            </div>
                            <div class="ingrediente-item">
                                <img class="ingrediente-img" src="img/item-spiderweb.png" alt="">
                                <p class="ingrediente-qty">5</p>
                            </div>
                            <div class="ingrediente-item">
                                <img class="ingrediente-img" src="img/item-spiderweb.png" alt="">
                                <p class="ingrediente-qty">5</p>
                            </div>
                        </div>
                        <button class="button-cauldron">Produce</button>
                    </div>
                    <img class="potion-selected" src="img/itemPocion.png" alt="">
                </div>
            </div>
        </div>

            <!-- Buttons Panel -->
             <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>
        </div>
    </div>

    <!-- Inventory Panel -->
    <div v-else-if="selectedView === 'inventory-panel'">
        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="img/inventory-panel.png" alt="">
                <div class="items-inventory-container">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/itemPocion.png" alt="">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/item-spiderweb.png" alt="">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/itemPocion.png" alt="">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/item-spiderweb.png" alt="">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/itemPocion.png" alt="">
                    <img class="items-inventory" src="img/item-potion1.png" alt="">
                    <img class="items-inventory" src="img/item-potion2.png" alt="">
                    <img class="items-inventory" src="img/item-spiderweb.png" alt="">
                </div>
            
        </div>

        <!-- Buttons Panel -->
             <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>

            <!-- Tools Panel (contenedor separado)
           <tools-buttons @select-tool='selectTool'></tools-buttons>-->
        </div>
    </div>
    `
});