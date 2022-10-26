"use strict";

/**


 */

const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            classContainer: 'container',
            classCard: 'card',
            classCardImg: 'card-img-top',
            urlImg: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg',
            altImg: 'picsum_photo',
            classCardBody: 'card-body',
            classCardText: 'card-text text-center',
            text:'Lorem Picsum',
            classBtn : "btn btn-dark"
        }
    },
    methods: {
        changeCard() {
            this.urlImg = (this.urlImg == 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg') ? this.urlImg = 'https://www.incasummer.ca/wp-content/uploads/2022/05/Audacity_Logo_nofilter.svg_-300x300.png' : 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg';
            this.classCard = (this.classCard == 'card') ? 'card bck-black' : 'card';
            this.classCardText = (this.classCardText == 'card-text text-center') ? 'card-text text-center text-white' : 'card-text text-center';
            this.text = (this.text == 'Lorem Picsum') ? 'Merol Muscip' : 'Lorem Picsum';
        }
        
    }
})
app.mount('#app');

