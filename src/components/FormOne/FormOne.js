import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import Context from "../Context/Context";

const FormOne = () => {
  const { nextPage, userData, onChange } = useContext(Context);
  const handleSubmit = (event) => {
    event.preventDefault();
    nextPage();
  };

  const years = false;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Personal data</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          value={userData.name}
          id="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="surname" className="form-label">
          Surname
        </label>
        <input
          type="text"
          value={userData.surname}
          id="surname"
          className="form-control"
          placeholder="Enter your surname"
          autoComplete="off"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="birthday" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          id="birthday"
          className="form-control"
          placeholder="Enter your birthday"
          autoComplete="off"
          onChange={onChange}
          required
        />
        {years ? <p> You have {years} years.</p> : ""}
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={userData.email}
          className="form-control"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          onChange={onChange}
          required
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline-primary d-block w-10 m-2"
        // onClick={() => {}}
      />
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </form>
  );
};

export default FormOne;
