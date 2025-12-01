const app = Vue.createApp({
    data() {
        return {
            selectedView: "lobby",
            activeTool: null,

            plotsFarm:[
                { id: 1, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 2, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 3, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 4, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 5, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 6, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 7, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 8, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 9, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 10, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 11, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
                { id: 12, planted: true, stage: 3, image: './img/spideyFlower_stage3.png'},
            ],

            inventory: [
                { id: 1, item: 'spiderweb', quantity: 10, image: './img/item-spiderweb.png' },
                { id: 2, item: 'potion1', quantity: 10, image: './img/item-potion1.png' },
                { id: 3, item: 'potion2', quantity: 10, image: './img/item-potion2.png' },
                { id: 4, item: 'potion3', quantity: 10, image: './img/item-potion3.png' },
                { id: 5, item: 'potion4', quantity: 10, image: './img/item-potion4.png' },
                { id: 6, item: 'spiderweb', quantity: 10, image: './img/item-spiderweb.png' },
                { id: 7, item: 'potion1', quantity: 10, image: './img/item-potion1.png' },
                { id: 8, item: 'potion2', quantity: 10, image: './img/item-potion2.png' },
                { id: 9, item: 'potion3', quantity: 10, image: './img/item-potion3.png' },
                { id: 10, item: 'potion4', quantity: 10, image: './img/item-potion4.png' },
                { id: 11, item: 'spiderweb', quantity: 10, image: './img/item-spiderweb.png' },
                { id: 12, item: 'potion1', quantity: 10, image: './img/item-potion1.png' },
                { id: 13, item: 'potion2', quantity: 10, image: './img/item-potion2.png' },
                { id: 14, item: 'potion3', quantity: 10, image: './img/item-potion3.png' },
                { id: 15, item: 'potion4', quantity: 10, image: './img/item-potion4.png' },
                { id: 16, item: 'potion1', quantity: 10, image: './img/item-potion1.png' },
                { id: 17, item: 'potion2', quantity: 10, image: './img/item-potion2.png' },
                { id: 18, item: 'potion3', quantity: 10, image: './img/item-potion3.png' },
            ],

            itemsStore: [
                { id: 1, item: 'spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 2, item: 'potion1', price: 50, image: './img/item-potion1.png' },
                { id: 3, item: 'potion2', price: 50, image: './img/item-potion2.png' },
                { id: 4, item: 'potion3', price: 50, image: './img/item-potion3.png' },
                { id: 5, item: 'potion4', price: 50, image: './img/item-potion4.png' },
                { id: 6, item: 'spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 7, item: 'potion1', price: 50, image: './img/item-potion1.png' },
                { id: 8, item: 'potion2', price: 50, image: './img/item-potion2.png' },
                { id: 9, item: 'potion3', price: 50, image: './img/item-potion3.png' },
                { id: 10, item: 'potion4', price: 50, image: './img/item-potion4.png' },
                { id: 11, item: 'spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 12, item: 'potion4', price: 50, image: './img/item-potion4.png' },
            ],

            cash: 0,

            plantList: [
                { id: 1, type: 'seed1', growthStage: 0, maxGrowthStage: 2, imgStages: ['./img/spideyFlower_stage1.png', './img/spideyFlower_stage2.png', './img/spideyFlower_stage3.png'] },
                { id: 2, type: 'seed2', growthStage: 0, maxGrowthStage: 5, imgStages: ['./img/plant2_stage0.png', './img/plant2_stage1.png', './img/plant2_stage2.png', './img/plant2_stage3.png', './img/plant2_stage4.png', './img/plant2_stage5.png'] },
                { id: 3, type: 'seed3', growthStage: 0, maxGrowthStage: 4, imgStages: ['./img/plant3_stage0.png', './img/plant3_stage1.png', './img/plant3_stage2.png', './img/plant3_stage3.png'] },
            ],

            cycleDayNight: 'night',

            tasks: [
                { description: 'Plant 5 seed1', completed: false },
                { description: 'Harvest 3 seed2', completed: false },
                { description: 'Earn 100 cash', completed: false }
            ]



        };
    },
    methods: {
        updateView(selectedView) {
            this.selectedView = selectedView;
            return this.selectedView;
        },

        selectTool(tool) {
            console.log("Tool selected:", tool);
            switch (tool) {
                case "scythe":
                    if (this.activeTool === "scythe") {
                        // desactiva scythe
                        this.activeTool = null;
                        document.body.style.cursor = "auto";
                    } else {
                        // activar scythe
                        this.activeTool = "scythe";
                        document.body.style.cursor = "url(\"./img/ScytheOnly.png\") 16 16, auto";
                    }
                    break;
                case "plant":
                    if (this.activeTool === "plant") {
                        // desactiva plant
                        this.activeTool = null;
                        document.body.style.cursor = "auto";
                    } else {
                        // activar plant
                        this.activeTool = "plant";
                        document.body.style.cursor = "url(\"./img/HandOnly.png\") 16 16, auto";
                    }
                    break;
                case "fertilizer":
                    if (this.activeTool === "fertilizer") {
                        // desactiva fertilizer
                        this.activeTool = null;
                        document.body.style.cursor = "auto";
                    } else {
                        // activar fertilizer
                        this.activeTool = "fertilizer";
                        document.body.style.cursor = "url(\"./img/FertilizerOnly.png\") 16 16, auto";
                    }
                    break;
                case "bucket":
                    if (this.activeTool === "bucket") {
                        // desactiva bucket
                        this.activeTool = null;
                        document.body.style.cursor = "auto";
                    } else {
                        // activar bucket
                        this.activeTool = "bucket";
                        document.body.style.cursor = "url(\"./img/BucketOnly.png\") 16 16, auto";
                    }
                    break;
                default:
                    // desactiva cualquier herramienta em curso
                    this.activeTool = null;
                    document.body.style.cursor = "auto";
                    break;
        }
        },

        removePlant(){
            
        },

    }
});