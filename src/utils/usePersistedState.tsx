import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsync } from 'react-async-hook'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];


function usePersistedState<T>(key: string, inicialState: T): Response<T> {
  const [state, setstate] = useState(inicialState);
  const getAsyncStorage = async () => {
    const storageValue = await AsyncStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return inicialState;
    }
  }
  const { loading, result, execute } = useAsync(getAsyncStorage, []);


  const handleSetState = async () => {
    await AsyncStorage.setItem(key, JSON.stringify(state));
  }

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    if (!loading && result) {
      setstate(result);
    }
  }, [result, loading])

  useEffect(() => {
    handleSetState();
  }, [state]);


  return [state, setstate];
}

export default usePersistedState;