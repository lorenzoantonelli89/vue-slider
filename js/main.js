function initVue() {

    new Vue({
        el: '#app',
        data: {
            'text': 'Slider VueJS!!',
            'image': 'img/boat.jpg'
        },
        methods: {
            changeImgDX: function () {
                if (this.image == 'img/boat.jpg') {
                    this.image = 'img/boat2.JPG'
                } else if (this.image == 'img/boat2.JPG') {
                    this.image = 'img/boat3.JPG'
                } else {
                    this.image = 'img/boat.jpg'
                }
            },
            changeImgSX: function () {
                if (this.image == 'img/boat3.jpg') {
                    this.image = 'img/boat2.JPG'
                } else if (this.image == 'img/boat2.JPG') {
                    this.image = 'img/boat.JPG'
                } else {
                    this.image = 'img/boat3.jpg'
                }
            }
        }
        
    });
}

function init() {
    initVue();
}

$(init);