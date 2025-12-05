app.component('views-game', {
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        cash:{
            type: Number,
            required: true
        },
        activeTool: {
            type: String,
            default: null
        },
        selectedSeed: {
            type: Object,
            default: null
        },
        potionSelected: {
            type: Object,
            required: true
        },
        itemSelected: {
            type: Object,
            required: true
        },
        plotsFarm: {
            type: Array,
            required: true
        },
        inventory: {
            type: Array,
            required: true
        },
        itemsStore: {
            type: Array,
            required: true,
        },
        potionList: {
            type: Array,
            required: true,
        },
        ingredientsList: {
            type: Array,
            required: true,
        },
    },
    computed: {

    },
    methods: {
        updateView(selectedView) {

            if (selectedView === 'lobby') {
                console.log('Redireccionando a index.html');
                window.location.href = 'index.html';


                return;
            }

            this.$emit("selected-view", selectedView)
        },



        // metodo para seleccionar herramienta
        selectTool(tool) {
            this.$emit("tool-selected", tool);
            console.log("Tool selected:", tool);
        }
        ,

        removePlant(plotId) {
            this.$emit("remove-plant", plotId);
        },

        plantInPlot(plotId, typePlant) {
            this.$emit("plant-in-plot", plotId, typePlant);
        },
        fertilizePlot(plotId, typePlant) {
            this.$emit("fertilize-plot", plotId, typePlant);
        },
        waterPlot(plotId) {
            this.$emit("water-plot", plotId);
        },
        selectPotion(potion) {
            this.$emit("potion-selected", potion);
        },
        selectItemStore(item) {
            this.$emit("itemstore-selected", item);
        },
        selectInventoryItem(item) {
            this.$emit("inventory-item-selected", item);
        }

    },

    template: /*html*/ `

    <!-- lobby Panel -->
    <div v-if="selectedView === 'lobby'">
        <div class="lobby">
            <img src="./img/BackgroundPlay.png" alt="Background Play"> </img>
            <button v-on:click="updateView('login')" class="play-btn">PLAY</button>
        </div>
    </div>

    <!-- login Panel -->
    <div v-else-if="selectedView === 'login'">
    
        <login-panel @selected-view="updateView"></login-panel>
    </div>

    <!-- singUp Panel -->
    <div v-else-if="selectedView === 'signup'">

        <sign-up-panel :selected-view="selectedView" @selected-view="updateView"></sign-up-panel>
    </div>

    <!-- Main Menu Panel -->
    <div v-else-if="selectedView === 'main-menu'"> 

        <h1 class="main-title"> RedLight Farm </h1>

        <div class="buttons">
            <button v-on:click="updateView('game-panel')" class="buttons-style"><img src="./img/startGame-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('instructions')" class="buttons-style"><img src="./img/instructions-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('lore')" class="buttons-style"><img src="./img/lore-btn.png" alt="lore button"></button>
            <button v-on:click="$root.logout()" class="buttons-style"><img src="./img/signOut-btn.png" alt="signout button"></button>
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
        <farm-panel 
        :plots-farm="plotsFarm"
        :active-tool="activeTool"
        :selected-seed="selectedSeed"
        @tool-selected='selectTool' 
        @selected-view="updateView"
        @remove-plant="removePlant"
        @plant-in-plot="plantInPlot"
        @fertilize-plot="fertilizePlot"
        @water-plot="waterPlot"></farm-panel>
    </div>

    <!-- Cauldron Panel -->
    <div v-else-if="selectedView === 'cauldron-panel'">
        <cauldron-panel
        :potion-list="potionList"
        :potion-selected="potionSelected"
        :ingredients-list="ingredientsList" 
        @selected-view="updateView"
        @potion-selected="selectPotion"
        ></cauldron-panel>
    </div>

     <!-- Inventory Panel -->
    <div v-else-if="selectedView === 'inventory-panel'">
        <inventory-panel 
        :inventory="inventory" 
        @selected-view="updateView"
        @inventory-item-selected="selectInventoryItem"></inventory-panel>
    </div>

    <!-- Store Panel -->
    <div v-else-if="selectedView === 'store-panel'">
        <store-panel
        :items-store="itemsStore"
        :item-selected="itemSelected"
        @itemstore-selected="selectItemStore"
        @selected-view="updateView"></store-panel>
    </div>
    `
});