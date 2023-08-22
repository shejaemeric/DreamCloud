import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../base";
import { showToast } from "../utils";

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify({ ...result }));
        navigate("/dashboard");
      })
      .catch((error) => {
        showToast(error.message, "error");
      });
  };

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("user"));
    if (profile) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div>
      <div className="centered-div">
        <button className="custom-button" onClick={login}>
          Login With Gmail
        </button>
      </div>
    </div>
  );
};

export default Login;
