/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */
 module.exports = function (creep, typetoFind) {

    if(creep.energy < creep.energyCapacity || typetoFind == Game.HOSTILE_CREEPS) {
        var target;
        var distance = 9999;
        var sources = creep.room.find(typetoFind);
        if(sources.length > 0){

        for (var s in sources){
            var source = sources[s];
            var sDist = source.pos.findPathTo(creep).length;
            if (sDist <= distance){
                target = source;
                distance = sDist;
            }
        }
        creep.moveTo(target);
        if (typetoFind == Game.DROPPED_ENERGY){
            creep.pickup(target);
        }
        else if(typetoFind == Game.HOSTILE_CREEPS){
            creep.attack(target);
        }
        else{
            creep.harvest(target);
        }
    }
        else {
            creep.moveTo(Game.spawns.Spawn1);
            creep.transferEnergy(Game.spawns.Spawn1);
        }
    }
    else {
        creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
    }

     
 };