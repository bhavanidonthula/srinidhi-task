import React from "react";

const UserData = props => {
  const fetchedData = props;
  console.log("user data comp ", fetchedData);
  const onChangeHandler = event => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Name"
        value={props.name}
      />
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Email"
        value={props.email}
      />
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Company"
        value={props.company.name}
      />
    </div>
  );
};

export default UserData;
