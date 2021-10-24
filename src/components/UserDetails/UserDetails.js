import { useContext } from "react";
import Context from "../Context/Context";

const UserDetails = () => {
  const { userData } = useContext(Context);
  return (
    <div className="alert alert-info">
      <h1>Here you have your details</h1>
      <h2>{userData.name}</h2>
      <h2>{userData.surname}</h2>
      <h2>{userData.birthday}</h2>
      <h2>{userData.email}</h2>
      <h2>{userData.username}</h2>
    </div>
  );
};

export default UserDetails;
