import { ref } from '@vue/reactivity';
import { projectStorage } from '../firebase/config';

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async file => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storageRef.put(file);
      url.value = res.ref.getDownloadURL();
    } catch (err) {
      console.log(error.message);
      error.value = err.message;
    }
  };

  return { url, filePath, error, uploadImage };
};

export default useStorage;