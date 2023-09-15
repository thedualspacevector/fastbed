import React, { useState } from 'react';


import { View, Text, StyleSheet, FlatList, TouchableOpacity, AppRegistry } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('1');

  const serviceData = [
    { id: '1', title: 'Cardiologist', name: 'heart' },
    { id: '2', title: 'Dentist', name: 'tooth' },
    { id: '3', title: 'Ambulance', name: 'ambulance' },
    { id: '4', title: 'Medicines', name: 'pills' },
    { id: '5', title: 'Beds', name: 'bed' },
  ];

  const renderServiceItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setSelectedItem(item.id)}
    >
      <View style={styles.serviceItem}>
        <View
          style={[
            styles.serviceCard,
            {
              backgroundColor: item.id === selectedItem ? '#003d46' : '#fff',
              borderWidth: item.id === selectedItem ? 0 : 0.5,
              borderColor: '#003d46',
            },
          ]}
        >
          <FontAwesome5 name={item.name} size={25} color={item.id === selectedItem ? '#fff' : '#acacac'} />
        </View>
        <Text style={[styles.serviceText, { color: item.id === selectedItem ? '#003d46' : '#acacac' }]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
          <View style={styles.bellIcon}>
            <FontAwesome5 name="bell" size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.hospitalInfo}>
          <Text style={styles.hospitalName}>Punawale Hospital</Text>
          <View style={styles.regIdContainer}>
            <Text style={styles.regIdLabel}>RegID:</Text>
            <Text style={styles.regIdValue}>123456</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.date}>Sept 20, 2023</Text>
        <View style={styles.appointmentStats}>
          <View style={styles.appointmentItem}>
            <Text style={styles.appointmentLabel}>PENDING TODAY</Text>
            <Text style={styles.appointmentValue}>19</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.appointmentItem}>
            <Text style={styles.appointmentLabel}>PAST APPOINTMENTS</Text>
            <Text style={styles.appointmentValue}>30</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Services Available</Text>
      <FlatList
        data={serviceData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
      {serviceData.map((item) =>
        item.id === selectedItem && (
          <View style={styles.selectedService} key={item.id}>
            <Text style={styles.selectedServiceTitle}>{item.title}</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    backgroundColor: '#003D46',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 25,
    padding: 20,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#c8c8c8',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellIcon: {
    flexDirection: 'row',
  },
  hospitalInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  hospitalName: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  regIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  regIdLabel: {
    color: '#c8c8c8',
    fontSize: 12,
    fontWeight: 'regular',
  },
  regIdValue: {
    color: '#c8c8c8',
    fontSize: 12,
    fontWeight: 'regular',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#5f5f5f',
    alignSelf: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  date: {
    color: '#c3c3c3',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 20,
    paddingTop: 10,
  },
  appointmentStats: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  appointmentItem: {
    flex: 1,
    paddingLeft: 25,
    alignItems: 'flex-start',
  },
  appointmentLabel: {
    color: '#acacac',
    fontSize: 11,
    fontWeight: '400',
  },
  appointmentValue: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
  },
  verticalLine: {
    height: '60%',
    width: 1,
    backgroundColor: '#5f5f5f',
    alignSelf: 'center',
    left: 5,
    top: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    paddingTop: 30,
    paddingLeft: 20,
  },
  serviceItem: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  serviceCard: {
    height: 70,
    width: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#acacac',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  serviceText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedService: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedServiceTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    paddingTop: 30,
    paddingLeft: 10,
  },
});

export default App;


