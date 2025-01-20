const Form = () => {
    return (
      <>
        <div className="body">
          <div className="login-box">
            <h1 class="title">Login to your account</h1>

            <form action="#">
              <div className="input-group">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email address" />
              </div>

              <button type="submit">Log in</button>
            </form>
          </div>
        </div>
      </>
    );
}

export default Form