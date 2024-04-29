import { useState } from 'react'
import './Post.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader3.gif'

const Post = () => {
  const [isloading, setloading] = useState(false);
  const [postImage, changeImage] = useState(null);
  const [postImageUrl, changeImageUrl] = useState('');
  const [imageTitle , changeTitle] = useState('');
  const [imageDescription , changeDescription] = useState('');
  const navigate = useNavigate();


  const imageHandler = (e) => {
    changeImage(e.target.files[0]);
    changeImageUrl(URL.createObjectURL(e.target.files[0]));
  }

  const SubmitHandler = (e) => {
    setloading(true);
    e.preventDefault();
    const form = new FormData();
    form.append('postPic' , postImage);
    form.append('imageTile' , imageTitle);
    form.append('imageDescription' , imageDescription);

    axios.post('http://www.localhost:80/posts/createNewPost/' + localStorage.getItem('userId') , form)
    .then(result => {
      console.log(result);
      setloading(false);
      navigate('/main');
    })
    .catch(err => {
      console.log(err);
      setloading(false);
    })
  }

  return (
    <form id="post-section" className='flex align-center justify-center' onSubmit={SubmitHandler}>
      <div className='flex f-col align-center justify-center'>
        <h1>Must post according to rules defined in <a href="#">Term's and Conditions</a></h1>
        <input type="file" id='post-inp' className='d-none' onChange={imageHandler} />
        <label id='post-image' htmlFor="post-inp">
          {
            postImageUrl != '' ?
              <div id='post-img'>
                <img src={postImageUrl} alt="image"/>
              </div>
              :
              <div className='flex justify-center align-center'>
                <p>Select Picture</p>
                <i className="fa-solid fa-image"></i>
              </div>
          }
        </label>
        <input type="text" placeholder='Post title' required onChange={(e) => {changeTitle(e.target.value)}} />
        <textarea cols="30" rows="10" placeholder='Post Description' required onChange={(e) => {changeDescription(e.target.value)}}></textarea>
        <button type='submit' className='btn btn-bg-success'>{isloading ? <img src={loader} width={"19px"} alt=''></img> : <>Post</>}</button>
      </div>
    </form>
  )
}

export default Post 