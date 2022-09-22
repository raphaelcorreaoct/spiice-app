import firestore from '@react-native-firebase/firestore';

export const addTransaction = async ({
  userId,
  date,
  value,
  category,
}: {
  userId: string;
  date: Date;
  value: number;
  category: string;
}) => {
  try {
    await firestore().collection('transactions').add({
      id: userId,
      date,
      value,
      category,
    });
  } catch (error) {
    console.log(error);
  }
};
