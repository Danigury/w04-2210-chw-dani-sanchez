import "bootstrap/dist/css/bootstrap.min.css";

const FormTwo = () => {
  return (
    <form>
      <div className="App formTwo">
        <h1>FORM</h1>
        <div className="mb-2 col-sm-10">
          <label htmlFor="username" className="form-label">
            UserName
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
        <label for="inputPassword2" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword2" />
        </div>
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default FormTwo;
