import firebase from 'firebase/compat/app';
import { storage, db } from '../api/index';

export default function uploadPic(file: any) {
  // storage.ref(`pics/${pic.name}`).put(pic).on('state_changed', () => {
  //   storage.ref('pics').child(pic.name).getDownloadURL().then((url) => {
  //     console.log(url);
  //   });
  // });
  const storageRef = storage.ref();
  const fileRef = storageRef.child('pics/pic');
  fileRef.put(file);
  db.collection('pics').doc('7InB7Fop44dBAObQdcfK').update({
    images: firebase.firestore.FieldValue.arrayUnion({
      name: file.name,
      url: fileRef.getDownloadURL(),
    }),
  });
}
