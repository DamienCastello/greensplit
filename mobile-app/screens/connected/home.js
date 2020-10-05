import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Button, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../../shared/card';
import ReviewForm from './reviewForm';
import store from '../../store/index';
import AddProductForm from '../../components/addProductForm';
import UserHome from '../../components/userHome';
import { showUser } from '../../store/actions/users';
import AvatarUser from '../../components/avatarUser';

let deviceWidth = Dimensions.get('window').width

function Home(props, { navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);


  useEffect(() => {
    props.showUser(store.getState().auth.user.id);
  }, []);


  console.log('STORE IN HOME', store.getState());

  const roleSwitch = (auth) => {
    console.log("auth of roleSwitch : ", auth);
    if(auth.company.token){
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
    if(auth.user.token){
      console.log("enter user");
      return <View style={globalStyles.SpaceY1}>
        <AvatarUser avatar={props.users.user.avatar} />
        <Text style={globalStyles.titleText}>Bienvenue {props.users.user.firstname} {props.users.user.lastname} !</Text>
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
      </View>
    }
    if(auth.runer.token){
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
  { roleSwitch(store.getState().auth)
  /*store.getState().auth.company.token ?
      

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
                <UserHome navigation={navigation}/>
              </View>
            </TouchableWithoutFeedback>
         </Modal>*/
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
            console.log("my store:", store.getState(), props)
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

const mapStateToProps = (state) => ({
  auth: {
    user: state.auth.user,
    company: state.auth.company,
    runer: state.auth.runer
  },
  users: state.users,
  products: state.products
})

const mapDispatchToProps = {
  showUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
