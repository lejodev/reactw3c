import React, { useState } from "react";

const Form = () => {
  const [userInfo, setUserInfo] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="user"
            id="user"
            value={userInfo.user || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="role"
            id="role"
            value={userInfo.role || ""}
            onChange={handleChange}
          />
        </label>
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          value={userInfo.textarea || ""}
          onChange={handleChange}
        />
        <input type="submit" value="LOGIN" />
      </form>
    </>
  );
};

export default Form;
