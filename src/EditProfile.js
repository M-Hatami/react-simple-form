import React, { useState } from "react";

export default function EditProfile() {
  //On the first render, JS trys to get the value of a property from the profile object that has not been defined causes JavaScript to throw an error, so we pass an empty {} object to useState to defend against these errors:
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ""}
        name="firstName"
        type="text"
        placeholder="اسم"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ""}
        type="text"
        name="lastName"
        placeholder="اسم خانوادگی"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ""}
        type="date"
        name="bday"
        lang="fa-IR"
        calendar="persian"
        onChange={handleChange}
      />
      <input
        value={profile.password || ""}
        type="password"
        name="password"
        placeholder="رمزعبور"
        onChange={handleChange}
      />
      <button type="submit">تسلیم</button>
    </form>
  );
}
