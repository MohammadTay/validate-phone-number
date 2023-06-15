// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNHlguUZMlMpMCAjQxAYuAj3xOmzfrV9c",
  authDomain: "phone-dcbd2.firebaseapp.com",
  projectId: "phone-dcbd2",
  storageBucket: "phone-dcbd2.appspot.com",
  messagingSenderId: "201422767948",
  appId: "1:201422767948:web:909cc7b11055293a7d31e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)




const upload = async (file) => {
  const date = new Date().getTime();
  const storageRef = ref(storage, `${"liver" + date}`);
  await uploadBytesResumable(storageRef, file).then(() => {
    getDownloadURL(storageRef).then(async (url) => {
      try {
        return url;
      } catch (err) {
        console.log(err);

      }
    })
  })
};

const handleUpload = async () => {
  setUploading(true);
  try {
    const cover = await upload(singleFile);

    const images = await Promise.all(
      [...files].map(async (file) => {
        const url = await upload(file);
        return url;
      })
    );
    setUploading(false);
    dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
  } catch (err) {
    console.log(err);
  }
};


