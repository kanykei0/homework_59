import React from "react";

interface Props {
  id: string;
  filmName: string;
  onNameChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

const FilmItem: React.FC<Props> = React.memo(
  ({ filmName, onNameChange, onDelete }) => {
    return (
      <div className="card my-2">
        <div className="card-body row">
          <div className="col-10">
            <input
              type="text"
              name="filmName"
              value={filmName}
              onChange={onNameChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <button className="btn btn-danger" onClick={onDelete}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default FilmItem;
