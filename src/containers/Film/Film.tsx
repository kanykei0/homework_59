import { useState } from "react";
import { FilmConf } from "../../type";
import FilmForm from "../../components/ToWatch/FilmForm/FilmForm";
import Films from "../../components/ToWatch/Films/Films";

const Film = () => {
  const [films, setFilms] = useState<FilmConf[]>([
    { id: "1", filmName: "Naruto" },
    { id: "2", filmName: "Kill la Kill" },
    { id: "3", filmName: "Hunter X Hunter" },
  ]);

  const removeFilm = (id: string) => {
    setFilms((prevState) =>
      prevState.filter((film) => {
        return film.id !== id;
      })
    );
  };

  const changeFilmName = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newName = event.target.value;

    setFilms((prevState) =>
      prevState.map((film) => {
        console.log(film);
        if (film.id === id) {
          return { ...film, filmName: newName };
        }
        return film;
      })
    );
  };

  const addFilm = (film: FilmConf) => {
    setFilms((prev) => [...prev, film]);
  };

  return (
    <div>
      <div>Film</div>
      <FilmForm onAddFilm={addFilm} />
      <div className="bg-white px-5 py-4 rounded">
        <Films
          films={films}
          changeName={changeFilmName}
          removeFilm={removeFilm}
        />
      </div>
    </div>
  );
};

export default Film;
