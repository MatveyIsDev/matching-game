import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import {createBoard} from '../../utils/setup';
import {shuffleArray} from '../../utils/utils';
import {CardType} from '../../utils/setup';
import {useDispatch} from 'react-redux';
import {minusPoint, plusPoint} from '../../redux/actions';
import {useNavigate} from 'react-router-dom';
import {ContainerCards} from './styles';

const GamePage = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? {...card, flipped: true, clickable: false}
          : card
      )
    );
    if (!clickedCard) {
      setClickedCard({...currentClickedCard});
      return;
    }

    if (
      clickedCard.matchingCardId === currentClickedCard.id ||
      clickedCard.id === currentClickedCard.matchingCardId
    ) {
      dispatch(plusPoint());
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? {...card, clickable: false}
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }
    dispatch(minusPoint());

    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? {...card, flipped: false, clickable: true}
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };
  useEffect(() => {
    if (gameWon) {
      return navigate('/results');
    }
  }, [gameWon]);
  return (
    <>
      <ContainerCards>
        {cards.map((card) => (
          <Card key={card.id} callback={handleCardClick} card={card} />
        ))}
      </ContainerCards>
    </>
  );
};

export default GamePage;
