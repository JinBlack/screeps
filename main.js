
var harvester = require('harvester');
var counter = require('counter');
var nest = require('nest');
var utils = require('utils');

if (!Memory.creepCounter){
    Memory.creepCounter = 0;
}

if (!Memory.creepNeeds){
    Memory.creepNeeds = ['harvester'];
}

var creepNeeds = Memory.creepNeeds;

for(var spawn in Game.spawns){
    console.log(creepNeeds.length);

    if (Game.spawns[spawn].spawning == null && Game.spawns[spawn].energy > 500 && creepNeeds.length > 0){
//        var nest = counter();
        var distance = 0;
/*        for (var creep in nestSpec){
            var curDistance = 1;
            if (nest[creep]){
                curDistance = nestSpec[creep].perc - nest[creep];
            }
            else {
                curDistance = nestSpec[creep].perc;
            }
            if (distance <= curDistance){
                blueCreep = creep;
                distance = curDistance;
            }
        }
*/
        var blueCreepName = creepNeeds.pop();
        var blueCreep = nest[blueCreepName];
        console.log(blueCreep);
        console.log(creepNeeds.length);
        var output = Game.spawns[spawn].createCreep(blueCreep.body, blueCreep.name + " - " + Memory.creepCounter++ , {role: blueCreep.name}); 
        if (output < 0){
            Memory.creepCounter--;
            creepNeeds.push(blueCreepName);
            console.log("Repushing");
            console.log(creepNeeds.length);
        }
}

for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    console.log("---------")
    console.log(name);

    for (var role in nest) {
        if (!creep.spawning && creep.memory.role == nest[role].name){
            nest[role].ai(creep);
        }

    }
/*
    if(creep.memory.role == 'harvester'){
        harvester(creep, Game.SOURCES_ACTIVE);
    }

    if(creep.memory.role == 'energykeeper'){
        harvester(creep, Game.DROPPED_ENERGY);
    }
    if(creep.memory.role == 'guard'){
        harvester(creep, Game.HOSTILE_CREEPS);
    }



    if(creep.memory.role == 'builder'){
        var targets = creep.room.find(Game.CONSTRUCTION_SITES);
        if (targets.length <= 0){
            harvester(creep, Game.SOURCES_ACTIVE);
        }


        else if(creep.energy == 0 && Game.spawns.Spawn1.energy > 150+creep.energyCapacity){
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else if (Game.spawns.Spawn1.energy > 150){
            if (targets.length){
                creep.moveTo(targets[0]);
                creep.build(targets[0]);
            }
        }
        else{
            harvester(creep, Game.SOURCES_ACTIVE);
        }
    */

    }  

}