
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [tableName, setTableName] = useState('');
  const [column, setColumn] = useState('');
  const [columnName,setColumnName]=useState('')
 const [result,setResult]=useState(0)
   

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Input to get the value from the user*/}
        <TextInput
          value={tableName}
          onChangeText={(textt) => setTableName(textt)}
          placeholder='Table Name'
          style={styles.inputStyle}
        />
        {/* <Text> {tableName} </Text> */}
        <TextInput
          value={column}
          onChangeText={(column) => setColumn(column)}
          placeholder='Unique Column'
          style={styles.inputStyle}
        />
        <TextInput 
        value={columnName}
        onChangeText={(columnName)=>setColumnName(columnName)}
        placeholder="Column Name"
        style={styles.inputStyle}
       />
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
        <Button
          title="Submit"
          //Button Title
          onPress={() =>
            navigation.navigate('SecondPage', {
              tableName,
               column,
               columnName, 
               result
            })
          }
        /> 
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

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
