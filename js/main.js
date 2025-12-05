const API_URL = "http://localhost:8000/api";

const app = Vue.createApp({
    data() {
        return {
            selectedView: "lobby",
            activeTool: null,

            server: API_URL,

            currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

            plotsFarm: [
                { id: 1, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 2, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 3, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 4, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 5, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 6, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 7, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 8, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 9, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 10, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 11, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
                { id: 12, planted: false, stage: 0, fertilized: false, water: false, watered: false, alreadyPlanted: false, notReady: false, alreadyFertilized: false, alreadyWatered: false, noPlant: false, wasFertilized: false, image: './img/plot_empty.png', plantType: null, growthTimer: null, lastWatered: null, lastWateredStage: null, lastFertilizedStage: null, dead: false },
            ],

            inventory: [
                { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                { id: 2, item: 'potion1', quantity: 1, image: './img/item-potion1.png' },
                { id: 3, item: 'potion2', quantity: 1, image: './img/item-potion2.png' },
                { id: 4, item: 'potion3', quantity: 1, image: './img/item-potion3.png' },
                { id: 5, item: 'potion4', quantity: 1, image: './img/item-potion4.png' },
                { id: 6, item: 'potion5', quantity: 1, image: './img/item-potion5.png' },
                { id: 7, item: 'potion6', quantity: 1, image: './img/item-potion6.png' },
                { id: 8, item: 'item1', quantity: 1, image: './img/item1.png' },
                { id: 9, item: 'item2', quantity: 1, image: './img/item2.png' },
                { id: 10, item: 'item3', quantity: 1, image: './img/item3.png' },
                { id: 11, item: 'item4', quantity: 1, image: './img/item4.png' },
                { id: 12, item: 'spideyFlower', quantity: 5, image: './img/seed2.png', type: 'seed' },
                { id: 13, item: 'squidPumpkin', quantity: 5, image: './img/seed1.png', type: 'seed' },
                { id: 14, item: 'plantaPiranha', quantity: 5, image: './img/seed3.png', type: 'seed' },
                { id: 15, item: 'bucket', quantity: 50, image: './img/BucketBtn.png', type: 'tool' },
                { id: 16, item: 'fertilizer', quantity: 50, image: './img/FertilizerBtn.png', type: 'tool' },
            ],

            itemsStore: [
                { id: 1, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 2, item: 'Mysterious Potion', description: 'A magical potion', price: 1000, image: './img/item-potion1.png' },
                { id: 3, item: 'Healing Potion', description: 'healing properties', price: 250, image: './img/item-potion2.png' },
                { id: 4, item: 'Resistence Potion', description: 'resistance properties', price: 80, image: './img/item-potion3.png' },
                { id: 5, item: 'Speed Potion', description: 'speed properties', price: 125, image: './img/item-potion4.png' },
                { id: 6, item: 'Growth Potion', description: 'growth properties', price: 150, image: './img/item-potion5.png' },
                { id: 7, item: 'Water Potion', description: 'water properties', price: 25, image: './img/item-potion6.png' },
                { id: 8, item: 'item 1', description: 'A mysterious item', price: 75, image: './img/item1.png' },
                { id: 9, item: 'item 2', description: 'A mysterious item', price: 75, image: './img/item2.png' },
                { id: 10, item: 'item 3', description: 'A mysterious item', price: 75, image: './img/item3.png' },
                { id: 11, item: 'item 4', description: 'A mysterious item', price: 75, image: './img/item4.png' },
                { id: 12, item: 'spideyFlower', description: 'A flower seed', price: 100, image: './img/seed1.png' },
                { id: 13, item: 'squidPumpkin', description: 'A pumpkin seed', price: 100, image: './img/seed2.png' },
                { id: 14, item: 'plantaPiranha', description: 'A piranha plant seed', price: 150, image: './img/seed3.png' },
            ],

            itemSelected: { id: 1, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },

            cash: 110,

            plantList: [
                { id: 1, type: 'spideyFlower', imgStages: ['./img/spideyFlower_stage1.png', './img/spideyFlower_stage2.png', './img/spideyFlower_stage3.png'] },
                { id: 2, type: 'squidPumpkin', imgStages: ['./img/squidPumpkin_stage1.png', './img/squidPumpkin_stage2.png', './img/squidPumpkin_stage3.png'] },
                { id: 3, type: 'plantaPiranha', imgStages: ['./img/plantaPiranha.png', './img/plantaPiranha2.png', './img/plantaPiranha3.png'] },
            ],

            ingredientsList: [
                { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                { id: 2, item: 'item1', quantity: 1, image: './img/item1.png' },
                { id: 3, item: 'item2', quantity: 1, image: './img/item2.png' },
                { id: 4, item: 'item3', quantity: 1, image: './img/item3.png' },
                { id: 5, item: 'item4', quantity: 1, image: './img/item4.png' }
            ],

            potionList: [
                {
                    id: 1, name: 'Mysterious Potion', price: 1000, ingredients: [
                        { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                        { id: 2, item: 'item1', quantity: 3, image: './img/item1.png' },
                        { id: 3, item: 'item2', quantity: 2, image: './img/item2.png' }
                    ], image: './img/item-potion1.png'
                },
                {
                    id: 2, name: 'Healing Potion', price: 250, ingredients: [
                        { id: 1, item: 'item1', quantity: 4, image: './img/item1.png' },
                        { id: 2, item: 'item3', quantity: 2, image: './img/item3.png' }
                    ], image: './img/item-potion2.png'
                },
                {
                    id: 3, name: 'Resistance Potion', price: 80, ingredients: [
                        { id: 1, item: 'spiderweb', quantity: 3, image: './img/item-spiderweb.png' },
                        { id: 2, item: 'item2', quantity: 3, image: './img/item2.png' }
                    ], image: './img/item-potion3.png'
                },
                {
                    id: 4, name: 'Speed Potion', price: 125, ingredients: [
                        { id: 1, item: 'item3', quantity: 3, image: './img/item3.png' },
                        { id: 2, item: 'item4', quantity: 2, image: './img/item4.png' }
                    ], image: './img/item-potion4.png'
                },
                {
                    id: 5, name: 'Growth Potion', price: 150, ingredients: [
                        { id: 1, item: 'item2', quantity: 4, image: './img/item2.png' },
                        { id: 2, item: 'item4', quantity: 3, image: './img/item4.png' }
                    ], image: './img/item-potion5.png'
                },
                {
                    id: 6, name: 'Water Potion', price: 25, ingredients: [
                        { id: 1, item: 'item1', quantity: 2, image: './img/item1.png' },
                        { id: 2, item: 'spiderweb', quantity: 2, image: './img/item-spiderweb.png' }
                    ], image: './img/item-potion6.png'
                }
            ],

            potionSelected: {
                id: 1, name: 'Mysterious Potion', price: 1000, ingredients: [
                    { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                    { id: 2, item: 'item1', quantity: 3, image: './img/item1.png' },
                    { id: 3, item: 'item2', quantity: 2, image: './img/item2.png' }
                ], image: './img/item-potion1.png'
            },

            tasks: [
                { description: 'Plant 5 seed1', completed: false },
                { description: 'Harvest 3 seed2', completed: false },
                { description: 'Earn 100 cash', completed: false }
            ],

            // ============ GROWTH TIMER CONFIG ============

            growthTimerLayout: {
                baseGrowthTime: 60000,          // 60 segundos para crecer un stage
                waterCheckInterval: 15000,      // Verificar agua cada 15 segundos
                maxTimeWithoutWater: 90000,     // Planta muere si no regada en 90 segundos
                fertilizingReduction: 0.75       // Fertilizante reduce tiempo en 25%
            },

            plotGrowthTimers: {},               // Almacena referencias de timers activos

            selectedSeed: null,           // Semilla actualmente seleccionada

        };
    },

    mounted() {
        if (this.currentUser) {
            this.selectedView = 'main-menu';
            // Las llamadas al API están comentadas por ahora
            // Ya que el servidor no está respondiendo correctamente
            // Los datos locales en data() se usan por defecto
            // this.loadWalletBalance();
            // this.loadInventory();
            // this.loadStoreItems();
        }
    },

    methods: {

        // ============ LIFECYCLE ============

        async loadStoreItems() {
            try {
                const token = localStorage.getItem('user_token');
                const response = await fetch(this.server + '/store/items', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    this.itemsStore = data.items || this.itemsStore;
                }
            } catch (error) {
                console.log("Error loading store items:", error.message);
            }
        },

        async loadInventory() {
            try {
                const token = localStorage.getItem('user_token');
                const response = await fetch(this.server + '/inventory', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    this.inventory = data.inventory || this.inventory;
                }
            } catch (error) {
                console.log("Error loading inventory:", error.message);
            }
        },

        async loadWalletBalance() {
            try {
                const token = localStorage.getItem('user_token');
                const response = await fetch(this.server + '/wallet/balance', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    this.cash = data.balance || 0;
                }
            } catch (error) {
                console.log("Error loading wallet balance:", error.message);
            }
        },

        // ============ VIEW MANAGEMENT ============

        updateView(selectedView) {
            this.selectedView = selectedView;

            // Cargar datos cuando se accede a ciertas vistas
            // Las llamadas al API están comentadas por ahora
            // ya que el servidor no está respondiendo
            // if (selectedView === 'store-panel') {
            //     this.loadStoreItems();
            // } else if (selectedView === 'inventory-panel') {
            //     this.loadInventory();
            // }

            return this.selectedView;
        },

        // ============ AUTHENTICATION ============

        async registerUser(name, email, password) {
            try {
                const response = await fetch(this.server + `/signup`, {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (!response.ok) {
                    if (response.status === 422) {

                        throw new Error(data.message || 'Validation error registering user');

                    }
                    throw new Error(data.message || 'Server error registering user');

                }
                return { success: true, user: data.user };
            } catch (error) {
                console.log("Error registering user:", error.message);
            }

        },

        async validateUser(email, password) {

            try {

                const response = await fetch(this.server + '/login', {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({ email, password })

                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Incorrect credentials');
                }


                localStorage.setItem('user_token', data.access_token);

                this.currentUser = data.user;

                localStorage.setItem('currentUser', JSON.stringify(data.user));

                return data.user;

            } catch (error) {
                console.log("Error validating user:", error.message);
            }
        },

        logout() {

            this.currentUser = null;
            localStorage.removeItem('currentUser');
            this.selectedView = 'lobby';

        },

        // ============ SELECTION ============

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

        // ============ ITEM SELECTION ============
        selectSeed(plant) {
            console.log("Seed selected:", plant);
            this.selectTool("plant");
        },

        // ============ POTION SELECTION ============
        selectPotion(potion) {
            this.potionSelected = potion;
        },

        // ============ STORE ACTIONS ============
        selectItemStore(item) {
            this.itemSelected = item;
        },

        // ============ INVENTORY ACTIONS ============
        selectInventoryItem(item) {
            console.log("Inventory item selected:", item);
            // Si es una semilla, activa el tool "plant", guarda la semilla y va al juego
            if (item.type === 'seed') {
                this.selectedSeed = item;
                this.activeTool = 'plant';
                document.body.style.cursor = "url(\"./img/HandOnly.png\") 16 16, auto";
                this.selectedView = 'game-panel';
            }
        },

        // ============ PLOT ACTIONS ============

        removePlant(plotId) {
            if (this.activeTool !== "scythe") return;

            const plot = this.plotsFarm.find(p => p.id === plotId);
            if (plot) {
                // Validación: no se puede cosechar si no hay planta
                if (!plot.planted) {
                    plot.noPlant = true;
                    setTimeout(() => {
                        plot.noPlant = false;
                    }, 2000);
                    return { error: "There is no plant in this plot" };
                }

                // Validación: no se puede cosechar si no está en stage 3
                if (plot.stage < 3) {
                    console.log("Plant is not ready to harvest");
                    plot.notReady = true;
                    setTimeout(() => {
                        plot.notReady = false;
                    }, 2000);
                    return { error: "The plant is not ready to harvest" };
                }

                // Limpia timers existentes
                if (this.plotGrowthTimers[plotId]) {
                    clearInterval(this.plotGrowthTimers[plotId].growthTimer);
                    clearInterval(this.plotGrowthTimers[plotId].waterCheckTimer);
                    delete this.plotGrowthTimers[plotId];
                }

                // Reinicia el plot
                plot.planted = false;
                plot.image = './img/plot_empty.png';
                plot.stage = 0;
                plot.plantType = null;
                plot.growthTimer = null;
                plot.lastWatered = null;
                plot.lastWateredStage = null;
                plot.lastFertilizedStage = null;
                plot.water = false;
                plot.watered = false;
                plot.fertilized = false;
                plot.dead = false;

                console.log("Plant removed from plot:", plotId);
            }
        },

        // =========== PLANT GROWTH CYCLE ============

        async interactWithPlot(plotId, typePlant) {
            if (this.activeTool !== "plant") return;

            console.log("Interacting with plot:", plotId);

            const plot = this.plotsFarm.find(p => p.id === plotId);
            if (plot) {
                // Validación: si ya está plantado, no puede plantar otra
                if (plot.planted) {
                    console.log("Plot already has a plant");
                    plot.alreadyPlanted = true;
                    setTimeout(() => {
                        plot.alreadyPlanted = false;
                    }, 2000);
                    return { error: "This plot already has a plant" };
                }

                plot.planted = true;
                plot.plantType = typePlant;
                plot.stage = 1;
                plot.water = true;
                plot.lastWatered = Date.now();
                plot.dead = false;
                plot.noPlant = false;
                plot.wasFertilized = false;
                plot.alreadyFertilized = false;
                plot.alreadyWatered = false;
                plot.watered = false;
                plot.fertilized = false;
                plot.lastWateredStage = null;
                plot.lastFertilizedStage = null;

                const plant = this.plantList.find(plant => plant.type === typePlant).imgStages[0];
                plot.image = plant;

                this.startGrowthCycle(plotId, typePlant);
                return { success: true };
            }
            return { error: "Plot not found" };
        },

        // Alias para compatibilidad con componentes
        plantInPlot(plotId, typePlant) {
            return this.interactWithPlot(plotId, typePlant);
        },

        // ============ TOOL ACTIONS ============
        waterPlot(plotId) {
            if (this.activeTool !== "bucket") return;

            const plot = this.plotsFarm.find(p => p.id === plotId);
            if (!plot) {
                return { error: "Plot not found" };
            }

            // Validación 1: solo riega si hay planta
            if (!plot.planted) {
                plot.noPlant = true;
                setTimeout(() => {
                    plot.noPlant = false;
                }, 2000);
                return { error: "There is no plant in this plot" };
            }

            // Validación 2: evitar spam - solo una vez por stage
            if (plot.lastWateredStage === plot.stage) {
                plot.alreadyWatered = true;
                setTimeout(() => {
                    plot.alreadyWatered = false;
                }, 2000);
                return { error: "You already watered this plant in this stage" };
            }

            // Validación 3: no regar si la planta está muerta
            if (plot.dead) {
                return { error: "The plant is dead" };
            }

            // Validación 4: verificar que tenga bucket en inventario
            const bucketItem = this.inventory.find(item => item.item === 'bucket');
            if (!bucketItem || bucketItem.quantity <= 0) {
                return { error: "You don't have buckets available" };
            }

            // Consumir bucket del inventario
            bucketItem.quantity -= 1;

            // Aplicar riego
            plot.water = true;
            plot.watered = true;
            plot.lastWatered = Date.now();
            plot.lastWateredStage = plot.stage;

            // Mostrar badge "Watered" por 2 segundos
            setTimeout(() => {
                plot.watered = false;
            }, 2000);

            return { success: true };
        },

        // ============ FERTILIZER ACTION ============
        fertilizePlot(plotId, typePlant) {
            if (this.activeTool !== "fertilizer") return;

            const plot = this.plotsFarm.find(p => p.id === plotId);
            if (!plot) {
                return { error: "Plot not found" };
            }

            // Validación 1: solo fertiliza si hay planta
            if (!plot.planted) {
                plot.noPlant = true;
                setTimeout(() => {
                    plot.noPlant = false;
                }, 2000);
                return { error: "There is no plant in this plot" };
            }

            // Validación 2: no fertiliza si la planta está muerta
            if (plot.dead) {
                return { error: "The plant is dead" };
            }

            // Validación 3: no fertiliza si ya está en etapa máxima
            if (plot.stage >= 3) {
                return { error: "The plant is already at its maximum stage" };
            }

            // Validación 4: solo una vez por planta (no por stage)
            if (plot.wasFertilized) {
                plot.alreadyFertilized = true;
                setTimeout(() => {
                    plot.alreadyFertilized = false;
                }, 2000);
                return { error: "You already fertilized this plant" };
            }

            // Validación 5: verificar que tenga fertilizer en inventario
            const fertilizerItem = this.inventory.find(item => item.item === 'fertilizer');
            if (!fertilizerItem || fertilizerItem.quantity <= 0) {
                return { error: "You don't have fertilizers available" };
            }

            // Consumir fertilizer del inventario
            fertilizerItem.quantity -= 1;

            // Marcar que ya fue fertilizada
            plot.wasFertilized = true;

            // Acelera el crecimiento reduciendo tiempo
            if (this.plotGrowthTimers[plotId]) {
                this.plotGrowthTimers[plotId].accelerated = true;
                plot.fertilized = true;
                plot.lastFertilizedStage = plot.stage;

                // Mostrar badge "Fertilized" por 2 segundos
                setTimeout(() => {
                    plot.fertilized = false;
                }, 2000);

                return { success: true };
            }
            return { error: "Timer is not initialized" };
        },

        // ============ GROWTH CYCLE MANAGEMENT ============
        startGrowthCycle(plotId, typePlant) {
            const plot = this.plotsFarm.find(p => p.id === plotId);
            if (!plot) return;

            // Limpia timers previos si existen
            if (this.plotGrowthTimers[plotId]) {
                clearInterval(this.plotGrowthTimers[plotId].growthTimer);
                clearInterval(this.plotGrowthTimers[plotId].waterCheckTimer);
            }

            const baseTime = this.growthTimerLayout.baseGrowthTime;
            let accelerated = false;
            const actualGrowthTime = accelerated && baseTime * this.growthTimerLayout.fertilizingReduction || baseTime;

            // Timer para crecimiento de stages
            const growthTimer = setInterval(() => {
                if (!plot.planted) {
                    clearInterval(growthTimer);
                    return;
                }

                // si está fertilizado, usa tiempo reducido
                if (plot.stage < 3) {
                    plot.stage += 1;
                    const plant = this.plantList.find(plant => plant.type === typePlant).imgStages[plot.stage - 1];
                    plot.image = plant;
                    plot.fertilized = false;
                }

                // si llega a stage 3, detiene el timer
                if (plot.stage >= 3) {
                    clearInterval(growthTimer);
                }
            }, actualGrowthTime);

            // Timer para verificar si la planta está sin agua
            const waterCheckTimer = setInterval(() => {
                if (!plot.planted) {
                    clearInterval(waterCheckTimer);
                    return;
                }

                // Calcula tiempo desde última vez regada
                const timeSinceWatered = Date.now() - plot.lastWatered;
                // Obtiene tiempo máximo sin agua
                const maxTimeWithoutWater = this.growthTimerLayout.maxTimeWithoutWater;

                // Si excede el tiempo sin agua, la planta muere
                if (timeSinceWatered > maxTimeWithoutWater) {
                    plot.dead = true;
                    plot.planted = false;
                    clearInterval(waterCheckTimer);
                    // elimina imagen si la planta muere
                    plot.image = './img/plot_empty.png';
                }
            }, this.growthTimerLayout.waterCheckInterval);

            // Guarda referencias de timers
            this.plotGrowthTimers[plotId] = {
                growthTimer: growthTimer,
                waterCheckTimer: waterCheckTimer,
                accelerated: accelerated
            };
        },

        // ============ SHOP / ECONOMY ============
        async purchaseItem(itemId) {
            try {
                // Validación: verificar que el usuario existe
                if (!this.currentUser) {
                    console.log("User not logged in");
                    return { error: "You must log in to purchase" };
                }

                // Validación: verificar que el ID es válido
                if (!itemId || itemId <= 0) {
                    console.log("Invalid item ID");
                    return { error: "Invalid item ID" };
                }

                // Validación: verificar que el item existe en la tienda
                const item = this.itemsStore.find(i => i.id === itemId);
                if (!item) {
                    console.log("Item not found in store");
                    return { error: "This item does not exist in the store" };
                }

                // Validación: verificar si tiene dinero suficiente (validación local)
                if (this.cash < item.price) {
                    console.log("Insufficient funds. Need:", item.price, "Have:", this.cash);
                    return { error: `Insufficient funds. You need ${item.price}, you have ${this.cash}` };
                }

                const token = localStorage.getItem('user_token');
                if (!token) {
                    console.log("No token found");
                    return { error: "Authentication token not found" };
                }

                const response = await fetch(this.server + '/shop/buy', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ item_id: itemId })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Error purchasing item');
                }

                console.log("Item purchased successfully");
                this.cash = data.balance || this.cash;
                this.loadInventory();
                return { success: true, message: "Successful purchase!" };
            } catch (error) {
                console.log("Error purchasing item:", error.message);
            }
        },


        async sellProduct(itemId, quantity) {
            try {
                // Validación: verificar que el usuario existe
                if (!this.currentUser) {
                    console.log("User not logged in");
                    return { error: "You must log in to sell" };
                }

                // Validación: verificar que ID y cantidad son válidos
                if (!itemId || itemId <= 0) {
                    console.log("Invalid item ID");
                    return { error: "Invalid item ID" };
                }

                // Validación: verificar que la cantidad es válida
                if (!quantity || quantity <= 0) {
                    console.log("Invalid quantity");
                    return { error: "Quantity must be greater than 0" };
                }

                // Validación: verificar que el item existe en inventario
                const inventoryItem = this.inventory.find(i => i.id === itemId);
                if (!inventoryItem) {
                    console.log("Item not found in inventory");
                    return { error: "This item is not in your inventory" };
                }

                // Validación: verificar que tiene suficiente cantidad
                if (inventoryItem.quantity < quantity) {
                    console.log("Insufficient quantity. Need:", quantity, "Have:", inventoryItem.quantity);
                    return { error: `Insufficient quantity. You need ${quantity}, you have ${inventoryItem.quantity}` };
                }

                // Realiza la solicitud al servidor para vender
                const token = localStorage.getItem('user_token');
                if (!token) {
                    console.log("No token found");
                    return { error: "Token not found" };
                }

                // Realiza la solicitud al servidor para vender
                const response = await fetch(this.server + '/shop/sell', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ item_id: itemId, quantity: quantity })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Error selling product');
                }

                console.log("Product sold successfully");
                this.cash = data.balance || this.cash;
                this.loadInventory();
                return { success: true, message: "Successful sale!" };
            } catch (error) {
                console.log("Error selling product:", error.message);
            }
        }
    }
});