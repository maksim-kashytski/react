import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards, updateState } from '../../redux/actions';
import { Card } from '../Card'
import { CardsCreationForm } from '../CardsCreationForm';
import styles from './CardContainer.module.scss'

const CardContainer = ({ fetchCardsFromApi, isLoad, cards, remove, accessType }) => {
  useEffect(() => {
    fetchCardsFromApi();
  }, []);

  const renderCards = (isLoad) => isLoad
    ? <img className={styles.img} src={'https://cdn.dribbble.com/users/765253/screenshots/2540865/loader.gif'} alt=""></img>
    : (
      cards.map((items) => (
        <Card profile={items} removeItem={remove} />
      ))
  );

  const renderCardsCF = (accessType) => {
    if (accessType === 'Admin') return <CardsCreationForm />;
  }

  return (
    <div>
      { renderCardsCF(accessType)}
      { renderCards(isLoad) }
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessType: state.auth.accessType,
  isLoad: state.cards.loading,
  cards: state.cards.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCardsFromApi: () => dispatch(fetchCards()),
  remove: (idx) => dispatch(updateState(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
