app.components('views',{
    props: {
        selectedView:{
            type: String,
            default: null,
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
    <div v-if="selectedView"> 
        <div class="buttons">
            <h1 class="main-title"> RedLight Farm </h1>
            <button class="buttons-style"> <a href="start.html"> <img src="./img/startGame-btn.png" alt="instructions button"></a> </button>
            <button class="buttons-style"> <a href="instructions.html"> <img src="./img/instructions-btn.png" alt="instructions button"></a> </button>
            <button class="buttons-style"> <a href="lore.html"> <img src="./img/lore-btn.png" alt="lore button"></a> </button>
            <button class="buttons-style"> <a href="signout.html"> <img src="./img/signOut-btn.png" alt="signout button"></a> </button>
        </div>
    </div>
    <div v-ifelse="">
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/instrucciones.png" alt="panel de instrucciones">
                <button class="buttons-style button-exit"><a href="index.html"><img src="./img/exit-btn.png" alt="exit-btn"></a></button>
            </div>
        </div>
    </div>
    <div>
        <div class="game-wrapper">
            <div class="game-area">
                <img src="./img/Lore.png" alt="panel de instrucciones">
                <button class="buttons-style button-exit"><a href="index.html"><img src="./img/exit-btn.png" alt="exit-btn"></a></button>
            </div>
        </div>
    </div>
    <div>
        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="./img/GameLayer.png" alt="Game Layer">
            </div>

            <!-- Buttons Panel -->
            <div class="buttons-container">
                <div class="buttons-panel">
                    <button> <a href="#"></a><img src="./img/scythe.png" alt="farm"></button>
                    <button> <a href="#"></a><img src="./img/potions.png" alt="potions"></button>
                    <button onclick="toggleInventario()"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button> <a href="#"></a><img src="./img/store.png" alt="store"></button>
                    <button> <a href="index.html"><img src="./img/exit-btn.png" alt="exit"></a></button>
                </div>
            </div>
        </div>

        <div class="panel-inventario" id="inventario"> 
            <img src="./img/Cartel_cauldron.png" alt="">
        </div>
    </div>
    `
});