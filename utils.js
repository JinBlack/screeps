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


module.exports = {creepCost: creepCost}