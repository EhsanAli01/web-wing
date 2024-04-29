import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/Responsive/res.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Members from './Pages/Our_Members/Members.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import { islogin } from './Util/ChechAuth.jsx'
import Profile from './Pages/Profile/Profile.jsx';
import Post from './Pages/Post/Post.jsx';

const router = createBrowserRouter([
  { path: '', element: <Signup /> },
  { path: 'signup', element: <Signup /> },
  { path: 'login', element: <Login /> },

  {
    path: 'main', loader: islogin, element: <App />, children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'members', element: <Members /> },
      { path: 'contact', element: <Contact /> },
      { path: 'profile', element: <Profile /> },
      { path: 'post', element: <Post /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
