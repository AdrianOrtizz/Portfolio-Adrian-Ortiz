export interface proyectData {
  name: string;
  imgURL: string;
  videoURL: string;
  gitHubURL: string;
  description: string;
}

export const proyects: proyectData[] = [
  {
    name: "Pokedex",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716220787/Portfolio/Proyectos/PokeApi_wjlgwz.png",
    videoURL: "https://www.youtube.com/embed/T-SNhqNqT18?si=4rXnCZCp7hPYdGnX",
    gitHubURL: "https://github.com/AdrianOrtizz/PI-Pokemon-main",
    description:
      "This project was my individual project during my Henry degree. It is a web page where the user enters and can see the pokemon pokedex and can filter and sort it. You can also see the details of a selected pokemon. To do this project I used the pokeapi (https://pokeapi.co/) and technologies such as HTML, CSS, JavaScript, React, Redux, NodeJS, Sequelize and PostgreSQL.",
  },
  {
    name: "Uuid Store",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716220240/Portfolio/Proyectos/UuidStore_ljsy1m.png",
    videoURL: "https://www.youtube.com/embed/wOM3vOVKjNI?si=kJIKyTKCcvquJl-Z",
    gitHubURL: "https://github.com/Agus-Albarracin/uuid-store",
    description:
      "Uuid Store is my final Henry project. It is a sneaker e-commerce made with HTML, CSS, JavaScript, React, Redux, NodeJS, PostgreSQL and Sequelize. In this project I learned to work as a team and to work with libraries that were new to me (formik, nodemailer, among others). I worked mainly in the frontend area, directing the group and organizing the tasks to be carried out.",
  },
  {
    name: "Rick and Morty App",
    imgURL:
      "https://res.cloudinary.com/djd7b0upe/image/upload/v1716227266/Portfolio/Proyectos/RickAndMortyApp_muzmnt.png",
    videoURL: "https://www.youtube.com/embed/AZ5fdddHnS4?si=0lYgZGk4yvImoB8K",
    gitHubURL: "https://github.com/AdrianOrtizz/PI_Rick_And_Morty",
    description:
      "This was my first project in Henry's bootcamp, it is a page where the user can register and log in to search for Rick And Morty characters and add them to favorites, where they can filter and sort them",
  },
];
