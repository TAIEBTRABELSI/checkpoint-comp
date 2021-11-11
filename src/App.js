// import logo from './logo.svg';
import "./App.css";
import Profile from "./Profile/Profile.js";
import Image from "./Image.jpg";


function App() {

 function showAlert(name) {

  return alert (name)

 }


  return (
    <div className="App">
      <Profile
        fullName="taieb trabelsi"
        bio="Learn more and do more"
        profession="Web development"
        showAlert={showAlert}
        description="my description"
      >
        <div>
          <img src={Image} alt="children props" width="200px" />
        </div>
      </Profile>

    </div>


  );
}

export default App;