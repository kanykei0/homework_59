const FilmForm = () => {
  return (
    <form className="col-4 row my-3">
      <div className="col-9">
        <input
          className="form-control"
          type="text"
          name="film"
          id="film"
          required
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
