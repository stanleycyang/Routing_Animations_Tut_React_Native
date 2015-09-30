const React = require('react-native');
const {
  View,
  Component,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text
} = React;

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: 100,
      h: 100
    };
  }

  componentWillMount() {
    LayoutAnimation.spring();
  }

  _onPress() {
    LayoutAnimation.spring();
    this.setState({
      w: this.state.w + 15,
      h: this.state.h + 15
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red'
  },
  button: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

module.exports = Box;
