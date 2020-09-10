import React from 'react';
import { mockedApiCall } from '../../api/mockedApi';
import { Card, CardsCreationForm } from '../Cards';
import styles from './CardContainer.module.scss'
import PropTypes from 'prop-types';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: null };

    this.removeItem = this.removeItem.bind(this);
    this.updateContainer = this.updateContainer.bind(this);
  }

  removeItem(id) {
    const { cards } = this.state;
    
    this.setState({
      cards: cards.filter((item) => { 
        if (item.id !== id) return item;
      })
    });
  }

  updateContainer(card) {
    const { cards } = this.state;
    
    card.id = (new Date()).getTime();

    this.setState({ cards: [...cards, card] })
  }
  
  componentDidMount() {
    mockedApiCall().then(
      (profiles) => this.setState({ cards: [...profiles] })
    );
  }

  render() {
    const { cards } = this.state;
    console.log(cards);

    if (cards === null) return (
      <img className={styles.img} src={this.props.preloader} alt=""></img>
    ); else {
      return (
        (cards.length === 0)
        ? <div>No cards yet</div> 
        : <div>
            <CardsCreationForm updateContainer={this.updateContainer}/>
            {
              cards.map((elements) => { 
                return <Card profile={elements} removeItem={this.removeItem} key={elements.id}/>
              })
            }
          </div>
      );
    }
  }
}

CardContainer.propTypes = {
  preloader: PropTypes.string,
};

export default CardContainer;
