// Muestra la cantidad total de ventas de todos los productos
db.ventas.aggregate([{
    $group: {
        _id: "ProductosVendidos",
        ProductosVendidos: {
            $sum: "$cantidad"
        }
    }
}])





// Muestra la cantidad total de ventas de todos los productos segun marca
db.ventas.aggregate([{
    $group: {
        _id: "$marca",
        ProductosVendidos: {
            $sum: "$cantidad"
        }
    }
}])





//Queremos saber la cantidad de productos RAZER que hemos vendido en cada año
db.ventas.aggregate([{
    $match: {
        marca: {
            $regex: /.?razer/i
        }
    }
}, {
    $group: {
        _id: {
            año: {
                $year: "$fechaVenta"
            }
        },
        cantidad: {
            $sum: "$cantidad"
        }
    }
}])





// Muestra la cantidad vendida de cada marca en los distintos años ordenado de manera alfabetica
db.ventas.aggregate([{
    $group: {
        _id: {
            año: {
                $year: "$fechaVenta"
            },
            marca: "$marca"
        },
        ventas: {
            $sum: "$cantidad"
        }
    }
},
{
    $project: {
        _id: 0,
        marca: "$_id.marca",
        año: "$_id.año",
        ventas: "$ventas",
    }
},
{
    $sort: {
        marca: 1
    }
}
])





// Muestra el coste mas alto de cada marca

db.ventas.aggregate([
    {$group: {
        _id: "$marca",
        CostoMayor: {
            $max: "$costeUnidad"
        }
    }
}])





// Muestra el coste mas bajo de cada marca
db.ventas.aggregate([
    {$group: {
        _id: "$marca",
        CostoMenor: {
            $min: "$costeUnidad"
        }
    }
}])





// Muestra el precio total de cada venta
db.ventas.aggregate([
    {$project: {_id: "$producto", 
                precioTotalVenta: 
                    {$multiply: [
                        "$precioUnidad", "$cantidad"
                                ]
                    }
               }
    }
])





// La venta con una cantidad de 10, que debe corresponder a la clienta Ángeles Quintero no puede pagarlo de 1 vez, por lo que dividiremos su pago en 4 plazos.
// Interesa saber cuanto tiene que pagar cada plazo
db.ventas.aggregate([
    {$match: {
        $and: [
            {cantidad: {$eq: 10}},
            {cliente: {$eq: "Ángeles Quintero"}}
        ]
        }
    },
    {$group: 
        {_id: null, 
        precioTotalVenta: 
            {$sum: 
                {$multiply: ["$precioUnidad", "$cantidad"] } 
            } 
        } 
    },
    {$project: {_id: "$producto", 
                precioPlazo:
                    {$divide: ["$precioTotalVenta", 4]}
               }
    }

])





// Queremos saber los beneficios que tuvimos en el mes de Junio de 2019
db.ventas.aggregate([
    {$match: {
        $and: [
            { $expr: { $eq: [{$month: "$fechaVenta"}, 6] } },
            { $expr: { $eq: [{$year: "$fechaVenta"}, 2019] } }
        ]
        }
    },
    {$group: 
        {_id: null, 
        precioTotalVenta: 
            {$sum: 
                {$multiply: ["$precioUnidad", "$cantidad"] } 
            },
        precioTotalCompra: 
            {$sum: 
                {$multiply: ["$costeUnidad", "$cantidad"] } 
            } 
        } 
    },
    {$project: 
        {_id: "$producto", 
        beneficioGanado: {
            $round: [
                    {$subtract: 
                        ["$precioTotalVenta", "$precioTotalCompra"]
                    },2
                    ]
                        }
        }
    }
])





// Queremos saber cuanto hemos ganado por cada marca en todos los años

db.ventas.aggregate([{
    $group: 
        {_id: "$marca", 
        precioTotalVenta: 
            {$sum: 
                {$multiply: ["$precioUnidad", "$cantidad"] } 
            },
        precioTotalCompra: 
            {$sum: 
                {$multiply: ["$costeUnidad", "$cantidad"] } 
            } 
        } 
    },{
    $project: 
        {_id: 0, 
        marca: "$_id",
        beneficioGanado: {
            $round: [
                    {$subtract: 
                        ["$precioTotalVenta", "$precioTotalCompra"]
                    },2
                    ]
                        }
        }
    }
])