app.component('farm-panel', {
    props: {
        selectedView: {
            type: String,
            default: "lobby",
        },
        activeTool: {
            type: String,
            default: null
        },
        plotsFarm: {
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
        }
    },
    template: /*html*/`
    <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="./img/GameLayer.png" alt="Game Layer">
                <div class="farm-panel">
                    <div v-for="plot in plotsFarm" :key="plot.id">
                        <img 
                        :src="plot.image" 
                        v-if="plot.planted"
                        class="plants" 
                        :alt="'Planta en plot ' + plot.id"
                        >
                    </div>
                    <!--<div ><img class="plants" src="./img/spideyFlower_stage3.png" alt="" @click="tryRemovePlant"></div>-->
                </div>
        </div>

            <!-- Buttons Panel -->
            <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>

            <!-- Tools Panel (separate container) -->
           <tools-buttons @select-tool='selectTool'></tools-buttons> 
        </div>
    `
});