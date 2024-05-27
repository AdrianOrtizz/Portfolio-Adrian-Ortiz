export interface proyectData {
  name: string;
  imgURL: string;
  videoURL: string;
  gitHubURL: string;
  description: string;
  technologies: string[];
}

export const proyects: proyectData[] = [
  {
    name: "Pokedex",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716220787/Portfolio/Proyectos/PokeApi_wjlgwz.png",
    videoURL: "https://www.youtube.com/embed/T-SNhqNqT18?si=4rXnCZCp7hPYdGnX",
    gitHubURL: "https://github.com/AdrianOrtizz/PI-Pokemon-main",
    description:
      "Este fue mi proyecto individual durante mi cursada en el bootcamp de SoyHenry. En esta página el usuario puede ver la pokedex donde además puede filtrarlos y ordenarlos, además puede seleccionar un pokemon para ver sus características principales. Para este proyecto usé la pokeapi (https://pokeapi.co/) para traer la información de los pokemons",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Sass",
    ],
  },
  {
    name: "Uuid Store",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716220240/Portfolio/Proyectos/UuidStore_ljsy1m.png",
    videoURL: "https://www.youtube.com/embed/wOM3vOVKjNI?si=kJIKyTKCcvquJl-Z",
    gitHubURL: "https://github.com/Agus-Albarracin/uuid-store",
    description:
      "Uuid Store es mi proyecto final del bootcamp de SoyHenry. Es un e-commerce donde el usuario puede registrarse, ya sea con un mail o mediante su cuenta de Google, para seleccionar un par de zapatillas que se guarda en el carrito y finalizar la compra mediante la plataforma de Mercado Pago. Yo me encargué de dirigir el area de frontend dividiendo las tareas y organizando el grupo para cumplir con los objetivos en tiempo y forma. También fui el encargado de crear el diseño de la página con la plataforma Figma",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Sass",
      "Tailwind",
      "Nodemailer",
      "Mercado Pago",
      "Formik",
    ],
  },
  {
    name: "Rick and Morty App",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716227266/Portfolio/Proyectos/RickAndMortyApp_muzmnt.png",
    videoURL: "https://www.youtube.com/embed/AZ5fdddHnS4?si=0lYgZGk4yvImoB8K",
    gitHubURL: "https://github.com/AdrianOrtizz/PI_Rick_And_Morty",
    description:
      "En esta página el usuario se pude registrar para entrar y buscar personajes de la serie Rick y Morty, agreagarlos a favoritos y en la sección de favoritos los puede ordenar y filtrar por sus características.",
    technologies: [
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Sass",
    ],
  },
];
