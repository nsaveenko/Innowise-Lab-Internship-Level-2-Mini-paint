/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../api/index';

const uploadPic = (file: any) => {
  const storageRef = storage.ref(`pics/${uuidv4()}`);
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
        console.log('File available at', downloadURL);
      });
    });
};

export default uploadPic;
