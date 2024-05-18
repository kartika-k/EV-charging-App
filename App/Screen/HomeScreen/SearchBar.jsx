import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';
import { Entypo } from '@expo/vector-icons';

export default function SearchBar(searchedLocation) {
  return (
    <View
      style={{
        display:'flex',
        flexDirection:'row',
        marginTop:15,
        paddingHorizontal:5,
        backgroundColor:Colors.WHITE,
        borderRadius:6
      }}
    >
      <Entypo name="location-pin" size={24} 
      color={Colors.GRAY} style={{paddingTop:10}}/>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
     
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        // key: 'AIzaSyB9ctiAb-J9CZil_ZlpAg3Z0XpxwudHlNw',
        key:'https://maps.googleapis.com/maps/api/js?key=AIzaSyBcIeZUYI_x5WCKt4eBHe3GxGlifIKn2Qw&callback=FUNCTION_NAME',
        language: 'en',
      }}
    />
    </View>
  )
}