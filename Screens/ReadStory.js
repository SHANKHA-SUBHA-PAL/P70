import React from 'react';
import { Text, View,ScrollView,FlatList ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Searchscreen extends React.Component {
  constructor(){
    super()
    this.state={
    
    allStories:[],
    lastVisibleStory:'',
    search:''

  }

  }
  componentDidMount = async ()=>{

    const query= await db.collection('Stories').get();
    query.docs.map(doc=>{
      this.setState({

        allStories:[...this.state.allStories,doc.data()],
        lastVisibleStory: doc

      })
    })
    
  }

  retriveStories= async()=>{
    var text= this.state.search;
    
      const Stories= await db.collection("Stories").where("author","==",text).get();
        Stories.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          lastVisibleStory: doc
        })
      })
      
  }



    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
              <TextInput
              style={styles.bar}
              placeholder="Enter Author Name"
              onChangeText={text=>{
                this.setState({search:text})

              }}
              />
              <TouchableOpacity style={styles.searchButton}
              onPress={()=>{
                this.retriveStories(this.state.search)
                this.setState({allStories:[]})
              }}>
                <Text style={{justifyContent:'center',textAlign:'center'}}>Search</Text>
              </TouchableOpacity>
          </View>
        <FlatList
        data={this.state.allStories}
        renderItem={({item})=>{
          return(
            <View>
              <Text>{"AUTHOR : "+item.author}</Text>
              <Text>{"TITLE : "+item.tiltle}</Text>
            </View>
          )
        }}
        keyExtractor={(item,index)=>index.toString()}
        />
        </View>
      );
      
    }
  }


  const styles=StyleSheet.create({
    container: {
        flex:1,
        marginTop:20
    },
    searchBar: {
        flexDirection:"row",
        justifyContent:'center',
        height:40,
        width:"auto",
        borderWidth:0.5,
        alignItems:"center",
        backgroundColor:"yellow",
        marginTop:50
    },
    bar: {
      justifyContent:'center',
      alignItems:'center',
        borderWidth:2,
        height:30,
        width:300,
        paddingLeft:10
    },
    searchButton:{
        borderWidth:1,
        height:30,
        width:70,
        backgroundColor:"green"
    }
})