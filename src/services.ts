import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const addTransaction = async ({
  userId,
  date,
  value,
  category,
  description,
}: {
  userId: string;
  date: Date;
  description: string;
  value: number;
  category: string;
}) => {
  const allCollection = await (
    await firestore().collection('users').doc(userId).get()
  ).data();
  const transactions = allCollection?.transactions || [];

  transactions.push({
    id: userId,
    date,
    value,
    category,
    description,
  });

  try {
    await firestore().collection('users').doc(userId).set({
      transactions,
      total: '',
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllData = async (
  userId: string,
  cb: (
    documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) => void,
) => {
  await firestore().collection('users').doc(userId).onSnapshot(cb);
};

export const getNegativeTransactions = async (
  userId: string,
  cb: (
    documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) => void,
) => {
  await firestore().collection('users').doc(userId).onSnapshot(cb);
};
export const getPositiveTransactions = async (
  userId: string,
  cb: (
    documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>,
  ) => void,
) => {
  await firestore().collection('users').doc(userId).onSnapshot(cb);
};
