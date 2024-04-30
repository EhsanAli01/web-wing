import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.gif'

const Home = () => {
  const [isPermited, setPermit] = useState(false);
  const [posts, changePosts] = useState([]);
  const [isloading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem('userType');
    if (userType == 'owner' || userType == 'partner') setPermit(true);
    else setPermit(false);

    axios.get("https://backend-phi-red.vercel.app/posts")
      .then(result => {
        console.log(result.data.message);
        changePosts(result.data.message);
        setloading(false);
      })
      .catch(err => {
        console.log(err);
        setloading(false);
      })
  }, [])

  return (
    <>
      <section id='HomeBox' className='flex f-col'>
        {!isPermited ?
          <div id='home-info' className='font-xxl flex justify-center align-center post-not-allowed'>
            <p>
              Only official partners can post here.
            </p>
            {/* <button className='btn btn-bg'>Request to become a partner.</button> */}
          </div>
          :
          <div id='home-info' className='font-xxl flex j-spc-between align-center post-allowed'>
            <p>
              Create a new post.
            </p>
            <button className='btn btn-bg-success' onClick={() => { navigate('/main/post') }}>Post now</button>
          </div>
        }
        {isloading ?
          <img className='loader' src={loader} alt="" />
          : <>
            {posts?.map(data => <Post key={data._id} detail={data} />)}
          </>
        }
      </section>
    </>
  )
}

const Post = (props) => {

  const [userData, changeData] = useState([]);

  useEffect(() => {
    axios.get('https://backend-phi-red.vercel.app/user/' + props.detail.userID)
      .then(result => {
        console.log(result.data.message);
        changeData(result.data.message[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div id='new-post' className='flex j-spc-between align-center'>
      <div>
        <div id='u_data' className='flex jutify-center align-center'>
          <div id='u_data_dp'>
            <img src={userData.userDP_url} alt="" />
          </div>
          <div>
            <h3>{userData.userName}</h3>
            <p>{userData.userType}</p>
          </div>
        </div>
        <h1 className='font-xxl'>{props.detail.imageTile}</h1>
        <p>{props.detail.imageDescription}</p>
      </div>
      <div>
        <img id='postImage' src={props.detail.postImageUrl} alt="img" />
      </div>
    </div>
  )
}

export default Home