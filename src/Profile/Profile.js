import React from "react";
import Button from "react-bootstrap/Button";
import  propTypes  from "prop-types";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <p> {props.bio} </p>
      <h1> {props.fullName}</h1>
      <h2> {props.profession}</h2>
      {props.children}

      <Button onClick={()=> props.showAlert(props.fullName)}>Click</Button>

      <h1>  {props.description}</h1>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  description : "No data description"
}

Profile.propTypes = {
  fullName : propTypes.string,
  bio: propTypes.string

}