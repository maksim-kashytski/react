import React from 'react';
import styles from './CardsCreationForm.module.scss';
import PropTypes from 'prop-types';

class CardsCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      price: null,
      title: null,
      imageURL: null,
      gende: null,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateContainer = this.props.updateContainer;

  render() {
    console.log(this.state);
    return (
      <article className={styles.createForm}>
        <label>Price: <input name="price" onChange={this.updateState}/></label>
        <label>Title: <input name="title"  onChange={this.updateState}/></label>
        <label>ImageURL: <input name="imageURL" onChange={this.updateState}/></label>
        <label>Gender: <input name="gender" onChange={this.updateState}/></label>
        <button onClick={() => this.updateContainer(this.state)}>Create</button>
      </article>
    );
  }
}

CardsCreationForm.propTypes = {
  create: PropTypes.func,
};

export default CardsCreationForm;