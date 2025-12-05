const API_URL = "http://redlightstore.test/api";

const app = Vue.createApp({
    data() {
        return {
            selectedView: "lobby",
            activeTool: null,

            server: API_URL,

            currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

            plotsFarm: [
                { id: 1, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 2, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 3, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 4, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 5, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 6, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 7, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 8, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 9, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 10, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 11, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
                { id: 12, planted: false, stage: 0, fertilized: false, water: false, image: './img/plot_empty.png' },
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
                { id: 1, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 2, item: 'potion1', description: 'A magical potion', price: 50, image: './img/item-potion1.png' },
                { id: 3, item: 'potion2', description: 'A magical potion', price: 50, image: './img/item-potion2.png' },
                { id: 4, item: 'potion3', description: 'A magical potion', price: 50, image: './img/item-potion3.png' },
                { id: 5, item: 'potion4', description: 'A magical potion', price: 50, image: './img/item-potion4.png' },
                { id: 6, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 7, item: 'potion1', description: 'A magical potion', price: 50, image: './img/item-potion1.png' },
                { id: 8, item: 'potion2', description: 'A magical potion', price: 50, image: './img/item-potion2.png' },
                { id: 9, item: 'potion3', description: 'A magical potion', price: 50, image: './img/item-potion3.png' },
                { id: 10, item: 'potion4', description: 'A magical potion', price: 50, image: './img/item-potion4.png' },
                { id: 11, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },
                { id: 12, item: 'potion4', description: 'A magical potion', price: 50, image: './img/item-potion4.png' },
            ],
            itemSelected: { id: 1, item: 'spiderweb', description: 'A sticky spiderweb', price: 50, image: './img/item-spiderweb.png' },

            cash: 0,

            plantList: [
                { id: 1, type: 'spideyFlower', imgStages: ['./img/spideyFlower_stage1.png', './img/spideyFlower_stage2.png', './img/spideyFlower_stage3.png'] },
                { id: 2, type: 'squidPumpkin', imgStages: ['./img/squidPumpkin_stage1.png', './img/squidPumpkin_stage2.png', './img/squidPumpkin_stage3.png'] },
            ],

            ingredientsList: [
                { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                { id: 2, item: 'unicornDust', quantity: 5, image: './img/item-unicornDust.png' },
                { id: 3, item: 'dragonScale', quantity: 5, image: './img/item-dragonScale.png' },
            ],

            potionList: [
                {
                    id: 1, name: 'namePotion1', price: 50, ingredients: [
                        { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                        { id: 2, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' }
                    ], image: './img/item-potion1.png'
                },
                { id: 2, name: 'namePotion2', price: 50, ingredients: [], image: './img/item-potion2.png' },
                { id: 3, name: 'namePotion3', price: 50, ingredients: [], image: './img/item-potion3.png' },
                { id: 4, name: 'namePotion4', price: 50, ingredients: [], image: './img/item-potion4.png' },
            ],
            potionSelected: {
                id: 1, name: 'namePotion1', price: 50, ingredients: [
                    { id: 1, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' },
                    { id: 2, item: 'spiderweb', quantity: 5, image: './img/item-spiderweb.png' }
                ], image: './img/item-potion1.png'
            },

            cycleDayNight: 'night',

            tasks: [
                { description: 'Plant 5 seed1', completed: false },
                { description: 'Harvest 3 seed2', completed: false },
                { description: 'Earn 100 cash', completed: false }
            ],

            // array vacio de usuarios registrados
            // registeredUsers: []

           

        };
    },

    mounted() {
        
        if (this.currentUser) {
            this.selectedView = 'main-menu';
        }
    },
    
    methods: {
        updateView(selectedView) {
            this.selectedView = selectedView;
            return this.selectedView;
        },

        async registerUser(name, email, password) {
            //el .push agrega el nuevo usuario al array vacio
             // this.registeredUsers.push({ username, email, password });

            try {
                const response = await fetch(this.server+`/signup`, {
                    method: 'POST',
                    headers: {
                        
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (!response.ok) {
                    if (response.status === 422){

                        throw new Error(data.message || 'Error de validacion al registrar usuario');

                    }
                    throw new Error(data.message || 'Fallo en el servidor al registrar usuario');

                }
                return { success: true, user: data.user };
            } catch (error) {
                console.log("Fallo al llamar a la API de registro:", error.message);
                return {error: error.message };
            }

        },

         async validateUser(email, password) {
            //return this.registeredUsers.find(user => user.email === email && user.password === password);

        try {

            const response = await fetch(this.server+'/login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   
                },
                body: JSON.stringify({ email, password })

            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Credenciales incorrectas');
            }
            

            localStorage.setItem('user_token', data.access_token);

            this.currentUser = data.user;

            localStorage.setItem('currentUser', JSON.stringify(data.user));

            return data.user;

        }catch (error) {
            console.log("Fallo al llamar a la API de login:", error.message);
            return null;

        }
        },

        logout() {

            this.currentUser = null;
            localStorage.removeItem('currentUser');
            this.selectedView = 'lobby';

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

        removePlant(plotId) {
            if (this.activeTool !== "scythe") return;

            if (this.plotsFarm.find(plot => plot.id === plotId)) {
                this.plotsFarm.find(plot => plot.id === plotId).planted = false;
                this.plotsFarm.find(plot => plot.id === plotId).image = './img/plot_empty.png';
            }

        },

        plantInPlot(plotId, typePlant) {
            if (this.activeTool !== "plant") return;

            console.log("Planting in plot:", plotId);

            if (this.plotsFarm.find(plot => plot.id === plotId)) {
                this.plotsFarm.find(plot => plot.id === plotId).planted = true;
                const plant = this.plantList.find(plant => plant.type === typePlant).imgStages[0]; // por ahora fija spideyFlower
                this.plotsFarm.find(plot => plot.id === plotId).image = plant;
                this.plotsFarm.find(plot => plot.id === plotId).stage = 1;
            }
        },

        fertilizePlot(plotId, typePlant) {
            if (this.activeTool !== "fertilizer") return;

            if (this.plotsFarm.find(plot => plot.id === plotId)) {
                const stagePlot = this.plotsFarm.find(plot => plot.id === plotId).stage;
                if (stagePlot >= 3) return; // ya esta en la etapa maxima
                const plant = this.plantList.find(plant => plant.type === typePlant).imgStages[stagePlot]; // por ahora fija spideyFlower
                this.plotsFarm.find(plot => plot.id === plotId).image = plant;
                this.plotsFarm.find(plot => plot.id === plotId).stage += 1;
                this.plotsFarm.find(plot => plot.id === plotId).fertilized = true;

            }
        },

        waterPlot(plotId) {
            if (this.activeTool !== "bucket") return;

            if (this.plotsFarm.find(plot => plot.id === plotId)) {
                this.plotsFarm.find(plot => plot.id === plotId).water = true;
            }

            console.log("Watering plot:", plotId);
        },

        selectPotion(potion) {
            this.potionSelected = potion;
        },

        selectItemStore(item) {
            this.itemSelected = item;
        }
    }
});