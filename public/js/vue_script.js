

'use strict';
var socket = io();
var orderID = 0;

var vm = new Vue({
    el: '#myVue',
    data: {
        burgList: food,
        chosenBurg: [],
        fullName: "",
        email: "",
        payMethod: "",
        gender: "",
        orderPlaced: false,
        orders: {},
        details: {x: 0, y: 0},
        },

    methods: {
        ordered() {
            this.orderPlaced = true;
        },

        displayOrder: function (event) {
            console.log("display test")
            var display = { x: event.currentTarget.getBoundingClientRect().left,
                            y: event.currentTarget.getBoundingClientRect().top}

            this.details = { x: event.clientX - 10 - display.x,
                             y: event.clientY - 10 - display.y}
        },

        addOrder: function () {
            console.log("addorder test"),
            socket.emit("addOrder", {
                orderId: orderID +1,
                details: this.details,
                orderItems: this.chosenBurg,
                orderInfo: this.fullName + " " + this.email + " " + this.payMethod + " " + this.gender
            });
            orderID = orderID + 1;
        }

    }
})
