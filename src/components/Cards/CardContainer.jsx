import React from 'react';
import { mockedApiCall } from '../../api/mockedApi';
import { Card } from '../Cards';
import styles from './CardContainer.module.scss'
import PropTypes from 'prop-types';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: null };
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
      <img className={styles.img} src={this.props.src} alt=""></img>
    ); else {
      return (
        cards.length === 0
        ? <div>No cards yet</div> 
        : cards.map((elements) => (
          <Card profile={elements} key={elements.id}/>
        ))
      );
    }
  }
}

CardContainer.propTypes = {
  src: PropTypes.string,
};

export default CardContainer;
