// 1 DECLARACION DE OBJETOS
const Coche= {
    marca: "Toyota",
    modelo: "Yaris",
    matricula: "ASD654",
};
// 2
const Casa= {
    codPostal: "",
    calle: "",
    portal: "",
    piso: "",
};
//3
const FullStackDeveloper= {
    lenguajes:[],
    proyectos: [],
};
//4 
const Perro= {
    nombre:"",
    raza:"",
    color:"",
    edad:"",
    ladrar:function(){
        console.log("ladrido")
    },
    popo: function(){
        return Math.random()*3
    }
}
//5 LECTURA DE PROPIEDADES
const portatil = {
    marca: "Asus" ,
    modelo: "A33",
};
let marcaPortatil = portatil.marca ;
console.log(marcaPortatil)
//6
let marcaPortatil2 = portatil["marca"];
console.log(marcaPortatil2)
//7
const concierto = {
    arraygrupos: ["Twenty One Pilots","AC/DC","Queen"]
};
let grupos= concierto.arraygrupos;
//8
const led = {
    rojo: "FF",
    verde: "00",
    azul: "00",
}
let RGB = [led.rojo, led.verde, led.azul];
//9 (No me funcionaba en Jasmine)
//Object.defineProperty(portatil, modelo, P345 );
Portatil.modelo = "P345";

//10 
//Object.defineProperty(concierto, cartelera, "Gun N' Roses")
Concierto.cartelera = ["Queen", "Guns N' Roses" ];

//11
//Object.defineProperty(concierto, fecha, new Date());
Concierto.fecha= new Date();
//12 
Impresora.imprimiendo = {
    nombreArchivo: '', 
    copias: '', 
    numPaginas: ''}
//13
const Noticia= {
    titular: "",
    cuerpo: "",
};
//14
const Persona= {
    nombre: "",
    apellidos:"",
    edad:"",
}
//15
const Avion= {
    numPasajeros: 9,
    despegar: function () {
        console.log("despegando")
    },
    volar: function(){
        console.log("llegando al destino")
    },
    aterrizar: function(){
        console.log("aterrizando");
    }

}
//16
const Paquete= {
    contenido: [" "," "," "],
}
//17
const Pais= {
    numHabitantes: 10,
    continente: "",
    gentilicio:"", 
}
//18
let codError = O_Error.codigo

//19
let integrantes = Grupo.integrantes
//20
let nivelesTinta = Impresora.tinta;
//21
let pixeles= Pantalla.pixeles; 
//22
let especificaciones= Movil["especificaciones"];
//23
Grupo.numIntegrantes= 5;
//24
Pantalla.dimensiones= "1920x1080";
//25
Led.encendido = !Led.encendido;
//26
Movil.temperatura = "20º";

