import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import CartScreen from '../screens/CartScreen';
import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/colors';


const BreadStack = createStackNavigator();

const BreadNavigator = () => (
  <BreadStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <BreadStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: 'BURGUERFACTORY: TODO TIPOS DE GUSTOS' }}
    />
    <BreadStack.Screen
      name="BreadCategory"
      component={CategoryBreadScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="DetailBread"
      component={BreadDetailScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Carrito' }}
    />
     <BreadStack.Screen
        name="Direcciones"
        component={PlaceListScreen}
        options={{title: 'Direcciones'}} 
      />
     <BreadStack.Screen
          name="Detalle direccion"
          component={PlaceDetailScreen}
          options={{title: 'Detalle direccion'}} 
        />
     <BreadStack.Screen
         name="Nuevo"
         component={NewPlaceScreen}
         options={{title: 'Nueva direccion'}} 
        />
      <BreadStack.Screen
       name="Map"
       component={MapScreen}
       options={{title: 'Map'}} 
      />
  </BreadStack.Navigator>
);

export default BreadNavigator;