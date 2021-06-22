import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  WebView
} from 'react-native-webview'

import html_script from './html_script'

class App extends React.Component {

  _goToMyPosition = (lat, lon) => {
        
    this.refs['Map_Ref'].injectJavaScript(`
      mymap.setView([${lat}, ${lon}], 10)
      L.marker([${lat}, ${lon}]).addTo(mymap)
    `)
  }
  
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.Container}>
          <WebView ref={'Map_Ref'}  source={{html: html_script }} style={styles.Webview} />
          <View style={styles.ButtonArea}>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(44.7866, 20.4489)}>
              <Text style={styles.ButtonText}>Belgrade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(35.6804, 139.7690)}>
              <Text style={styles.ButtonText}>Tokyo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(44.498065, 11.354634)}>
              <Text style={styles.ButtonText}>Bologna</Text>
            </TouchableOpacity>
            
          </View>
        </SafeAreaView>
      </>
    );
  }
  
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    padding: 10,
    backgroundColor: '#201010',
  
  },
  Webview: {
    flex: 2,
    
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Button: {
    width: 80,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default App;





