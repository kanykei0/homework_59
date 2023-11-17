import React, { useState } from "react";

interface Props {
  onAddFilm: (film: { id: string; filmName: string }) => void;
}

const FilmForm: React.FC<Props> = ({ onAddFilm }) => {
  const [filmName, setFilmName] = useState("");

  const changeFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilmName(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newFilm = {
      id: String(Date.now()),
      filmName: filmName,
    };
    onAddFilm(newFilm);
    setFilmName("");
  };

  return (
    <form className="col-4 row my-3" onSubmit={onFormSubmit}>
      <div className="col-9">
        <input
          className="form-control"
          type="text"
          name="film"
          id="film"
          required
          value={filmName}
          onChange={changeFilm}
        />
      </div>
      <div className="col">
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default FilmForm;
