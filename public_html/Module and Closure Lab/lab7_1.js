
"use strict";
window.onload = function() {
    var module = (function() {
        return {
            createBicyclePrototype: function() {
                return {
                    speed: 0,
                    'applyBrake': function(value) {
                        this.speed -= value;
                    },
                    'speedUp': function(value) {
                        this.speed += value;
                    }
                };
            },
            createMountainBikeProtoype: function(prototype) {
                var createdObj = Object.create (prototype);
                createdObj.gear = 1;
                createdObj.setGear = function(value) {
                    this.gear = value;
                };
                return createdObj;
            },
            start: function() {
                var bicyclePrototype = this.createBicyclePrototype();
                var mountainBikePrototype = this.createMountainBikeProtoype(bicyclePrototype);
                var bicycle1 = Object.create(bicyclePrototype);
                bicycle1.speed = 10;
                bicycle1.applyBrake(1);
                alert("Speed of bicycle1 after applyBrake(1): " + bicycle1.speed);
                bicycle1.speedUp(5);
                alert("Speed of bicycle1 after speedUp(5): " + bicycle1.speed);
                var mountainBike = Object.create(mountainBikePrototype);
                alert("Default gear of mountainBike: " + mountainBike.gear);
                mountainBike.setGear(10);
                alert("Gear of mountainBike after setGear(10): " + mountainBike.gear);
            }
        };
    })();
    
    document.getElementById("btnStart").onclick = function() {
        module.start();
    };
};