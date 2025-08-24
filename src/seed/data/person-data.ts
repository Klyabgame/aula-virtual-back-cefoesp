export interface SeedPerson{
    dni: string,
    nombres: string,
    apellido_materno: string,
    apellido_paterno:string ,
    correo_electronico: string,
    celular: string,
    img: string
}


interface seedDataPerson{
    persons:SeedPerson[];
}


export const initialDataPerson:seedDataPerson={
    persons:[
        {
            dni: "75139221",
            nombres: "federico schwartz",
            apellido_materno: "franz schwartz",
            apellido_paterno: "franz schwartz",
            correo_electronico: "franz134@gmail.com",
            celular: "977152063",
            img: "http://imga.png"
        },
        {
            dni: "73139225",
            nombres: "steven serca",
            apellido_materno: "servando",
            apellido_paterno: "julian",
            correo_electronico: "servando134@gmail.com",
            celular: "977133063",
            img: "http://imga.png"
        },
        {
            dni: "80213456",
            nombres: "Lucía Ramírez",
            apellido_materno: "Gonzales",
            apellido_paterno: "Ramírez",
            correo_electronico: "lucia.ramirez@example.com",
            celular: "981234567",
            img: "http://imgb.png"
          },
          {
            dni: "79345678",
            nombres: "Carlos Mendoza",
            apellido_materno: "Torres",
            apellido_paterno: "Mendoza",
            correo_electronico: "carlos.mendoza@example.com",
            celular: "984567890",
            img: "http://imgc.png"
          },
          {
            dni: "76543210",
            nombres: "Valeria Quispe",
            apellido_materno: "Lopez",
            apellido_paterno: "Quispe",
            correo_electronico: "valeria.quispe@example.com",
            celular: "976543210",
            img: "http://imgd.png"
          },
          {
            dni: "78901234",
            nombres: "Jorge Salazar",
            apellido_materno: "Fernández",
            apellido_paterno: "Salazar",
            correo_electronico: "jorge.salazar@example.com",
            celular: "972345678",
            img: "http://imge.png"
          },
          {
            dni: "81234567",
            nombres: "Camila Rojas",
            apellido_materno: "Martínez",
            apellido_paterno: "Rojas",
            correo_electronico: "camila.rojas@example.com",
            celular: "975678901",
            img: "http://imgf.png"
          },
          {
            dni: "82345678",
            nombres: "Diego Navarro",
            apellido_materno: "Paredes",
            apellido_paterno: "Navarro",
            correo_electronico: "diego.navarro@example.com",
            celular: "979876543",
            img: "http://imgg.png"
          },
          {
            dni: "83456789",
            nombres: "Andrea Torres",
            apellido_materno: "Silva",
            apellido_paterno: "Torres",
            correo_electronico: "andrea.torres@example.com",
            celular: "973456789",
            img: "http://imgh.png"
          },
          {
            dni: "84567890",
            nombres: "Luis Gutiérrez",
            apellido_materno: "Reyes",
            apellido_paterno: "Gutiérrez",
            correo_electronico: "luis.gutierrez@example.com",
            celular: "978901234",
            img: "http://imgi.png"
          },
          {
            dni: "85678901",
            nombres: "María Castillo",
            apellido_materno: "Vargas",
            apellido_paterno: "Castillo",
            correo_electronico: "maria.castillo@example.com",
            celular: "970123456",
            img: "http://imgj.png"
          }
    ]
}