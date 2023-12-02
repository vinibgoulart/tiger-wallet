import { Ionicons } from '@expo/vector-icons';
import { Link, Redirect, Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { colors } from '@tiger-wallet/theme';
import { useSession } from '../../auth/AuthProvider';

const TabLayout = () => {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.secondary.main,
        tabBarStyle: {
          backgroundColor: colors.pastel.main,
        },
        headerStyle: {
          backgroundColor: colors.pastel.main,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="code"
                    size={25}
                    color={colors.primary.main}
                    style={{
                      marginRight: 10,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={25} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
