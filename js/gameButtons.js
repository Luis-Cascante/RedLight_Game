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
    <button v-on:click="$emit('select-tool','resume'); $emit('selected-view','game-panel')"><img src="./img/ResumeBtn.png" alt="resume"></button>
    <button v-on:click="$emit('select-tool','cauldron-panel'); $emit('selected-view', 'cauldron-panel')"><img src="./img/potions.png" alt="potions"></button>
    <button v-on:click="$emit('select-tool','inventory-panel'); $emit('selected-view', 'inventory-panel')"><img src="./img/inventory-btn.png" alt="inventory"></button>
    <button v-on:click="$emit('select-tool','store-panel'); $emit('selected-view', 'store-panel')"><img src="./img/store.png" alt="store"></button>
    <button v-on:click="$emit('select-tool','main-menu'); $emit('selected-view', 'main-menu')"><img src="./img/exit-btn.png" alt="exit"></button>
</div>
`
    
});