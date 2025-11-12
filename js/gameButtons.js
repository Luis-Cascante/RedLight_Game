app.component('game-buttons', {

emits: ['select-tool' , 'selected-view'],

props: {


    activeTools: {

        type: String,
        default: null

    },

    selectedView: {

        type: String,
        default: null
    },


},

methods: {

updateView(selectedView) {
    
    this.$emit("selected-view", selectedView)

 },

selectTool(tool){


 this.$emit("select-tool", tool);

}

},

template: /*html*/`

 <div class="buttons-container">
                <div class="buttons-panel">
                    <button v-on:click="$emit('selectTool','resume'); $emit('selected-view','game-panel')"><img src="./img/ResumeBtn.png" alt="resume"></button>
                    <button v-on:click="$emit('selected-view', 'cauldron-panel')"><img src="./img/potions.png" alt="potions"></button>
                    <button v-on:click="$emit('selected-view', 'inventory-panel')"><img src="./img/inventory-btn.png" alt="inventory"></button>
                    <button v-on:click="$emit('selected-view', 'store-panel')"><img src="./img/store.png" alt="store"></button>
                    <button v-on:click="$emit('selected-view', 'main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
                </div>
            </div>
`
    
});