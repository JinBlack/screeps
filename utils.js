function actTarget(creep, target, action){
    creep.moveTo(target)

}

var partsCost = {
    "move": 50,
    "work": 20,
    "carry": 50,
    "attack": 100,
    "ranged_attack": 150,
    "heal": 200,
    "tough": 5
}

function creepCost(creepSpec){
    var tot = 0;
    for(var part in creepSpec.body){
        tot += partsCost[part];
    }
    return tot;
}

function findNearest(typetoFind, pos){
    var target;
    var distance = 9999;
    var sources = Room.find(typetoFind);
    if(sources.length > 0){

    for (var s in sources){
        var source = sources[s];
        var sDist = pos.findPathTo(creep).length;
        if (sDist <= distance){
            target = source;
            distance = sDist;
        }
    }
    return target;
}

module.exports = {creepCost: creepCost,
                  findNearest: findNearest}
                  