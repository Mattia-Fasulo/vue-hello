"use strict";

/**


 */

const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            classContainer: 'container d-flex justify-content-center',
            classCard: 'card',
            classCardImg: 'card-img-top',
            urlImg: 'https://picsum.photos/200/300',
            altImg: 'picsum_photo',
            classCardBody: 'card-body',
            classCardText: 'card-text text-center',
            text:'Lorem Picsum',
            classBtn : "btn btn-dark"
        }
    },
    methods: {
        changeImg() {
            this.urlImg = (this.urlImg == 'https://picsum.photos/200/300') ? this.urlImg = 'https://picsum.photos/seed/picsum/200/300' : 'https://picsum.photos/200/300';
        }
    }
})
app.mount('#app');

