import React from 'react';
import styles from './CardsCreationForm.module.scss';
import { addCard } from '../../redux/actions';
import { connect } from 'react-redux';
import { Error } from '../Error';

class CardsCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      price: {
        value: '700р/час',
        isValid: true,
      },
      title: {
        value: 'Анна (няня)',
        isValid: true,
      },
      imageURL: {
        value: 'https://avatars.mds.yandex.net/get-pdb/2821050/2d279009-369a-4b98-8471-52156fdbfa44/s1200?webp=false',
        isValid: true,
      },
      gender: {
        value: 'female',
        isValid: true,
      },
      isValid: true
    };

    this.updateState = this.updateState.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.error = this.error.bind(this);
  }

  updateState(e) {
    let isValid = false;

    switch (e.target.name) {
      case 'price':
        isValid = new RegExp(/^[1-9]\d+[А-я]+\/[А-я]+$/).test(e.target.value);
        break;
      case 'title':
        isValid = new RegExp(/^([А-я]+\s)+\(([А-я]+\s*)+\)$/).test(e.target.value);
        break;
      case 'imageURL':
        isValid = new RegExp(/^https*:\/\/\w+\.\w+.*$/).test(e.target.value);
        break;
      case 'gender':
        isValid = new RegExp(/^(male)|(female)$/).test(e.target.value);
        break;
      default: 
        break;
    }

    this.setState({ [e.target.name]: { value: e.target.value, isValid } })
  }

  formIsValid() {
    const { id, price, title, imageURL, gender } = this.state;
    const isValid = !(!price.isValid || !title.isValid || !imageURL.isValid || !gender.isValid);
    
    this.setState({ isValid });

    if (isValid) {
      const { addCardIntoState } = this.props;

      addCardIntoState({
        id,
        price: price.value,
        title: title.value,
        imageURL: imageURL.value,
        gender: gender.value
      });

      this.setState({
        id: '',
        price: {
          value: '',
          isValid: false,
        },
        title: {
          value: '',
          isValid: false,
        },
        imageURL: {
          value: '',
          isValid: false,
        },
        gender: {
          value: '',
          isValid: false,
        },
        isValid: true
      });
    }
  }

  error(name) {
    if (!this.state.isValid && !this.state[name].isValid) return <Error />
  }

  render() {
    return (
      <article className={styles.createForm}>
        <label>Price: <input name="price" value={this.state.price.value} onChange={this.updateState}/></label>
        { this.error('price') }
        <label>Title: <input name="title" value={this.state.title.value} onChange={this.updateState}/></label>
        { this.error('title') }
        <label>ImageURL: <input name="imageURL" value={this.state.imageURL.value} onChange={this.updateState}/></label>
        { this.error('imageURL') }
        <label>Gender: <input name="gender" value={this.state.gender.value} onChange={this.updateState}/></label>
        { this.error('gender') }
        <button onClick={this.formIsValid}>Create</button>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCardIntoState: (card) => dispatch(addCard(card)),
});

export default connect(null, mapDispatchToProps)(CardsCreationForm);
