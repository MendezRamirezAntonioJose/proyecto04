db.ventas.drop()
db.ventas.insertMany([
    {producto: "Clutch GM08", marca: "MSI",precioUnidad: 39.19, cantidad: 4, fechaVenta: new Date("2019-3-7"), costeUnidad: 35.27, cliente: "Adelaida Castilla-Borrego", vendedor: "Yésica Casal Valencia", categoria: "raton"},
    {producto: "M92", marca: "MSI", precioUnidad: 41.12, cantidad: 8, fechaVenta: new Date("2019-6-19"), costeUnidad: 37.01, cliente: "Reyes Franco Pozo", vendedor: "Simón Moles", categoria: "raton"},
    {producto: "X20", marca: "Tempest", precioUnidad: 65.54, cantidad: 8, fechaVenta: new Date("2019-6-3"), costeUnidad: 58.99, cliente: "Gil Llorente Marín", vendedor: "Yésica Casal Valencia", categoria: "raton"},
    {producto: "DeathAdder V2", marca: "Razer", precioUnidad: 45.92, cantidad: 5, fechaVenta: new Date("2018-6-7"), costeUnidad: 41.33, cliente: "Aarón Cabello Ponce", vendedor: "Emiliana Espinosa", categoria: "raton"},
    {producto: "G502", marca: "Logitech", precioUnidad: 67.52, cantidad: 1, fechaVenta: new Date("2019-5-23"), costeUnidad: 60.77, cliente: "Mateo Robles Casado", vendedor: "Carmela Cantón", categoria: "raton"},
    {producto: "G203", marca: "Logitech",precioUnidad: 35.79, cantidad: 2, fechaVenta: new Date("2018-8-4"), costeUnidad: 32.21, cliente: "Blanca Cámara Manjón", vendedor: "Lucas Reguera Lillo", categoria: "raton"},

    {producto: "Vigor GK30", marca: "MSI", precioUnidad: 95.55, cantidad: 9, fechaVenta: new Date("2018-5-27"), costeUnidad: 75.48, cliente: "Aarón Cabello Ponce", vendedor: "Yésica Casal Valencia", categoria: "teclado"},
    {producto: "Doom H-Mech", marca: "Tempest", precioUnidad: 102.41, cantidad: 2, fechaVenta: new Date("2018-7-10"), costeUnidad: 80.90, cliente: "Blanca Cámara Manjón", vendedor: "Carmela Cantón", categoria: "teclado"},
    {producto: "Suiko", marca: "Newskill", precioUnidad: 107.9, cantidad: 3, fechaVenta: new Date("2018-8-3"), costeUnidad: 85.24, cliente: "Aarón Cabello Ponce", vendedor: "Lucas Reguera Lillo", categoria: "teclado"},
    {producto: "BlackWidow V3", marca: "Razer",precioUnidad: 149.45, cantidad: 10, fechaVenta: new Date("2018-4-21"), costeUnidad: 118.07, cliente: "Ángeles Quintero", vendedor: "Yésica Casal Valencia", categoria: "teclado"},
    {producto: "G815", marca: "Logitech", precioUnidad: 126.45, cantidad: 6, fechaVenta: new Date("2018-2-22"), costeUnidad: 99.90, cliente: "Hilario Oliver Múñiz", vendedor: "Carmela Cantón", categoria: "teclado"},
    {producto: "Huntsman", marca: "Razer", precioUnidad: 43.63, cantidad: 4, fechaVenta: new Date("2020-8-21"), costeUnidad: 34.47, cliente: "Reyes Franco Pozo", vendedor: "Simón Moles", categoria: "teclado"}
])