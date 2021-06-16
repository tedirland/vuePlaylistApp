import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id);

  const unsub = documentRef.onSnapshot(
    doc => {
      //does this document exist?
      if (doc.data()) {
        // update value
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = 'That playlist does not exist, brah';
      }
    },
    err => {
      console.log(err.message);
      error.value = 'could not fetch playlist';
    }
  );

  watchEffect(onInvalidate => {
    onInvalidate(() => unsub());
  });

  return { error, document };
};

export default getDocument;
