app.component('cauldron-panel', {
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        potionSelected: {
            type: Object,
            required: true
        },
        potionList:{
            type: Array,
            required: true,
        },
        ingredientsList:{
            type: Array,
            required: true,
        },
    },
    methods: {
        updateView(selectedView) {
            this.$emit("selected-view", selectedView);
        },
        selectPotion(potion){
            this.$emit("potion-selected", potion);
        }

    },
    template: /*html*/`
        <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
            <img src="./img/cauldron-panel.png" alt="Game Layer">
            <div class="potions-container">
                <div class="potions-craft-container">
                    <div v-for="potion in potionList" :key="potion.id">
                        <div 
                        class="potion"
                        @click="selectPotion(potion)">
                            <img :src="potion.image" :alt="potion.name">
                        </div>
                    </div>
                    <!--<div class="potion"><img src="img/item-potion2.png" alt=""></div>-->
                </div>
                <div class="craft-potion">
                    <div class="description-potion">
                        <h2>{{ potionSelected.name }}</h2>
                        <p class="description-potion-requirement">require:</p>
                        <div class="ingredientes-container">
                            <div v-for="ingredient in potionSelected.ingredients" :key="ingredient.id">
                                <div class="ingrediente-item">
                                    <img class="ingrediente-img" :src="ingredient.image" :alt="ingredient.name">
                                    <p class="ingrediente-qty">{{ ingredient.quantity }}</p>
                                </div>
                            </div>
                            <!--<div class="ingrediente-item">
                                <img class="ingrediente-img" src="img/item-spiderweb.png" alt="">
                                <p class="ingrediente-qty">5</p>
                            </div>-->
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