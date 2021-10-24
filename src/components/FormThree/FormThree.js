import "bootstrap/dist/css/bootstrap.min.css";

const FormThree = () => {
  return (
    <form>
      <h1>Log In</h1>
      <div className="mb-2 col-sm-10">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="Username"
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
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Remember password
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary d-block w-10 m-2"
      >
        Log In
      </button>
    </form>
  );
};

export default FormThree;
