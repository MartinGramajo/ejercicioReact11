import { useEffect, useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import ListaNoticias from "./components/ListaNoticias";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import { Spinner } from "react-bootstrap";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [category, setCategory] = useState("top");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    consultarApi();
  }, [category]);

  const consultarApi = async () => {
    try {
      setLoading(true);
      let URL_KEY = `https://newsdata.io/api/1/news?apikey=pub_26807d055cc63d04745a09599882a3e24adc3&language=es&category=${category}`;
      const respuesta = await fetch(URL_KEY);
      const dato = await respuesta.json();
      console.log("file: App.jsx:32 ~ consultarApi ~ dato:", dato);
      setNoticias(dato.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Titulo />
      <Formulario handleChangeCategory={handleChangeCategory} />
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border fs1" variant="dark" />
        </div>
      ) : (
        <section className="py-5 container">
          {noticias.length === 0 ? (
            <div className=" text-center card py-4 ">
              <h2>
                No hay noticias relacionadas con esa categoría o país. Por favor
                intenta con otra categoría o país!
              </h2>
            </div>
          ) : (
            <ListaNoticias noticias={noticias} />
          )}
        </section>
      )}
      <Footer />
    </div>
  );
}

export default App;
