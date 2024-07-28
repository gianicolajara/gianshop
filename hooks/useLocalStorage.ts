import { useEffect, useState } from "react";

const useLocalStorage = ({ name }: { name: string }) => {
  const localStorage = window.localStorage;

  const [valueRaw, setValueRaw] = useState<object | null>({});

  const handleChangeValue = (value: object) => {
    setValueRaw(value);
  };

  const createItem = ({ name, value }: { name: string; value: object }) => {
    return {
      value: window.localStorage.setItem(name, JSON.stringify(value)),
      isOk: true,
    };
  };

  const getItem = ({ name }: { name: string }) => {
    const item = (localStorage.getItem(name) ??
      JSON.parse(localStorage.getItem(name) as string)) as object | null;

    return item
      ? {
          value: item,
          isOk: true,
        }
      : { value: null, isOk: false };
  };

  const deleteItem = ({ name }: { name: string }) => {
    const item = localStorage.getItem(name);

    item ?? localStorage.removeItem(name);

    return {
      isOk: !!item,
    };
  };

  const clearAll = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const { isOk, value } = getItem({ name });
    isOk ?? setValueRaw(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    createItem({ name, value: valueRaw || {} });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueRaw]);

  return [valueRaw, handleChangeValue] as [
    object | null,
    (value: object) => void
  ];
};

export default useLocalStorage;
