app.component('cauldron-panel', {
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        }
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
            <img src="./img/cauldron-panel.png" alt="Game Layer">
            <div class="potions-container">
                <div class="potions-craft-container">
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion2.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion3.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion4.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion1.png" alt=""></div>
                    <div class="potion"><img src="img/item-potion2.png" alt=""></div>
                </div>
                <div class="craft-potion">
                    <div class="description-potion">
                        <h2>Potion name</h2>
                        <p class="description-potion-requirement">require:</p>
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
    `
});