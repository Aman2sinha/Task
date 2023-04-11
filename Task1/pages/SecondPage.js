
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const SecondPage = ({ route }) => {
    const [tableHead, settableHead] = useState(["TableColum", "Colm_Name", "District_Value", "UserInput"])
    // const [tableData,settableData] = useState([route.params.userName,route.params.userPassword,route.params.mobNo,""])
    const [tableData, settableData] = useState([
        [route.params.tableName, route.params.column, route.params.columnName, ""],
        ['aan', '12', '5876', ""],
        ['Rmn', '522', '4876', ""],
        ['smn', '62', '2876', ""],
    ])
    return (

        <View style={styles.container}>
            <View>
            <Table borderStyle={{ borderWidth: 2, borderColor: "black" }} >
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
            </View>
            <View style={{alignItems:"center",width:"80%",margin:20}}>

            <Button title='Update' style={{backgroundColor:"grey"}} onPress={()=>console.warn('updated')}/>
            </View>
        </View>
    );
};

export default SecondPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "white",
        padding: 16,
        margin: 10
    },
    head: {
        height: 40,
        backgroundColor: "lightgrey",
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    text: {
        margin: 7,
        color: "black",
        fontWeight: "bold"
    }
});
