import React from "react";
import { Film } from "../../../type";
import FilmItem from "./FilmItem";

interface Props {
  films: Film[];
  changeName: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  removeFilm: (id: string) => void;
}

const Films: React.FC<Props> = React.memo(
  ({ films, changeName, removeFilm }) => {
    return (
      <>
        <div>To watch list:</div>
        {films.map((film) => (
          <FilmItem
            key={film.id}
            id={film.id}
            filmName={film.filmName}
            onNameChange={(event) => changeName(event, film.id)}
            onDelete={() => removeFilm(film.id)}
          />
        ))}
      </>
    );
  }
);

export default Films;
