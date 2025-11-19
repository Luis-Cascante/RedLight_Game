app.component('tools-buttons', {

    emits: ['select-tool'],

    props: {


        activeTools: {

            type: String,
            default: null

        }


    },

    methods: {

        selectTool(tool) {


            this.$emit("select-tool", tool);

        }

    },

    template: /*html*/`

 <div class="buttons-container tools-container">
                <div class="buttons-panel tools-panel">
                    <button v-on:click="$emit('select-tool', 'scythe')"><img src="./img/scythe.png" alt="farm"></button>
                    <button v-on:click="$emit('select-tool','plant')"><img src="./img/PlantBtn.png" alt="plant"></button>
                    <button v-on:click="$emit('select-tool','fertilizer')"><img src="./img/FertilizerBtn.png" alt="fertilizer"></button>
                    <button v-on:click="$emit('select-tool','bucket')"><img src="./img/BucketBtn.png" alt="bucket"></button>
                </div>
            </div>
`

});