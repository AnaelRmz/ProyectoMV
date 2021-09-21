/*
const  Mongoose  =require( "mongoose");



const comercioSchema= Mongoose.Schema({

    nombre:{type:String,required:true},
    direccion:{type:String,required:true}

})

module.exports= Mongoose.model('Comercio',comercioSchema)

*/

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre:String,
    direccion:String
})

ComercioSchema.statics.Constructor=function(nombre,direccion){
    return new this({
        nombre:nombre,
        direccion:direccion
    })
}

ComercioSchema.statics.todos = function(cb){
    return this.find({},cb);
}


module.exports= mongoose.model('Comercio',ComercioSchema)