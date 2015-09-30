const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  Component,
  TouchableOpacity, // A wrapper for making views respond to touches, on press down the opacity of the wrapped view is decreased, diminishing it.
  View,
} = React;

const SCREEN_WIDTH = require('Dimensions').get('window').width; // Grabs the width
const BaseConfig = Navigator.SceneConfigs.FloatFromRight; // Scene configuration object

const CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8, // snap back quickly after canceling pop
  edgeHitWidth: SCREEN_WIDTH // So we can drag anywhere on the screen
})

const CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 1,
  gestures: {
    pop: CustomLeftToRightGesture
  }
});

class PageOne extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.navigator);
  }
  _handlePress() {
    this.props.navigator.push({id: 2});
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'green'}]}>
        <Text style={styles.welcome}>Greetings!</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go to page two</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class PageTwo extends Component {
  constructor(props) {
    super(props);
  }
  _handlePress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
        <Text style={styles.welcome}>This is page two!</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{paddingVertical:10, paddingHorizontal: 20, backgroundColor: 'black'}}>
          <Text style={styles.welcome}>Go back</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



class AnimateTricks extends Component {
  _renderScene(route, navigator) {
    switch (route.id) {
      case 1:
        return <PageOne navigator={navigator} />
      case 2:
        return <PageTwo navigator={navigator} />
    }
  }

  _configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
    return (
      <Navigator initialRoute={{id: 1}}
                 renderScene={this._renderScene}
                 configureScene={this._configureScene} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AnimateTricks', () => AnimateTricks);
