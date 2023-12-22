import React, { useState } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";

import "./VacationTimeline.css";

const VacationTimeline = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Foo" },
    { id: 4, name: "Bar" },
    { id: 5, name: "Eric" },
  ]);

  const [vacations, setVacations] = useState([
    {
      id: 1,
      personId: 1,
      type: "Vacation",
      status: "Approved",
      start_time: new Date(2023, 11, 21),
      end_time: new Date(2023, 11, 30),
    },
    {
      id: 2,
      personId: 2,
      type: "Vacation",
      status: "Approved",
      start_time: new Date(2023, 11, 23),
      end_time: new Date(2024, 1, 15),
    },
    {
      id: 3,
      personId: 3,
      type: "Absence",
      status: "Intention",
      start_time: new Date(2024, 0, 10),
      end_time: new Date(2024, 1, 15),
    },
    {
      id: 4,
      personId: 4,
      type: "Vacation",
      status: "Intention",
      start_time: new Date(2024, 0, 10),
      end_time: new Date(2024, 0, 28),
    },
    {
      id: 5,
      personId: 5,
      type: "Absence",
      status: "Approved",
      start_time: new Date(2023, 11, 1),
      end_time: new Date(2023, 11, 28),
    },
  ]);

  const [formData, setFormData] = useState({
    personName: "",
    start_time: "",
    end_time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddVacation = () => {
    const { personName, start_time, end_time } = formData;

    if (!personName || !start_time || !end_time) {
      alert("Fill all the fields to add a new vacation!");
      return;
    }

    const start = new Date(start_time);
    const end = new Date(end_time);

    if (start > end) {
      alert("End date must be higher than the start date!");
      return;
    }

    const person = people.find((person) => person.name === formData.personName);

    if (!person) {
      const newPerson = {
        id: people.length + 1,
        name: formData.personName,
      };

      setPeople([...people, newPerson]);
    }

    const newVacation = {
      id: vacations.length + 1,
      personId: person ? person.id : people.length + 1, 
      type: "Vacation",
      status: "Intention",
      start_time: new Date(formData.start_time),
      end_time: new Date(formData.end_time),
    };
    
    setVacations([...vacations, newVacation]);

    setFormData({
      personName: "",
      start_time: "",
      end_time: "",
    });
  };

  return (
    <div>
      <br></br>

      <div className="vacation-timeline-container ">
        <label>
          Name:
          <input
            type="text"
            name="personName"
            onChange={handleInputChange}
            value={formData.personName}
          />
        </label>
        <label>
          Start at:
          <input
            type="date"
            name="start_time"
            onChange={handleInputChange}
            value={formData.start_time}
          />
        </label>
        <label>
          End at:
          <input
            type="date"
            name="end_time"
            onChange={handleInputChange}
            value={formData.end_time}
          />
        </label>
        <button onClick={handleAddVacation}>Add vacation</button>
      </div>

      <br></br>

      <Timeline
        groups={people.map((person) => ({
          id: person.id,
          title: person.name,
        }))}
        items={vacations.map((vacation) => ({
          id: vacation.id,
          group: vacation.personId,
          title: vacation.type,
          start_time: vacation.start_time,
          end_time: vacation.end_time,
          status: vacation.status,
        }))}
        defaultTimeStart={new Date(2023, 9, 1)}
        defaultTimeEnd={new Date(2024, 3, 30)}
        itemRenderer={({ item, getItemProps }) => (
          <div
            {...getItemProps({
              style: {
                backgroundColor:
                  item.status === "Approved" ? "green" : "yellow",
                color: item.status === "Intention" ? "black" : "white",
                borderRadius: "3px",
                border: "1px solid #aaa",
                padding: "2px",
              },
            })}
          >
            {item.title}
          </div>
        )}
      />

      <br></br>
    </div>
  );
};

export default VacationTimeline;
