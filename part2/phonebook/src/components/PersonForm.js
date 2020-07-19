import React from "react";

const PersonForm = ({ nameHandler, phoneHander, addHandler, name, phone }) => {
  const handleNameChange = (event) => nameHandler(event);
  const handlePhoneNumberChange = (event) => phoneHander(event);
  const addPerson = (event) => addHandler(event);

  return (
    <form>
      <div>
        name: <input onChange={handleNameChange} value={name} />
      </div>
      <div>
        number:
        <input onChange={handlePhoneNumberChange} value={phone} />
      </div>
      <div>
        <button onClick={addPerson} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
