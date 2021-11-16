/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { v4 as uuidv4 } from 'uuid';
import React, { FC, useContext, useState, useEffect } from 'react';
import { getDownloadURL } from 'firebase/storage';
import { storage, ref } from '../api/index';

export interface IPosts {
  id: string;
  email: string;
  path: string;
}

export interface IPicsContext {
  uploadPic?: any;
  getPics?: any;
  pics?: any[];
  addPost?: any;
  getPosts?: any;
  posts?: any[];
}

const PicsContext = React.createContext<IPicsContext>({});

export function usePics(): IPicsContext {
  return useContext(PicsContext);
}

const PicsProvider: FC = ({ children }) => {
  const [filePath, setFilePath] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [posts, setPosts] = useState<any[]>([]);

  const uploadPic = (file: any, email: string) => {
    const newId = uuidv4();
    setId(newId);
    setUser(email);
    const storageRef = storage.ref(`pics/${email};${newId}`);
    const uploadTask = storageRef.putString(file, 'base64', { contentType: 'image/png' });
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ', progress, '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log('default');
            break;
        }
      },
      (error) => {
        console.log(error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFilePath(downloadURL);
          console.log('File available at', downloadURL);
        });
      });
  };

  function addPost(newPost: IPosts) {
    ref
      .doc(newPost.id)
      .set(newPost)
      .catch((err) => {
        console.error(err);
      });
  }

  function getPosts() {
    ref
      .get().then((item) => {
        const items = item.docs.map((doc: any) => doc.data());
        setPosts(items);
      });
  }

  useEffect(() => {
    if (!id) return;
    addPost({
      id,
      email: user,
      path: filePath,
    });
  }, [uploadPic]);

  const value: IPicsContext = {
    uploadPic,
    addPost,
    getPosts,
    posts,
  };

  return (
    <PicsContext.Provider value={value}>
      { children }
    </PicsContext.Provider>
  );
};

export default PicsProvider;
