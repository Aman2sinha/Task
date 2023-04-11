
import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
const DATA = [
  {
    id: '1',
    website: 'https://www.youtube.com',
  },
  {
    id: '2',
    website: 'https://www.youtube.com',
  },
  {
    id: '3',
    website: 'https://www.youtube.com',
  },
];
const Item = ({title }) => (
  <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
    <Text style={{ borderWidth: 1, width: "50%", paddingLeft: 45, paddingTop: 15, backgroundColor: "white", fontWeight: 'bold' }}>{title} </Text>
    <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
      <TouchableOpacity style={{ width: '50%', alignItems: 'center', backgroundColor: "green", fontWeight: 'bold', borderRadius: 12, borderWidth: 1 }} >
        <Text style={{ fontWeight: 'bold', color: 'white', padding: 5 }}>SUCESS</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const App = () => {
  const [tableName, setTableName] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*Input to get the value from the user*/}
        <TextInput
          value={tableName}
          onChangeText={(textt) => setTableName(textt)}
          placeholder='Table Name'
          style={styles.inputStyle}
        />
        <Button
          title=" ADD "
        />

        <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '20%' }}>
          <Text style={{ borderWidth: 1, width: "50%", paddingLeft: 45, paddingTop: 15, paddingBottom: 15, backgroundColor: "yellow", fontWeight: 'bold' }}> Website  </Text>
          <Text style={{ borderWidth: 1, width: "50%", paddingLeft: 45, paddingTop: 15, backgroundColor: "yellow", fontWeight: 'bold' }}>Status </Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }) =>
           <Item title={item.website}  />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
