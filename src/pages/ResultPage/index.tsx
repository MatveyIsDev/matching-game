import {useSelector} from 'react-redux';
import {StateType} from '../../redux/types';
import {Button} from '../../GeneralStyles';
import {Wrapper} from './styles';

export const ResultPage = () => {
  const {name, count} = useSelector((state: StateType) => state);
  return (
    <Wrapper>
      Congratulations {name}! Your result: {count}
      <Button to="/">start new game</Button>
    </Wrapper>
  );
};
