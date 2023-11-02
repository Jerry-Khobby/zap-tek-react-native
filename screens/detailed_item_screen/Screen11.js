import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Screen11 = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const navigation = useNavigation();

  const submitReview = () => {
    navigation.navigate('Screen12');
  };

  const styles = {
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      marginLeft: 100,
      fontSize: 23,
      fontWeight: 'bold',
    },
    nameInput: {
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 20,
      padding: 25,
      marginVertical: 8,
      backgroundColor: '#f5f6fA',
      marginHorizontal: 25,
    },
    experienceInput: {
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 20,
      padding: 170,
      marginVertical: 8,
      backgroundColor: '#f5f6fA',
      marginHorizontal: 25,
    },
    label: {
      marginVertical: 15,
    },
    ratingScale: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    ratingBar: {
      height: 10,
      backgroundColor: 'gray',
      flex: 1,
      marginHorizontal: 50,
      width: '100%',
      borderRadius: 5,
    },
    scaleText: {
      flex: 1,
      textAlign: 'center',
    },
    submitButton: {
      backgroundColor: '#9775FA',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    submitText: {
      color: 'white',
    },
    iconContainer: {
      backgroundColor: '#F5F6FA',
      borderRadius: 50,
      padding: 10,
      marginRight: -15,
      marginLeft: 20,
    },
    icon: {
      fontSize: 30,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top View */}
      <View style={styles.topBar}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              // navigation function to go back
            }}
          >
            <Icon name="arrow-left" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Add Review</Text>
      </View>

      {/* Name Text Input */}
      <Text style={[styles.label, { marginHorizontal: 30 }]}>Name</Text>
      <TextInput
        style={styles.nameInput}
        placeholder="Type your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Experience Text Input */}
      <Text style={[styles.label, { marginHorizontal: 30 }]}>How was your Experience?</Text>
      <TextInput
        style={styles.experienceInput}
        placeholder="Describe your experience"
        multiline={true}
        numberOfLines={4}
        value={experience}
        onChangeText={(text) => setExperience(text)}
      />

      {/* Star Text and Rating Scale */}
      <Text style={[styles.label, { marginHorizontal: 30 }]}>Star</Text>
      <View style={styles.ratingScale}>
        <Text style={styles.scaleText}>0.0</Text>
        <View style={styles.ratingBar} />
        <Text style={styles.scaleText}>5.0</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitReview}
      >
        <Text style={styles.submitText}>Submit Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Screen11;
