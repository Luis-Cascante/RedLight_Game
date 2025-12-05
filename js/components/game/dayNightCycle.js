app.component('day-night-cycle', {
    // Declara el evento que este componente usará para comunicarse con el padre (views-game)
    emits: ['cycle-change'], 
    
    data() {
        return {
            cycleInterval: null,
            // Duración total del ciclo en segundos (ajustable)
            CYCLE_DURATION_SECONDS: 30, 
            // Porcentaje del ciclo que es de día (50% día, 50% noche)
            DAY_DURATION_PERCENT: 50, 
            // Marca de tiempo de inicio del juego
            gameStartTime: Date.now(), 

            // Estado interno del ciclo
            isDay: true, 
            progressPercent: 0, 
        };
    },

    methods: {
        updateCycle() {
            // Usamos refs para acceder a los elementos del DOM de este componente (mejor que document.getElementById)
            const progressBar = this.$refs.progressBar;
            if (!progressBar) return;

            const TOTAL_MILLIS = this.CYCLE_DURATION_SECONDS * 1000;
            const now = Date.now();
            const elapsedSinceStart = now - this.gameStartTime; 

            // Calcula el progreso dentro del ciclo actual (efecto de bucle)
            const currentTimeInCycle = elapsedSinceStart % TOTAL_MILLIS;
            const progressPercent = (currentTimeInCycle / TOTAL_MILLIS) * 100;
            
            const isDay = progressPercent < this.DAY_DURATION_PERCENT;
            const status = isDay ? 'Día' : 'Noche';
            
            const timeIconContainer = this.$refs.timeIconContainer;
            const sunIcon = this.$refs.sunIcon;
            const moonIcon = this.$refs.moonIcon;
            const statusText = this.$refs.statusText;
            const root = this.$refs.root;

            // 1. ALMACENAR EL ESTADO REACTIVO
            this.isDay = isDay;
            this.progressPercent = progressPercent;

            // 2. EMITIR EL ESTADO AL PADRE (views-game)
            this.$emit('cycle-change', {
                isDay: this.isDay,
                progressPercent: this.progressPercent
            });


            if (progressBar && timeIconContainer && statusText && sunIcon && moonIcon && root) {
                // a) Actualiza variables CSS (width/posición) en lugar de estilos inline extensos
                progressBar.style.setProperty('--progress', `${progressPercent.toFixed(2)}%`);
                // El contenedor del icono usará la misma variable para posicionarse
                timeIconContainer.style.setProperty('--progress', `${progressPercent.toFixed(2)}%`);

                // b) Texto de estado
                statusText.textContent = `${status} ${Math.round(progressPercent)}%`;

                // c) Alternar modo día/noche usando una clase en el root y dejar que CSS maneje colores
                root.classList.toggle('night', !isDay);

                // d) Alternar visibilidad de íconos (CSS controla display según la clase 'night')
                sunIcon.classList.toggle('hidden', !isDay);
                moonIcon.classList.toggle('hidden', isDay);
            }
        },

        startCycle() {
            if (this.cycleInterval) {
                clearInterval(this.cycleInterval);
            }
            this.updateCycle(); 
            this.cycleInterval = setInterval(this.updateCycle, 100); 
            console.log("Ciclo Día/Noche Iniciado.");
        },

        stopCycle() {
            if (this.cycleInterval) {
                clearInterval(this.cycleInterval);
                this.cycleInterval = null;
                console.log("Ciclo Día/Noche Detenido.");
            }
        },
    },

    mounted() {
        // Inicia el ciclo en cuanto el componente se carga en el DOM
        this.startCycle();
    },
    unmounted() {
        // Detiene el ciclo cuando el componente es removido del DOM (ej. al cambiar de vista)
        this.stopCycle();
    },


    template: /*html*/ `
        <!-- --- INICIO BARRA DE CICLO DÍA/NOCHE --- -->
        <div ref="root" class="day-night-root">

            <!-- Pista / track (fondo) -->
            <div class="dn-track">
                <!-- Barra que crece según progreso (usa la variable CSS --progress) -->
                <div ref="progressBar" class="dn-bar"></div>

                <!-- Icono de Sol/Luna (contenedor) -->
                <div ref="timeIconContainer" class="dn-time-icon">
                    <svg ref="sunIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M12 2v2"/>
                        <path d="M12 20v2"/>
                        <path d="m4.93 4.93 1.41 1.41"/>
                        <path d="m17.66 17.66 1.41 1.41"/>
                        <path d="M2 12h2"/>
                        <path d="M20 12h2"/>
                        <path d="m6.34 17.66-1.41 1.41"/>
                        <path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                    <svg ref="moonIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon hidden">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                    </svg>
                </div>

                <!-- Texto de Estado (centrado) -->
                <span ref="statusText" class="status-text">Día 0%</span>
            </div>
        </div>
        <!-- --- FIN BARRA DE CICLO DÍA/NOCHE --- -->
    `
});