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
    },
    template: /*html*/ `

    <!-- Main Menu Panel -->
    <div v-if="selectedView === 'main-menu'"> 
        <div class="buttons">
            <h1 class="main-title"> RedLight Farm </h1>
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
            </div>

            <!-- Buttons Panel -->
            <div class="buttons-container">
                <div class="buttons-panel">
                    <button v-on:click="selectTool('resume'); updateView('game-panel')"><img src="./img/ResumeBtn.png" alt="resume"></button>
                    <button v-on:click="updateView('cauldron-panel')"><img src="./img/potions.png" alt="potions"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button v-on:click="updateView('store-panel')"><img src="./img/store.png" alt="store"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
                </div>
            </div>

            <!-- Tools Panel (separate container) -->
            <div class="buttons-container tools-container">
                <div class="buttons-panel tools-panel">
                    <button v-on:click="selectTool('scythe')"><img src="./img/scythe.png" alt="farm"></button>
                    <button v-on:click="selectTool('plant')"><img src="./img/PlantBtn.png" alt="plant"></button>
                    <button v-on:click="selectTool('fertilizer')"><img src="./img/FertilizerBtn.png" alt="fertilizer"></button>
                    <button v-on:click="selectTool('bucket')"><img src="./img/BucketBtn.png" alt="bucket"></button>
                </div>
            </div>
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
            <div class="buttons-container">
                <div class="buttons-panel">
                    <button v-on:click="selectTool('resume'); updateView('game-panel')"><img src="./img/ResumeBtn.png" alt="resume"></button>
                    <button v-on:click="updateView('cauldron-panel')"><img src="./img/potions.png" alt="potions"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button v-on:click="updateView('store-panel')"><img src="./img/store.png" alt="store"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
                </div>
            </div>
            
            <!-- Tools Panel (contenedor separado) -->
            <div class="buttons-container tools-container">
                <div class="buttons-panel tools-panel">
                    <button v-on:click="selectTool('scythe')"><img src="./img/scythe.png" alt="farm"></button>
                    <button v-on:click="selectTool('plant')"><img src="./img/PlantBtn.png" alt="plant"></button>
                    <button v-on:click="selectTool('fertilizer')"><img src="./img/FertilizerBtn.png" alt="fertilizer"></button>
                    <button v-on:click="selectTool('bucket')"><img src="./img/BucketBtn.png" alt="bucket"></button>
                </div>
            </div>
        </div>
    </div>

    <!-- Cauldron Panel -->
    <div v-else-if="selectedView === 'cauldron-panel'">

        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="./img/cauldron-panel.png" alt="Game Layer">
            </div>

            <!-- Buttons Panel -->
            <div class="buttons-container">
                <div class="buttons-panel">
                    <button v-on:click="selectTool('resume'); updateView('game-panel')"><img src="./img/ResumeBtn.png" alt="resume"></button>
                    <button v-on:click="updateView('cauldron-panel')"><img src="./img/potions.png" alt="potions"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button v-on:click="updateView('store-panel')"><img src="./img/store.png" alt="store"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
                </div>
            </div>

            <!-- Tools Panel (contenedor separado) -->
            <div class="buttons-container tools-container">
                <div class="buttons-panel tools-panel">
                    <button v-on:click="selectTool('scythe')"><img src="./img/scythe.png" alt="farm"></button>
                    <button v-on:click="selectTool('plant')"><img src="./img/PlantBtn.png" alt="plant"></button>
                    <button v-on:click="selectTool('fertilizer')"><img src="./img/FertilizerBtn.png" alt="fertilizer"></button>
                    <button v-on:click="selectTool('bucket')"><img src="./img/BucketBtn.png" alt="bucket"></button>
                </div>
            </div>
        </div>
    </div>
    `
});