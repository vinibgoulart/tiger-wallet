import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

const ModalScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default ModalScreen;
