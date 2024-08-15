import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-2xl font-bold text-center">SignIn Now!</h1>
        <div className="card  w-full md:w-[400px] shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <small>
              New here?
              <Link
                className="text-base text-center font-medium text-indigo-700"
                to={"/sign-up"}
              >
                Create an account
              </Link>
            </small>
          </form>
          <SocialLogin></SocialLogin>

        </div>

       
      </div>
    </div>
  );
};

export default SignIn;
