import React, { useEffect, useState } from 'react'
import './Profile.css'
import badge from '../../assets/badge.png'
import axios from 'axios'

const Profile = () => {
    const [posts, changePosts] = useState([]);
    const [conp, chp] = useState(false);


    useEffect(() => {
        axios.get('http://www.localhost:80/posts/' + localStorage.getItem('userId'))
            .then(result => {
                console.log(result.data.message);
                changePosts(result.data.message);
            })
            .catch(err => {
                console.log(err);
            })
        if (localStorage.getItem('userType') == 'user') chp(true)
    }, [])



    return (
        <section id='user_profile'>
            <main id='profile-head' className='flex align-center'>
                <div id='p-userDp'>
                    <img src={localStorage.getItem('userDp_url')} alt="" />
                </div>
                <div id='p-userData'>
                    <div className='flex align-center' style={{ gap: '10px' }}>
                        <h1>{localStorage.getItem('userName')}</h1>
                        <img src={badge} alt="" height={"40px"} />
                    </div>
                    <h3>{localStorage.getItem('userEmail')}</h3>
                    <p>{localStorage.getItem('userDescription')}</p>
                </div>
            </main>
            <section id='my-posts'>
                {conp ?
                    <h1 className='flex justify-center align-center font-xxl' style={{color: 'gray'}}>There are no posts.</h1>
                    :
                    <>
                        {posts?.map(data => <Post key={data._id} detail={data} />)}
                    </>
                }
            </section>
        </section>
    )
}

const Post = (props) => {

    const [userData, changeData] = useState([]);

    useEffect(() => {
        axios.get('http://www.localhost:80/user/' + props.detail.userID)
            .then(result => {
                console.log(result.data.message);
                changeData(result.data.message[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const deleteHandler = () => {
        let con = confirm('Really want to delete post.');

        if (con) {
            let imageUrl = props.detail.postImageUrl;
            let aftersplit = imageUrl.split('/');
            let imageNameWithType = aftersplit[aftersplit.length - 1];
            let imageName = imageNameWithType.split('.')[0];

            axios.delete('http://www.localhost:80/posts/delete/?' + 'imageId=' + props.detail._id + '&imageName=' + imageName)
                .then(result => {
                    window.location.reload();
                })
                .catch(err => {
                    alert('Post Not Deleted');
                })
        }

    }


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
                <div className='btn-box-p flex'>
                    <button className='btn btn-bg'>Edit</button>
                    <button className='btn btn-bg' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            <div>
                <img id='postImage' src={props.detail.postImageUrl} alt="img" />
            </div>
        </div>
    )
}

export default Profile