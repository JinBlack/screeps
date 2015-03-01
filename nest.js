module.exports = {
    'guard' : 
        {
            perc : .0, 
            name: "Guard", 
            body : [Game.ATTACK, Game.TOUGH, Game.MOVE, Game.MOVE], 
            ai : function (creep){
                var hostile = creep.pos.findNearest(Game.HOSTILE_CREEPS);
                if (hostile == undefined || hostile == null){
                    return false;
                }
                creep.moveTo(hostile);
                creep.attack(hostile);
            }
        },

    'archer' : 
        {
            perc : .2, 
            name: "Archer", 
            body : [Game.RANGED_ATTACK, Game.TOUGH, Game.MOVE], 
            ai : function (creep){
                var hostile = creep.pos.findNearest(Game.HOSTILE_CREEPS);
                if (hostile == undefined || hostile == null){
                    return false;
                }
                creep.moveTo(hostile);
                creep.rangedAttack(hostile);
            }
        },
                
    'harvester' : 
        {
            perc : .30, 
            name: "Farmer", 
            body : [Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE], 
            ai : function (creep){
                var hostile = creep.pos.findNearest(Game.SOURCES_ACTIVE);
                if (hostile == undefined || hostile == null){
                    return false;
                }
                creep.moveTo(hostile);
                creep.harvest(hostile);
            }

        },
    'energykeeper' : 
        {
            perc : .0, 
            name: "EnergyKeeper", 
            body : [Game.ATTACK, Game.CARRY, Game.MOVE, Game.MOVE] 
        },    
    'builder' : 
        {
            perc : .50, 
            name: "Builder", 
            body : [Game.WORK, Game.CARRY, Game.WORK, Game.MOVE, Game.MOVE] 
        },    
};
