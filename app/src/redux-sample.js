import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';

/* Actionsの実装 */

// Action名の定義
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

/* Reducersの実装 */

function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* Storeの実装 */

const initialState = {
  value: null,
};
const store = createStore(formReducer, initialState);

/* Viewの実装 */

// View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onSendButtonClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onSendButtonClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

// View (Presentational Components)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// View (Presentational Components)
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}
FormDisplay.propTypes = {
  data: PropTypes.string,
};

// Connect to Redux
function mapStateToProps(state) {
  window.console.log(state);
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSendButtonClick(value) {
      dispatch(send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);
