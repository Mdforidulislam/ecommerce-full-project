import Container from "../../Container/Container";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-100">
      <Container>
        <div>
          <footer className="footer p-10  text-base-content flex flex-wrap justify-between">
            <nav className="space-y-3">
                <img src="../../assets/7.jpg"  alt="logo" />
                <span>
                    Best information about the company gies here <br/> but now lorem ipsum is
                </span>
                <div className=" list-none flex gap-3 text-3xl">
                        <li className="w-full h-full py-2 px-2 bg-slate-300 rounded-full"><FaFacebook /></li>
                        <li className="w-full h-full py-2 px-2 bg-slate-300 rounded-full"><FaLinkedinIn /></li>
                        <li className="w-full h-full py-2 px-2 bg-slate-300 rounded-full"><FaInstagram /></li>
                        <li className="w-full h-full py-2 px-2 bg-slate-300 rounded-full"><FaTwitter /></li>
                        <li className="w-full h-full py-2 px-2 bg-slate-300 rounded-full"><FaYoutube /></li>
                </div>
            </nav>
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
              <header className="footer-title">Newsletter</header>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary bg-blue-800 text-white join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </footer>
        </div>
        
      </Container>
      <div className="flex justify-between bg-slate-200 ">
              <div className="flex gap-6 justify-between py-3 max-w-screen-xl mx-auto w-full px-6">
              <span>@ 2023 Ecommerce</span>
              <select name="" id="" className="bg-transparent focus:outline-none">
                 <option value="">English</option>
                 <option value="">Bangla</option>
              </select>
              </div>
      </div>
    </div>
  );
};

export default Footer;
