
// Conexion a la Base de Datos Mongo

// Conexion de manera Local
mongoose.connect('mongodb://localhost:27017/carrito')
mongoose.connect('mongodb://localhost:27017/producto')

// Conexion Web Mongo Atlas- Por MongoShell

mongoose.connect('mongosh "mongodb+srv://cluster0.736pk2j.mongodb.net/myFirstDatabase" --apiVersion 1 --username Sebas_007',{
    useNewUrlParser: true,
    userUnifiedTopology: true
}, err => {
    if(err) throw new Error(`Error de Conexion a la base de Datos ${err}`)
    console.log('Base de Datos Conectada')
})

