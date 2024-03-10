import React, { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    
  const {signIn} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user)

    })
    .catch(error => console.log(error))
  };




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
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
                autoComplete="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" autoComplete="current-password" />
              <label className="label">
                 <p>Forgot password?</p>
              </label>
            </div>
           
            <div className="form-control mt-6">
              <input  type="submit" value="login" className="btn btn-primary bg-[#2563EB] border-none"/>
            </div>
          </form>
          <p><small>New Here? <Link to="/signUp">Create an account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
