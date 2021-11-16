import React, { FC, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useAuth } from '../../contexts/AuthContext';
import { IPosts, usePics } from '../../contexts/PicsContext';
import './Dashboard.css';

const Dashboard: FC = () => {
  const { currentUser } = useAuth();
  const { posts, getPosts } = usePics();
  const users = Array.from(new Set(posts?.map((post) => post.email)));
  const [userSelectValue, setUserSelectValue] = useState(currentUser);

  useEffect(() => {
    getPosts();
  }, []);

  const handleUserSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserSelectValue(e.target.value);
  };

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='main-content'>
          <h2>
            Filter pics by user:
          </h2>
          <select className='select-user' value={userSelectValue} onChange={handleUserSelectChange}>
            {
              users.map((user) => <option key={user} value={user}>{user}</option>)
            }
          </select>
        </div>
        <ul className='pics-list'>
          {
          posts ? posts?.filter((post: IPosts) => post.email.indexOf(userSelectValue) !== -1)
            .map((post: IPosts) => {
              return (<li key={post.id} className='pic-item'><img src={post.path} alt='pic from firebase' /></li>);
            }) : <h3>Loading...</h3>
          }
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
