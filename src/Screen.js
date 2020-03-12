import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Button from './Button';
import {button} from './constants';
import styles from './style';
import {connect} from 'react-redux';
import {calculate, clear, evaluateExpression, square} from './action';

class Screen extends Component {
  renderButton() {
    let layout = button.map((buttonRow, index) => {
      let rowItem = buttonRow.map((buttonItem, buttonIndex) => {
        return (
          <Button
            handlePress={this.handleClick.bind(this, buttonItem)}
            title={buttonItem}
            key={'btn' + buttonIndex}
          />
        );
      });
      return (
        <View key={'row' + index} style={styles.container}>
          {rowItem}
        </View>
      );
    });
    return <View style={styles.containerButton}>{layout}</View>;
  }

  handleClick = key => {
    switch (key) {
      case 'c':
        this.props.clear();
        break;
      case '=':
        this.props.evaluate();
      case 'x^2':
        this.props.square();
        break;
      default:
        this.props.calculate(key);
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          {this.props.data.equal ? (
            <Text style={styles.teks}>{this.props.data.expression}</Text>
          ) : (
            <Text style={styles.teks}>{this.props.data.jumlah}</Text>
          )}
          {this.props.data.equal && (
            <Text style={styles.total}>{this.props.data.total}</Text>
          )}
        </View>
        {this.renderButton()}
      </View>
    );
  }
}
const mapStatetoProps = state => {
  return {
    data: state.calculator,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    square: () => {
      dispatch(square());
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Screen);
