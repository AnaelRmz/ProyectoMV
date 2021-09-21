var mongoose = require('mongoose');
var Comercio = require('../../models/comercio.js')

describe('Test modelo Comercio',function(){

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, {useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado!!');
            done();
        });
    })
/** 
    describe('Crear instancia',()=>{
      
        it('crear una instancia de comercio',()=>{
            var comerciotest = comercio.Constructor("Comercio 1","Chalatenango")
            expect(comerciotest.nombre).toBe("Comercio 1")
            expect(comerciotest.direccion).toBe("Chalatenango")
        })
    })*/

    describe('Comprobar si coleccion inicia vacía', () => {
        it('comienza vacía', (done) => {
            Comercio.todos(function(err, cb){
                expect(cb.length).toBe(3);
                done()
            })
        })
    })
    

})
