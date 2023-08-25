const servicios = [{
    id: 1,
    title: "lavadero",
    categoria: "lavadero",
    nombre: "Lavado Exterior",
    turno: 3,
    precio: 3500,
    img: "./assets/img/autolavado.jpg",
    alt: "limpieza exterior"
},
{
    id: 2,
    title: "lavadero",
    categoria: "lavadero",
    nombre: "Lavado Interior",
    turno: 6,
    precio: 3500,
    img: "./assets/img/autolavado.jpg",
    alt: "limpieza interior"
},
{
    id: 3,
    title: "lavadero",
    categoria: "lavadero",
    nombre: "Lavado Motor",
    turno: 4,
    precio: 2500,
    img: "./assets/img/limpiar-motor-coche.jpg",
    alt: "limpieza motor"
},
{
    id: 4,
    title: "Mecanica",
    categoria: "Mecanica",
    nombre: "Service Standard",
    turno: 2,
    precio: 9400,
    img: "./assets/img/Mecanicagen.jpg",
    alt: "service general"
},
{
    id: 5,
    title: "Mecanica",
    categoria: "Mecanica",
    nombre: "Tren Delantero",
    turno: 2,
    precio: 67000,
    img: "./assets/img/Mecanicagen.jpg",
    alt: "rep tren delantero"
},
{
    id: 6,
    title: "Mecanica",
    categoria: "Mecanica",
    nombre: "Tren Trasero",
    turno: 0,
    precio: 53000,
    img: "./assets/img/Mecanicagen.jpg",
    alt: "rep tren trasero"
}
]

export const data = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(idCategory) {
                resolve(servicios.filter(servicio =>
                servicio.categoria === idCategory))
            }else{
                resolve(servicios)
            }
        },500)
    })
}

export const dataId = (serviciosId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(servicios.find(servicio => servicio.id === parseInt(serviciosId)))
        },500)
    })
}