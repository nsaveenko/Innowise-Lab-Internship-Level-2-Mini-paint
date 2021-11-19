import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../api/index';
import { useAuth } from '../../contexts/AuthContext';
import { addPost } from '../../store/action-creators/post';
import Header from '../../components/Header/Header';
import Canvas from '../../components/Canvas/Canvas';
import Tools from '../../components/Tools/Tools';
import './Editor.css';

const Editor: FC = () => {
  const { currentUserEmail } = useAuth();
  const [color, setColor] = useState<string>('#000');
  const [width, setWidth] = useState<string>('5');
  const [tool, setTool] = useState<string>('pen');
  const dispatch = useDispatch();

  const uploadPic = (pic: any) => {
    const id = uuidv4();
    const storageRef = storage.ref(`pics/${id}`);
    const uploadTask = storageRef.putString(pic, 'base64', { contentType: 'image/png' });
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast(`Upload is ${progress} % done`);
      },
      (e) => {
        toast.error(e.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(addPost({
            id,
            email: currentUserEmail,
            path: downloadURL,
            date: Date.now(),
          }));
          toast.success('Uploaded!');
        });
      });
  };

  return (
    <>
      <Toaster position='top-right' />
      <Header />
      <div className='wrapper'>
        <h2>Editor</h2>
        <div className='editor-container'>
          <Tools
            color={color}
            width={width}
            setColor={setColor}
            setWidth={setWidth}
            setTool={setTool}
          />
          <h4 className='tool-title'>
            <strong>Active tool:</strong>
            { tool }
          </h4>
          <Canvas
            width={width}
            color={color}
            tool={tool}
            uploadPic={uploadPic}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
