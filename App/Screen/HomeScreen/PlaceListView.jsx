import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PlaceListView({placeList}) {
    console.log("***",placeList);
  return (
    <View>
      <FlatList
        data={placeList}
        renderItem={({item,index}) => (
            <View>
                <Text>{item.displayName.text}</Text>
            </View>
        )}
      />
    </View>
  )
}