app.component('views-game',{
    props: {
        selectedView:{
            type: String,
            default: "main-menu",
        }
    },
    computed: {
        
    },
    methods: {
        updateView(selectedView){
            this.$emit('selected-view', selectedView)
        }
    },
    template: /*html*/ `
    <div v-if="selectedView === 'main-menu'"> 
        <div class="buttons">
            <h1 class="main-title"> RedLight Farm </h1>
            <button v-on:click="updateView('game-panel')" class="buttons-style"><img src="./img/startGame-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('instructions')" class="buttons-style"><img src="./img/instructions-btn.png" alt="instructions button"></button>
            <button v-on:click="updateView('lore')" class="buttons-style"><img src="./img/lore-btn.png" alt="lore button"></button>
            <button v-on:click="updateView('main-menu')" class="buttons-style"><img src="./img/signOut-btn.png" alt="signout button"></button>
        </div>
    </div>
    <div v-else-if="selectedView === 'instructions'">
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/instrucciones.png" alt="panel de instrucciones">
                <button v-on:click="updateView('main-menu')" class="buttons-style button-exit"><img src="./img/exit-btn.png" alt="exit-btn"></button>
            </div>
        </div>
    </div>
    <div v-else-if="selectedView === 'lore'">
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/Lore.png" alt="panel de instrucciones">
                <button v-on:click="updateView('main-menu')" class="buttons-style button-exit"><img src="./img/exit-btn.png" alt="exit-btn"></button>
            </div>
        </div>
    </div>
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
                    <button v-on:click="updateView('main-menu')"><img src="./img/scythe.png" alt="farm"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/potions.png" alt="potions"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/store.png" alt="store"></button>
                    <button v-on:click="updateView('main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
                </div>
            </div>
        </div>
    </div>
    `
});