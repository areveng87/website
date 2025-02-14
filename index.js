new Vue({
    el: '#app',
    data: {
        scenes: [
            'scene1',
            'scene2',
            'scene3',
            'scene4'
        ],
        scene: 0,
        btnNoPosition: {
            x: 0,
            y: 0,
        },
        maxWidth: 0,
        maxHeight: 0,
        message: '',
    },
    methods: {

        nextScene() {
            setTimeout(() => {

                if(this.scene < this.scenes.length) {
                    this.scene++
                    ;
                }
            }, 1000)
        },
        calcularLimites() {
            this.maxWidth = window.innerWidth - 100;
            this.maxHeight = window.innerHeight - 50;
        },
        clickNo() {

            const nuevoX = Math.random() * this.maxWidth;
            const nuevoY = Math.random() * this.maxHeight;

            this.$refs.botonNo.style.position = "absolute";
            this.$refs.botonNo.style.left = `${nuevoX}px`;
            this.$refs.botonNo.style.top = `${nuevoY}px`;
        },
        selectCard(card) {
            switch (card) {
                case 'nintendo':
                    this.message = 'Daniela ha seleccionado ser feliz sin engaños'
                    break;
                case 'concert':
                    this.message = 'Daniela ha una vida entera'
                    break;
            }
        },

        compartirEnWhatsApp() {
            if(!this.message )  {
                alert('selecciona un regalo');
                return false;
            }
            const texto = encodeURIComponent(this.message); // Codifica el mensaje
            const url = `https://api.whatsapp.com/send?phone=34603489473&text=${texto}`; // URL de WhatsApp

            // Abre WhatsApp en una nueva pestaña
            window.open(url, "_blank");
        }
    //     -------------------------------------------------------------------------------------------------------------

    //     -------------------------------------------------------------------------------------------------------------
    },
    computed: {
        actualScene() {
            return this.scenes[this.scene];
        },
    },
    mounted() {

        this.calcularLimites();
    }
})
