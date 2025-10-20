const app = Vue.createApp({
    data() {
        return {
            
            inventory: [
                { name: 'seed1', quantity: 0, img: './img/seed1.png' },
                { name: 'seed2', quantity: 0, img: './img/seed2.png' },
                { name: 'seed3', quantity: 0, img: './img/seed3.png' }
            ],

            cash: 0,

            plantList: [
                { id: 1, type: 'seed1', growthStage: 0, maxGrowthStage: 3, imgStages: ['./img/plant1_stage0.png', './img/plant1_stage1.png', './img/plant1_stage2.png', './img/plant1_stage3.png'] },
                { id: 2, type: 'seed2', growthStage: 0, maxGrowthStage: 4, imgStages: ['./img/plant2_stage0.png', './img/plant2_stage1.png', './img/plant2_stage2.png', './img/plant2_stage3.png'] },
                { id: 3, type: 'seed3', growthStage: 0, maxGrowthStage: 5, imgStages: ['./img/plant3_stage0.png', './img/plant3_stage1.png', './img/plant3_stage2.png', './img/plant3_stage3.png'] },
            ],

            cycleDayNight: 'night',

            tasks: [
                { description: 'Plant 5 seed1', completed: false },
                { description: 'Harvest 3 seed2', completed: false },
                { description: 'Earn 100 cash', completed: false }
            ]

            
            
        };
    }
});



