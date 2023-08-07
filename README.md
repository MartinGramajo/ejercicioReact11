# Proyecto en React - Consumiendo API

En este proyecto lo que hicimos fue crear una app que muestra por pantalla una lista de noticias, consumiendo la API **https://newsdata.io/**.

La App cuenta con un selector por categorías de noticias, el cual al ser elegidos por el usuario nos traen los datos de la noticia, mostrando por pantalla la lista de noticias relacionada con la elección en distintas cards.

Cada una de las noticias esta trabajada de forma tal que el background de la card cambia de color dependiendo de la categoría de la noticia.

Ademas de hacer la re dirección a la fuente de la noticia.

Ademas en caso de no existir ningún tipo de noticia relacionada con la categoría seleccionada por el usuario
se muestra una card por pantalla con el mensaje:

> 'No hay noticias relacionadas con esa categoría o país. Por favor intenta con otra categoría o país!'

## Tecnologias / Herramientas ⚙

- React
- React-Bootstrap

## Requisitos ✅

- Crear una aplicación web con react, que consuma la API provista por https://newsapi.org/ o https://newsdata.io/docs , la aplicación debe tener la siguiente estructura:

![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1690660841/Captura_de_pantalla_2023-07-29_165936_sgrfa9.png)

- Componentes:

1. Titulo
2. Formulario (este contiene el select)
3. ListaNoticia
4. Noticia

- Desde el select superior, debe poder elegir las diferentes categorías (provistas por la api ver en la documentación) y cargar en cards las mismas.

- Modifica la web anterior permitiendo que el usuario seleccione el país y la categoría de las noticias que quiere ver.

> **NOTA**:la api newsapi funciona solo en forma local y no en un proyecto de producción, si quieren deployar el proyecto en netlify usar newsdata

> **IMPORTANTE**: Para que funcione el proyecto en su Pc se debe hacer el npm i para poder traer los modules de bootstrap y todo lo necesario para poder darle el inicio al proyecto.

## Como Clonar el repositorio 💻

```bash
Agrego el link de mi repo [repositorio](https://github.com/MartinGramajo/ejercicio11.git)

git clone https://github.com/MartinGramajo/ejercicio11.git
```

## Como contribuir con el repositorio 🤝

Para contribuir en el proyecto debe ponerse en contacto al siguiente mail: **martingramajo08@gmail.com**

## Autores 🤺

1. Mago

## Licencia 📃

copyright (c) 2023
