const React = require('react-native');
const Dimensions = require('Dimensions');

const {
  width,
  height
} = Dimensions.get('window');

const {
  View,
  Component,
  PanResponder,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text,
  WebView
} = React;

const Animation = {
  duration: 500,
  create: {
    type: 'linear',
    property: 'opacity'
  },
  update: {
    type: 'spring',
    springDamping: 1
  }
}

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://share.framerjs.com/k8af8n1zktfe/',
      w: 100,
      h: 100,
      br: 100/2,
      open: false
    };
  }
  componentWillMount() {
    LayoutAnimation.configureNext(Animation);

    // Set up PanResponder
    //this._panResponder = PanResponder.create({
      //onMoveShouldSetResponderCapture: () => true, // Tell iOS we are allowing the movement
      //onMoveShouldSetPanResponderCapture: () => true, // Allow dragging
      //onPanResponderGrant: (e, gestureState) => {
        //console.log(e)
      //},
      //onPanResponderMove: () => {
        //console.log('Moving')
      //},
      //onPanResponderRelease: () => {
        //console.log('Released')
      //}
    //});
  }
  _whenPressed() {
    console.log('button is pressed');
    console.log(`The state is ${this.state.open}`)

    // Loop through to the width of the page
    for (let i = 100; i <= 1000; i++) {
      let size = {
        w: i,
        h: i,
        br: i/2
      }
      LayoutAnimation.configureNext(Animation);
      this.setState(size);
    }

    // Adjust the height and the border radius to take the whole page
    LayoutAnimation.configureNext(Animation);
    this.setState({
      w: width,
      h: height,
      br: 0
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={this._whenPressed.bind(this)}>
        <View style={[styles.circle, {width: this.state.w, height: this.state.h, borderRadius: this.state.br}]}>
            <WebView url={this.state.url} />
        </View>
      </TouchableOpacity>
    );
  }
}

styles = StyleSheet.create({
  circle: {
    overflow: 'hidden'
  }
});

module.exports = Circle;
