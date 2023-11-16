import { useState } from "react";
import FilmForm from "./components/ToWatch/FilmForm/FilmForm";
import Films from "./components/ToWatch/Films/Films";
import { Film } from "./type";

function App() {
  const [films, setFilms] = useState<Film[]>([
    { id: "1", filmName: "Naruto" },
    { id: "2", filmName: "Kill la Kill" },
    { id: "3", filmName: "Boku no Piko" },
  ]);

  const removeFilm = () => {
    console.log("click");
  };

  const changeFilmName = () => {
    console.log("click");
  };

  return (
    <div className="container">
      <div>App</div>
      <FilmForm />
      <div className="bg-white col-6 px-5 py-4 rounded">
        <Films
          films={films}
          changeName={changeFilmName}
          removeFilm={removeFilm}
        />
      </div>
    </div>
  );
}

export default App;
