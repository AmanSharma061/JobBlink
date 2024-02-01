import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'
import {useRouter} from 'expo-router'
const DATA = [
  { id: 1, title: 'Full time' },
  { id: 2, title: 'Part time' },
  {
    id: 3,
    title: 'Internship'
  },
  {
    id: 4,
    title: 'Freelance'
  }
]
const Welcome = () => {
    const router=useRouter();
    const [selected, setSelected] = useState('')
  return (
    <View style={tw`w-full px-2`}>
      <View style={tw` pt-4`}>
        <Text style={tw`text-xl `}>Hello Aman</Text>
        <Text style={tw`text-2xl font-semibold text-gray-500`}>
          Find your perfect job
        </Text>
      </View>

      <TextInput
        style={tw`h-14 bg-gray-50 mt-2 rounded-xl border-2
      border-gray-300 px-4 `}
        placeholder='Search for job'
      />

      <View style={tw`mt-2`}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={
                ()=>{
                    setSelected(item.title)
                  router.push(`/jobs/${item.title}`)
                }
            }
              style={tw`text-gray-500 text-sm px-2 py-1 border border-gray-300 rounded-xl mr-2`}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          horizontal
            keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default Welcome
