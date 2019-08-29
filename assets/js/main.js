var url = "https://jsonplaceholder.typicode.com/users"
var data = []

var app = new Vue({
    el: '#discover',
    data: {
        products: []
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            axios.get(url).then(function (res) {
                app.products = res.data;
            }).catch(function (err) {
                console.log(err)
            })
        }
    }
})
$(document).ready(function () {
    var opt = {
        freeScroll: true,
        wrapAround: true
    }
    var carousel = $('.carousel').flickity(opt)
})
