import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import global from "../data/global.json";

const CreateAccount = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAdress]=useState("")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setIsPending(true)
    fetch(`${global.base_api}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        address: address,
        phone: phone,
        password: password,
      }),
    })
      .then((response) => {
        setIsPending(false)
        if (!response.ok) {
          throw new Error("Failed to create an account.");
        }
        alert("Account created")
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error creating account:", error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "400px", height: "500px" }}>
        <div className="card-body d-flex flex-column justify-content-center">
          <h1 className="card-title text-center mb-4">Create Account</h1>
          <form id="create-account-form" onSubmit={handleCreateAccount}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </div>
              <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="address"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="phone"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Create Account
            </button>
            {isPending && <div
              style={{ fontSize: "1.2rem",
              color: "blue",
              marginTop: "13px",
              textAlign: "center",
              fontStyle: "italic",
            }}> Creating account...</div>}
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
