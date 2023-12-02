import { View } from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <View className="flex-1 p-2">
      {props.children}
    </View>
  );
};
