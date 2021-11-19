/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import React, { FC, useContext, useState, useEffect } from 'react';
import { getDownloadURL } from 'firebase/storage';
import { storage, ref } from '../api/index';

export interface IPosts {
  id: string;
  email: string;
  date: any;
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

  function addPost(newPost: IPosts) {
    ref
      .doc(newPost.id)
      .set(newPost)
      .catch((err) => {
        toast.error(err);
      });
  }

  const uploadPic = (file: any, email: string) => {
    const newId = uuidv4();
    setId(newId);
    setUser(email);
    const storageRef = storage.ref(`pics/${newId}`);
    const uploadTask = storageRef.putString(file, 'base64', { contentType: 'image/png' });
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast(`Upload is ${progress} % done`);
      },
      (error) => {
        toast.error(error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFilePath(downloadURL);
          toast.success('Uploaded!');
        });
      });
  };

  useEffect(() => {
    if (!id) return;
    addPost({
      id,
      email: user,
      date: Date.now(),
      path: filePath,
    });
  }, [filePath]);

  const value: IPicsContext = {
    uploadPic,
    addPost,
    posts,
  };

  return (
    <PicsContext.Provider value={value}>
      <Toaster position='top-right' />
      { children }
    </PicsContext.Provider>
  );
};

export default PicsProvider;
