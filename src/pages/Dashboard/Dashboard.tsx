import React, { FC, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import { useAuth } from '../../contexts/AuthContext';
import useTypedSelector from '../../hooks/postTypeSelector';
import fetchPosts from '../../store/action-creators/post';
import './Dashboard.css';

const Dashboard: FC = () => {
  const { posts, error, loading } = useTypedSelector((state) => state.post);
  const dispatch = useDispatch();
  const { currentUserEmail } = useAuth();
  const users = Array.from(new Set(posts?.map((post) => post.email)));
  const [userSelectValue, setUserSelectValue] = useState(currentUserEmail);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  if (error) {
    toast.error(error);
  }

  const handleUserSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserSelectValue(e.target.value);
  };

  return (
    <>
      <Toaster position='top-right' />
      <Header />
      <div className='wrapper'>
        <div className='main-content'>
          <h2>Filter pics by users:</h2>
          <select
            className='select-user'
            value={userSelectValue}
            onChange={handleUserSelectChange}
          >
            {users.length > 0 ? (
              users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))
            ) : (
              <option>no users</option>
            )}
          </select>
        </div>
        <ul className='pics-list'>
          {loading && <h3>Loading....</h3>}
          {
            posts
              ?.filter(
                (post) => post.email.indexOf(userSelectValue) !== -1,
              )
              .map((post) => {
                return (
                  <li key={post.id} className='pic-item'>
                    <img src={post.path} alt='pic from firebase' />
                  </li>
                );
              })
          }
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
