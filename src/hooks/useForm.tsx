import {useState} from 'react';

export const useForm = <T extends Object>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const onChange = (value: T[keyof T], field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    form: state,
    onChange,
  };
};
