import React from "react";
import UserVector from "./assets/user.svg";
import Signup from "./components/Signup";
import "./App.css";
function App() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Signup />
                </div>
                <div className="col-md-7">
                    <img
                        className="img-fluid w-100"
                        src={UserVector}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
