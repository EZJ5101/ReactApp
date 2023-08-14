import React, { useState, useEffect } from "react";
import "./assets/Style.css";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';


// const App = () => {
// 	return (
// 		<div>
// 			<h1>EZ Med Transport Co. </h1>
// 			<Navbar />
			
// 			<Login/>
//             <Profile/>
//             {/* <Signup/> */}
// 		</div>
// 	);
// };

function App() {
	const [message, setMessage] = useState("");
  
	useEffect(() => {
	  fetch("http://localhost:8000/message")
		.then((res) => res.json())
		.then((data) => setMessage(data.message));
	}, []);
  
	return (
	  <div className="App">
		<h1>{message}</h1>
			<Navbar />
			
			{/* <Login/>
            <Profile/>
            <SignUp/> */}
	  </div>
	);
  };

export default App;
