import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../../shared/card';
import ReviewForm from './reviewForm';
import store from '../../store/index';
import AddProductForm from '../../components/addProductForm';
import UserHome from '../../components/userHome';


export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  console.log('STORE IN HOME', store.getState());
  console.log('check company token from home : ', store.getState().auth.company.token);

  const roleSwitch = () => {
    if(store.getState().auth.company.token !== false){
      console.log("enter company");
      return <Modal visible={modalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <AddProductForm navigation={navigation}/>
        </View>
      </TouchableWithoutFeedback>
   </Modal>
    }
    if(store.getState().auth.user.token !== false){
      console.log("enter user");
      return <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
              />
              <UserHome navigation={navigation} />
            </View>
          </TouchableWithoutFeedback>
       </Modal>
    }
    if(store.getState().auth.runer.token !== false){
      console.log("enter runer");
      return <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
              />
              <ReviewForm addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
       </Modal>
    }
  }

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
  { store.getState().auth.company.token ?
      

        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <AddProductForm navigation={navigation}/>
          </View>
        </TouchableWithoutFeedback>
     </Modal>

:
        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContent}>
                <MaterialIcons 
                  name='close'
                  size={24} 
                  style={{...styles.modalToggle, ...styles.modalClose}} 
                  onPress={() => setModalOpen(false)} 
                />
                <UserHome navigation={navigation} />
              </View>
            </TouchableWithoutFeedback>
         </Modal>
  }
      <MaterialIcons 
        name='add' 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
      <Button
          style={globalStyles.SpaceY1}
          title="check store"
          onPress={() => {
            console.log("my store:", store.getState())
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});