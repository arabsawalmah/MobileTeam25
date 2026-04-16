import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import StorageService from '@/services/StorageService';

export default function HomeScreen() {
  const [userEmail, setUserEmail] = React.useState<string>('');

  React.useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await StorageService.getUser();
        if (user) {
          setUserEmail(user.email || '');
        }
      } catch (error) {
        console.log('Error getting user:', error);
      }
    };
    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await StorageService.removeToken();
      await StorageService.removeUser();
      router.replace('/(tabs)/login');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeTitle}>أهلاً وسهلاً!</Text>
        
        <View style={styles.userCard}>
          <Text style={styles.label}>البريد الإلكتروني:</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>تم تسجيل الدخول بنجاح</Text>
        </View>

        <Pressable 
          onPress={handleLogout}
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.logoutButtonPressed
          ]}
        >
          <Text style={styles.logoutButtonText}>تسجيل الخروج</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1f2937',
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',
  },
  infoBox: {
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    padding: 16,
    marginBottom: 32,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  infoText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonPressed: {
    opacity: 0.8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
