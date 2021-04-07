function initVue() {

    new Vue({
        el: '#app',
        data: {
            'text': 'Slider VueJS!!',
            'urlImages': ['img/boat.jpg', 'img/boat2.JPG', 'img/boat3.JPG'],
            'index': 0,
            'timer': null
        },
        mounted: function () {
            this.startSlide();
        },
        methods: {
            startSlide: function() {
                this.timer = setInterval(this.changeImgDX, 3000)
            },
            changeImgDX: function () {
                this.index += 1
            },
            changeImgSX: function () {
                this.index -= 1
            },
            stopSlide: function() {
                clearInterval(this.timer)
            }
        },
        computed: {
            currentImg: function () {
                return this.urlImages[Math.abs(this.index) % this.urlImages.length]; // calcola l'immagine con il resto della divisione tra indice e lunghezza array
            }
        }
        
    });
}

function init() {
    initVue();
}

$(init);