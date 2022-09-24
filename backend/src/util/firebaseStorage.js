const { getStorage, ref, getDownloadURL } = require("firebase/storage");

class FirebaseStorage {
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
    this.storage = getStorage(firebaseApp);
  }
  async retrieveDownloadUrl(filePath) {
    const pathReference = ref(this.storage, filePath);
    const url = await getDownloadURL(pathReference);
    return url;
  }
}

exports.FirebaseStorage = FirebaseStorage;
