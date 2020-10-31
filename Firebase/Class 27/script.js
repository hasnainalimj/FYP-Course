var firebaseConfig = {
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// uploadImage = () => {
//   const selectedImage = document.querySelector("#txtFile").files[0];
//   const fileName = `post-${new Date().getTime()}`
//   storeInStorage(fileName, selectedImage).then(res => {
//     console.log("uri", res);
//   })
// };

// uploadImage = () => {
//   const txtFile = document.querySelector('#txtFile').files[0]
//   const fileName = `post-${new Date().getTime()}`
//   saveInStorage(fileName, txtFile)
// }

// uploadVideo = () => {
//   const selectedVideo = document.querySelector("#txtFile").files[0];
//   const fileName = `video-${new Date().getTime()}`
//   storeVideo(fileName, selectedVideo).then(res => {
//     console.log("uri", res);
//   })
// };

saveInStorage = (fileName, file) => {
  try {
    storage.ref().child(`/posts/${fileName}.jpg`).put(file).then(() => {
      storage.ref().child(`/posts/${fileName}.jpg`).getDownloadURL().then(uri => {
        console.log("saveInStorage -> uri", uri)
      })
    })
  } catch (error) {
    console.log("saveInStorage -> error", error)
  }
}

storeInStorage = (fileName, file) => {
  try {
    const data = new Promise((resolve, reject) => {
      storage.ref().child(`/posts/${fileName}.jpg`).put(file).then(() => {
        storage.ref().child(`/posts/${fileName}.jpg`).getDownloadURL().then(uri => {
          resolve(uri)
        })
      })
    })
    return data
  } catch (error) {
    console.log("error", error)
  }
};

storeVideo = (fileName, file) => {
  try {
    const data = new Promise((resolve, reject) => {
      storage.ref().child(`/videos/${fileName}.mp4`).put(file).then(() => {
        storage.ref().child(`/videos/${fileName}.mp4`).getDownloadURL().then(uri => {
          resolve(uri)
        })
      })
    })
    return data
  } catch (error) {
    console.log("error", error)
  }
};
