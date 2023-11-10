import React from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.numero}
        </p>
      ))}
    </div>
  );
};

export default Persons;


