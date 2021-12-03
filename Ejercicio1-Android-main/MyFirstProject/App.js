import * as React  from 'react';
import { Text, View,FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DATA = [
  { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
 { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
 { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
 { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
 { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
 { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
 { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
 { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
 { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
 { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
 { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
 { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
 { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
 { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
 { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
 { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
 { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
 { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
];



const HomeStack = createNativeStackNavigator();

function listar() {
  return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen  name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor:'#46350C'}} }/>
        <HomeStack.Screen name="Details" component={DetailsScreen}  options={{headerStyle:{backgroundColor:'#46350C'}} }/>
      </HomeStack.Navigator>

  );
}
const InfoStack = createNativeStackNavigator();
function Info() {
  return (
    
    <View  style={styles.view}><Text  style={styles.textos} >Esta App te permite conocer en mas a las personas</Text></View>
  )

}

function DetailsScreen({route}) {
  
  return (
 
 <View style={styles.view}>
    
    <Text style={styles.textos}>Nombre:{route.params.item.nombre}</Text>
    <Text style={styles.textos}>Edad:{route.params.item.edad}</Text>
    <Text style={styles.textos}>Sexo:{route.params.item.sexo}</Text>
  </View>
);

}
function HomeScreen({navigation}) {
  
  function colores ({item})  {
  return(
    <View style={styles.view} >
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('Details',{item:item})} >
      <Text  >{item.nombre}</Text>
      </TouchableOpacity>
      </View>
  
 )
  }
  return (
    
 <View>
    <FlatList
    data={DATA}
    renderItem={colores}
    kayExtractor={item => item.id}/>
    </View>
);
}


const styles = StyleSheet.create({
  textos:{
    backgroundColor:'#6E510E',
  },
  view:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EDC669",
    justifyContent: 'center'

  },
  touchable:{
    alignItems: "center",
    backgroundColor: "#EDC669", 
    padding: 20 
  },
header:{
  backgroundColor:'#46350C',
}
});

export default function App() {
  return (
    <NavigationContainer >
         <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'body'
              : 'body';
          } else if (route.name === 'Info') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen   name="Home" component={listar}  options={{headerStyle:{backgroundColor:'#625204'}} } />
      <Tab.Screen name="Info" component={Info} options={{headerStyle:{backgroundColor:'#625204'}} } />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
  
}


