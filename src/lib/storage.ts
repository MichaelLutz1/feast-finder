import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase";

// ... (Firebase initialization from previous step) ...

//Upload a file
export function uploadFile(file: File) {
  const storageRef = ref(storage, `images/${file.name}`); // Creates a unique path

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.error(error);
    },
    () => {
      // Handle successful uploads on complete
      // Get the download URL from the snapshot's metadata
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
}

//Download a file
export async function downloadFile(path: string) {
  const storageRef = ref(storage, path);
  try {
    const url = await getDownloadURL(storageRef);
    //Do something with the url
    console.log("Download URL: " + url)
  } catch (e) {
    console.error("Error while getting download URL", e);
  }
}

