import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Image, ImageBackground, Modal, TouchableOpacity, Text, Animated } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const welcomeFadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoggedIn) {
      Animated.timing(welcomeFadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoggedIn, welcomeFadeAnim]);

  const handleLogin = () => {
    setModalVisible(false);
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        // Welcome Screen after logging in
        <ImageBackground 
          source={{ uri: 'https://raw.githubusercontent.com/izqnmi/mobileappfiles/main/bg_welcscreen.jpg' }}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Animated.View style={{ ...styles.welcomeBox, opacity: welcomeFadeAnim }}>
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/izqnmi/mobileappfiles/main/aquatechlogo.png' }}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.subtitle}>giling giling</Text>
            </Animated.View>
          </View>
        </ImageBackground>
      ) : (
        // Login Modal
        <ImageBackground 
          source={{ uri: 'https://raw.githubusercontent.com/izqnmi/mobileappfiles/main/bg_welcscreen.jpg' }}
          style={styles.backgroundImage}
        >
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.container}>
                <Image
                  source={{ uri: 'https://raw.githubusercontent.com/izqnmi/mobileappfiles/main/aquatechlogo.png' }}
                  style={styles.logo}
                  resizeMode="contain"
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#666"
                />
                
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#666"
                />
                
                <View style={styles.buttonContainer}>
                  <Button title="Log In" color="#FFD700" onPress={handleLogin} />
                </View>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
  },
  welcomeBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});

export default App;
