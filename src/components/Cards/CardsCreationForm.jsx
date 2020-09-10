import React from 'react';
import styles from './CardsCreationForm.module.scss';
import Error from './Error.jsx';
import PropTypes from 'prop-types';

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
  }

  updateState(e) {
    let isValid = false;

    switch (e.target.name) {
      case 'price':
        isValid = !e.target.value.replace(/[1-9]\d+[А-я]+\/[А-я]+/, '');
        break;
      case 'title':
        isValid = !e.target.value.replace(/([А-я]+\s)+\(([А-я]+\s*)+\)/, '');
        break;
      case 'imageURL':
        isValid = !e.target.value.replace(/https*:\/\/\w+\.\w+.*/, '');
        break;
      case 'gender':
        isValid = !e.target.value.replace(/(male)|(female)/, '');
        break;
      default: 
        break;
    }

    this.setState({ [e.target.name]: { value: e.target.value, isValid } })
  }

  updateContainer = this.props.updateContainer;

  formIsValid() {
    const { id, price, title, imageURL, gender } = this.state;
    const isValid = !(!price.isValid || !title.isValid || !imageURL.isValid || !gender.isValid);
    
    this.setState({ isValid });

    if (isValid) {
      this.updateContainer({
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

  render() {
    console.log(this.state);

    if (this.state.isValid === true) console.log(true);
    else console.log(false);

    return (
      <article className={styles.createForm}>
        <label>Price: <input name="price" value={this.state.price.value} onChange={this.updateState}/></label>
        {
          (() => { 
            if (!this.state.isValid && !this.state.price.isValid) return <Error></Error>
          })()
        }
        <label>Title: <input name="title" value={this.state.title.value} onChange={this.updateState}/></label>
        {
          (() => { 
            if (!this.state.isValid && !this.state.title.isValid) return <Error></Error>
          })()
        }
        <label>ImageURL: <input name="imageURL" value={this.state.imageURL.value} onChange={this.updateState}/></label>
        {
          (() => { 
            if (!this.state.isValid && !this.state.imageURL.isValid) return <Error></Error>
          })()
        }
        <label>Gender: <input name="gender" value={this.state.gender.value} onChange={this.updateState}/></label>
        {
          (() => { 
            if (!this.state.isValid && !this.state.gender.isValid) return <Error></Error>
          })()
        }
        <button onClick={this.formIsValid}>Create</button>
      </article>
    );
  }
}

CardsCreationForm.propTypes = {
  create: PropTypes.func,
};

export default CardsCreationForm;