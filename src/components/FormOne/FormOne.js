import "bootstrap/dist/css/bootstrap.min.css";

const FormOne = () => {
  return (
    <form>
      <h1>Personal data</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="first-name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="first-name"
          id="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="last-name" className="form-label">
          Last name
        </label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          className="form-control"
          placeholder="Enter your last name"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="birthday" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          className="form-control"
          placeholder="birthday"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-2 col-sm-10">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary d-block w-10 m-2"
      >
        Submit
      </button>
    </form>
  );
};

export default FormOne;
