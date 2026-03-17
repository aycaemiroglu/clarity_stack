import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';

type IoniconsName = ComponentProps<typeof Ionicons>['name'];

interface TabConfig {
  name: string;
  title: string;
  icon: IoniconsName;
  iconFocused: IoniconsName;
}

const TABS: TabConfig[] = [
  { name: 'inbox', title: 'Inbox', icon: 'file-tray-outline', iconFocused: 'file-tray' },
  { name: 'today', title: 'Today', icon: 'today-outline', iconFocused: 'today' },
  {
    name: 'open-loops',
    title: 'Open Loops',
    icon: 'layers-outline',
    iconFocused: 'layers',
  },
  { name: 'review', title: 'Review', icon: 'sparkles-outline', iconFocused: 'sparkles' },
  { name: 'settings', title: 'Settings', icon: 'settings-outline', iconFocused: 'settings' },
];

const TAB_ACTIVE_COLOR = '#4F46E5';
const TAB_INACTIVE_COLOR = '#9CA3AF';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: TAB_ACTIVE_COLOR,
        tabBarInactiveTintColor: TAB_INACTIVE_COLOR,
        tabBarStyle: {
          borderTopColor: '#F3F4F6',
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? tab.iconFocused : tab.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
