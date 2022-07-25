import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import './App.scss'
import Header from './components/header/header';
import LeftSide from './pages/left-side/left-side';
import Main from './pages/main/main';
import Register from './pages/register';
import instance from './pages/register/settings';
import Login from './pages/login/login'

const App = () => {
  //? main get 
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [home, setHome] = useState(true)


  //! register post
  const [username, setUsername] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // ! login post
  const [loginname, setLoginname] = useState('')
  const [loginpassword, setLoginpassword] = useState('')

  // * search Panel
  const [input, setInput] = useState('')

  // ! category panel
  const [category, setCategory] = useState('')

  //? main get 
  useEffect(() => {
    axios.get('https://ololo.pythonanywhere.com/api/programer/')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  useEffect(() => {
    console.log("home", data2);
    setData2(data)
  }, [home])
  console.log(home);

  //! register post
  const handleSubmit = (e) => {
    e.preventDefault()
    instance.post('register/', {
      username: username,
      number: number,
      email: email,
      password: password
    })
      .then(res => console.log(res))
    window.location.reload()
  }

  const handleSignin = () => {
    // e.preventDefault()
    // instance.get('register/', {
    //   email: loginname,
    //   password: loginpassword
    // })
    //   .then(response => console.log(response))
  }


  // * search Panel
  const handleSearch = () => {
    setData2(data.filter(item => (item.category).toUpperCase().indexOf(input.toUpperCase()) > -1))
    console.log(data);
  }

  // ! category panel
  useEffect(() => {
    setData2(data.filter(item => (item.category).toUpperCase().indexOf(category.toUpperCase()) > -1))
    console.log("category", category, 'DATA', data2);
  }, [category])



  return (
    <div className='App'>
      <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted >
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="header">
          <Header
            handleSearch={handleSearch}
            setInput={setInput}
            setHome={setHome}
            home={home}
            input={input}
          />
        </div>
        <div className="wrapper">
          <div className="left-side">
            <LeftSide
              setCategory={setCategory}
            />
          </div>
          <div className="main-container">
            <Routes>
              <Route path='/' element={<Main
                data2={data2}
              />} />
              <Route path="/register" element={<Register
                setUsername={setUsername}
                setNumber={setNumber}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                username={username}
                number={number}
                email={email}
                password={password}
              />} />
              <Route path='/login' element={<Login
                setLoginname={setLoginname}
                setLoginpassword={setLoginpassword}
                loginname={loginname}
                loginpassword={loginpassword}
                handleSignin={handleSignin}
              />} />
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;