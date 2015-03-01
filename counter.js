/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('counter'); // -> 'a thing'
 */
 module.exports = function (){
    var tot = Object.keys(Game.creeps).length;
//    console.log("tot: "+ tot);
    var res = {};
    for (var creep in Game.creeps){
        if (res[Game.creeps[creep].memory.role]){
            res[Game.creeps[creep].memory.role] += 1;
        }
        else {
            res[Game.creeps[creep].memory.role] = 1;
        }
    }
    for (var key in res){
        if (tot != 0){
            res[key] = res[key]/tot;
        }
        else{
            res[key] = 0;
        }
    }
    return res;
 };