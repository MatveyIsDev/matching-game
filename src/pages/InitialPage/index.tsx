import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {assignName} from '../../redux/actions';
import {Button} from '../../GeneralStyles';
import {InputComponent} from './styles';

interface InputChangeEvent extends React.SyntheticEvent {
  target: HTMLInputElement;
}

export const InitialPage = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <InputComponent
        placeholder={'Enter your name here'}
        value={inputValue}
        onChange={handleInputChange}
      />

      <Button
        onClick={() => {
          if (inputValue.trim() !== '') {
            dispatch(assignName(inputValue));
          }
        }}
        to="/game"
      >
        Start game
      </Button>
    </>
  );
};
