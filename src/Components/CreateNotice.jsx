import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateNotice.css";
const CreateNotice = () => {
  const [post, setPost] = useState("");
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://crimecheckbackendassign-eiy1.vercel.app/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let username = localStorage.getItem("username");
let username1 =JSON.parse(username);
console.log(username1.inputValue)

  const postData = () => {
    const payload = {
      username: username1.inputValue,
      post: post,
    };
    axios.post("https://crimecheckbackendassign-eiy1.vercel.app/createpost", payload);
    getData();
   alert("Succesfully add notice data")
    // setPost("");


  };
  //ui, alphnumeric pending we will do today
  return (
    <div className="mainDiv">
      <div>
        <textarea
          placeholder="Enter notice data" value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button id="btn" onClick={postData}>Submit</button>
      </div>
      <div >
        {data.map((elem) => {
          return (
            <div id="singlePost">
              <h4>{elem.post}</h4>
              <div id="div">
                <p>{elem.username}</p>
                <p >{elem.createdtime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateNotice;
