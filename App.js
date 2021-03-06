import React from 'react';
import {
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
  View,
  Text,Animated,
  ImageBackground,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const items = [
  { index: 1, name: 'Books' },
  { index: 2, name: 'Clothes' },
  { index: 3, name: 'Electronics' },
  { index: 4, name: 'Games' },
  { index: 5, name: 'Movies' },
  { index: 6, name: 'Albums' }
];

const booksList = [
  { name: 'The Book Thief', sline: 'Markus Zusak', src: 'https://images-na.ssl-images-amazon.com/images/I/51A99teA6iL._SX317_BO1,204,203,200_.jpg' },
  { name: 'Murder On The Orient Express', sline: 'Agatha Christie', src: 'https://images-na.ssl-images-amazon.com/images/I/51%2B4dtdYCcL._SX321_BO1,204,203,200_.jpg' },
  { name: 'All The Light We Cannot See', sline: 'Anthony Doerr', src: 'https://images-na.ssl-images-amazon.com/images/I/51tjJGTkUhL._SX326_BO1,204,203,200_.jpg' },
];

const electronicsList=[
  {name:'Galaxy S10', sline:'Samsung',src:'https://shop.ee.co.uk/content/dam/everything-everywhere/images/samsung/S10/SAMSUNG_S10_River_1280x1010.jpg'},
  {name:'Studio3 Wireless Headphones', sline:'Beats by Dre',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4VzsSmwhUJMubrRRs8eL2J5qVRaJ62KkLMF5h1vMaOdrGMi57'}
];

const albumsList=[
  {name:'AM',sline:'Arctic Monkeys',src:'https://m.media-amazon.com/images/I/615Gu1CRbcL._SS500_.jpg'},
  {name:'Blackholes And Revelations',sline:'Muse',src:'https://images-na.ssl-images-amazon.com/images/I/81eIMvbLnfL._SX355_.jpg'},
  {name:'Origin Of Symmetery',sline:'Muse',src:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Museoriginofsymemtryalbumcover.jpg/220px-Museoriginofsymemtryalbumcover.jpg'},
  {name:'Absolution',sline:'Muse',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5st1E6MpreAbVWSS9d4kHFekEbg5HHXnGUqKDhgPqKSg6bqZ1'},
  {name:'Youngblood',sline:'5SOS',src:'https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/b4/e2/08/b4e20858-295d-ecef-c9ba-30789773beb3/00602567483625.rgb.jpg/268x0w.jpg'},
  {name:'Made In The A.M.',sline:'One Direction',src:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png/220px-One_Direction_-_Made_in_the_AM_%28Official_Album_Cover%29.png'},
];
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ba55d3'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe4e1'
  },
  sectionContainer: {
    margin: 5,
    paddingVertical: 50,
    borderRadius: 4
  },
  sectionContainer1: {
    margin: 5,
    paddingVertical: 5,
    borderRadius: 4,
    paddingHorizontal: 28,
  },
  item: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40
  },
  Name: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 30,
    textAlign:"left",
    borderBottomWidth:1,
    borderBottomColor:'#fffaf0'
  },
  Sline: {
    color: '#ffffff',
    fontSize: 20,
    textAlign:"left",
  },
  input: {
    borderWidth: 1,
    height: 45,
    width: 250,
    borderColor: '#191970',
    borderRadius: 14,
    margin: 20,
    textAlign: 'center'
  }
});
class HomeScreen extends React.Component {
  renderItem = ({ item }) => {
    let col = '';
    if (item.index % 2 === 0) {
      col = '#ff1493';
    } else {
      col = '#9932cc';
    }
    return (
      <TouchableOpacity
        style={[styles.sectionContainer, { backgroundColor: col },{paddingHorizontal: 68}]}
        onPress={this.onPress}
      >
        <Text style={styles.item}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  onPress = () => {
    this.props.navigation.navigate('Books');
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <FlatList
            data={items}
            keyExtractor={item => item.index}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>
    );
  }
}
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  onPress = () => {
    if (this.state.email === 'ana@g.co' && this.state.password === 'cookies') {
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert(
        'Wrong Credentials!!',
        'User Not Found'
        // {cancelable:false}
      );
    }
  };
  onChangeEmail = val => {
    this.setState({ email: val });
  };
  onChangePassword = val => {
    this.setState({ password: val });
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'data:image/jpeg;base64,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'
        }}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Details Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="EmailID"
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={this.onChangeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={this.onChangePassword}
        />
        <Button title="Go to Home" onPress={this.onPress} />
      </ImageBackground>
    );
  }
}
class BooksScreen extends React.Component {
    state = {
      bx: true,
      bcol: '#ff7f50'
    }
  
  animate(){
    // this.props.plethora()
    // if(this.state.bx === false )
    // {
      // this.setState({ bx: false  })
      // this.setState({  bcol : '#ff7f50' })
    // }
    // else
    // {
    //   // this.setState({ bx: true})   
    cols='#000000'
     this.setState({ bcol : cols  }) 
    // }

  }
  renderItem = ({ item }) => {
    return (

      <TouchableHighlight
      style={[{ backgroundColor: this.state.bcol }, styles.sectionContainer1]}
        onLongPress={() => this.animate()}
      >
        <View   >
        <Text style={styles.Name}> {item.name} </Text>
        <Text style={styles.Sline}>{item.sline}</Text>
        <Image style={{width: 300, height: 300}} source={{uri: item.src }} />
        </View>
      </TouchableHighlight>
    );
  };
  render(){
    return (
      <ScrollView>
        <View style={styles.body}>
          <FlatList
            data={electronicsList}
            keyExtractor={item => item.name}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>   );
 }}
const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Books: { screen: BooksScreen }
  },
  {
    initialRouteName: 'Login'
  }
);

const App = createAppContainer(MainNavigator);

export default App;
