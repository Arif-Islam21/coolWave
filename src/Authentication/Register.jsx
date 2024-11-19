import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import img from "/Water.png";

const Register = () => {
  return (
    <div className="bg-base-200">
      <div className="hero  container mx-auto min-h-screen">
        <div className="hero-content w-full max-w-md">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="flex justify-center items-center gap-4 mt-6">
              <img src={img} className="size-16" alt="" />
              <h2 className="lg:text-4xl text-2xl font-bold ">Register Now</h2>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider">Login With social media</div>
            <div className="mx-6">
              <button className="btn btn-block btn-neutral  my-6  ">
                <FcGoogle size={30} />
              </button>
              <p className="text-center mb-4 ">
                Already have an account?{" "}
                <Link to="/login" className="btn-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
