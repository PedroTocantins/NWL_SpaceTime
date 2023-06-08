import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-5xl font-bold text-zinc-50">Hello World</Text>
      <StatusBar style="light" />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 30,
//   }
// });
