import React, { useState } from "react";

export default function Classes() {
  const [classInfo, setClassInfo] = useState({
    title: "Why Are Your Yoga?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae...",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00pm",
      "Monday-Tuesday: 8:00am - 10:00pm",
      "Wednesday-Friday: 8:00am - 10:00pm",
    ],
    image: "img/yoga.jpg",
  });

  const handleButtonClick = (classType) => {
    switch (classType) {
      case "yoga":
        setClassInfo({
          title: "Why Are Your Yoga?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          schedule: [
            "Saturday-Sunday: 8:00am - 10:00pm",
            "Monday-Tuesday: 8:00am - 10:00pm",
            "Wednesday-Friday: 8:00am - 10:00pm",
          ],
          image: "img/yoga.jpg",
        });
        break;
      case "group":
        setClassInfo({
          title: "Why Are Your Group?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          schedule: [
            "Saturday-Sunday: 8:00am - 10:00pm",
            "Monday-Tuesday: 8:00am - 10:00pm",
            "Wednesday-Friday: 8:00am - 10:00pm",
          ],
          image: "img/group.webp",
        });
        break;
      case "solo":
        setClassInfo({
          title: "Why Are Your Solo?",
          description: "In, nihil recusandae...",
          schedule: [
            "Saturday-Sunday: 8:00am - 10:00pm",
            "Monday-Tuesday: 8:00am - 10:00pm",
            "Wednesday-Friday: 8:00am - 10:00pm",
          ],
          image: "img/solo.jpg",
        });
        break;
      case "stretch":
        setClassInfo({
          title: "Why Are Your Stretch?",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
          schedule: [
            "Saturday-Sunday: 8:00am - 10:00pm",
            "Monday-Tuesday: 8:00am - 10:00pm",
            "Wednesday-Friday: 8:00am - 10:00pm",
          ],
          image: "img/stret.webp",
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="classes" id="classes">
        <div className="class-container">
          <div className="bg-shape" />
          <h2>OUR CLASSES</h2>
          <div className="line" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="button-container">
            <button onClick={() => handleButtonClick("yoga")}>Yoga</button>
            <button onClick={() => handleButtonClick("group")}>Group</button>
            <button onClick={() => handleButtonClick("solo")}>Solo</button>
            <button onClick={() => handleButtonClick("stretch")}>
              Stretching
            </button>
          </div>
          <div id="features-container">
            <div>
              <h6>{classInfo.title}</h6>
              <p>{classInfo.description}</p>
              <h6>When comes Your Time.</h6>
              {classInfo.schedule.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <img src={classInfo.image} alt="Class" />
          </div>
        </div>
      </section>
    </>
  );
}
