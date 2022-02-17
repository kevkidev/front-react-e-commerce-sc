import React, { useEffect, useState } from "react";
import "./App.scss";

interface IFriend {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const profiles = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

function App() {
  const [friends, setFriends] = useState<IFriend[]>([]);
  // const [photos, setPhotos] = useState<string[]>([]);
  profiles;
  useEffect(() => {
    fetch("https://fake-express-restfull.herokuapp.com/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setFriends(data.data);
        // console.log(photos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data[0]);
  //       setPhotos(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="app">
      {/* {photos} */}
      {friends.map((f) => {
        const fullname = f.first_name + "" + f.last_name;
        return (
          <div key={f.id}>
            <img src={f.avatar} alt={fullname + " avatar"} />
            <span>{fullname}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
