const platos=[
    {
        id:1,
        nombre: 'Carpaccio fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        precio: 'U$S 65.50'
    },
    {
        id:2,
        nombre: 'Risotto de berenjena',
        descripcion: 'Risotto de berenjena y queso de cabra',
        precio: 'U$S 47.00'
    },
    {
        id:3,
        nombre: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        precio: 'U$S 27.50'
    },
    {
        id:4,
        nombre: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio: 'U$S 37.50'
    },
]
const about= [
    {
        nombre: 'Pimienta & Sal',
        descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute iruredolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.`,
        descripcion2: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod temporincididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.`
    }
]

const mainController={
    index: (req,res)=>{
        return res.render('index', {listaPlatos:platos, about:about})
    },
    detail: (req,res)=>{
        return res.render('detalleMenu')
    }
}

module.exports=mainController