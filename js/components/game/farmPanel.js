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
        selectedSeed: {
            type: Object,
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
        },
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
        handlePlotClick(plotId, typePlant) {
            if (this.activeTool === "plant") {
                // Si hay semilla seleccionada, usar esa; si no, usar el tipo por defecto
                const seedType = this.selectedSeed ? this.selectedSeed.item : typePlant;
                this.plantInPlot(plotId, seedType);
            } else if (this.activeTool === "fertilizer") {
                this.fertilizePlot(plotId, typePlant);
            } else if (this.activeTool === "bucket") {
                this.waterPlot(plotId);
            } else if (this.activeTool === "scythe") {
                this.removePlant(plotId);
            }
        }
    },
    template: /*html*/`
    <!-- Game Wrapper -->
        <div class="game-wrapper">

            <!-- Background Image -->
            <div class="game-area">
                <img src="./img/GameLayer.png" alt="Game Layer">
                <div class="farm-panel">
                    <div v-for="plot in plotsFarm" :key="plot.id" class="plot-container">
                        <img 
                        :src="plot.image" 
                        class="plants" 
                        :alt="'Planta en plot ' + plot.id"
                        @click="handlePlotClick(plot.id, 'spideyFlower')"
                        >
                        <div v-if="plot.dead" class="plot-badge dead">
                            Dead
                        </div>
                        <div v-else-if="plot.noPlant" class="plot-badge no-plant">
                            No Plant
                        </div>
                        <div v-else-if="plot.alreadyPlanted" class="plot-badge already-planted">
                            Already Planted
                        </div>
                        <div v-else-if="plot.alreadyFertilized" class="plot-badge already-fertilized">
                            Already Fertilized
                        </div>
                        <div v-else-if="plot.alreadyWatered" class="plot-badge already-watered">
                            Already Watered
                        </div>
                        <div v-else-if="plot.notReady" class="plot-badge not-ready">
                            Not Ready
                        </div>
                        <div v-else-if="plot.planted && plot.stage === 3" class="plot-badge ready">
                            Ready
                        </div>
                        <div v-else-if="plot.planted && !plot.water" class="plot-badge needs-water">
                            Needs Water
                        </div>
                        <div v-else-if="plot.watered" class="plot-badge watered">
                            Watered
                        </div>
                        <div v-else-if="plot.fertilized" class="plot-badge fertilized">
                            Fertilized
                        </div>
                    </div>
                </div>
        </div>

            <!-- Buttons Panel -->
            <game-buttons @select-tool='selectTool' @selected-view="updateView"></game-buttons>

            <!-- Tools Panel (separate container) -->
           <tools-buttons @select-tool='selectTool'></tools-buttons> 
        </div>
    `
});