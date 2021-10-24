import "bootstrap/dist/css/bootstrap.min.css";

const FormTwo = () => {
  return (
    <form>
      <h1>Create your Username</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="UserName"
          autoComplete="off"
          required
        />
      </div>
      <div class="mb-2 col-sm-10">
        <label for="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          required
        />
      </div>
      <div class="mb-2 col-sm-10">
        <label for="repeat-password" className="col-sm-2 col-form-label">
          Repeat Password
        </label>
        <input
          type="repeat-password"
          name="repeat-password"
          className="form-control"
          id="repeat-password"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary d-block w-10 m-2"
      >
        Next
      </button>
      <button
        type="submit"
        className="btn btn-outline-secondary d-block w-10 m-2"
      >
        Previous
      </button>
    </form>
  );
};

export default FormTwo;
