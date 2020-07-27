import * as React from 'react';
import { useState } from 'react';
import MainPresenter from '../Presenter/Main/MainPresenter';
import axios from 'axios';
import cookies from "js-cookie";
import Endpoint from '../config/Endpoint';
import {useHistory} from 'react-router'

const MainContainer = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const doLogin = (username: string, password: string) => {
    console.log(username, password);
    console.log(document.cookie);
    axios.post("http://localhost:8080/user/login", {
      username, password
    },
      { withCredentials: true })
      .then(response => {
        return response.data;
      }).then(data => {
        if(data.response==="success"){
          alert("로그인 성공");
        }  
      }).catch(error => {
        console.error(error);
      });

  }

  const doTest = () => {
    history.push("/signup");
  }


  return (
    <div>
      <MainPresenter
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        doLogin={doLogin}
        doTest={doTest}
      />

    </div>
  )
}

export default MainContainer