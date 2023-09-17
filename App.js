import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ServiceItem = ({ item, selectedItem, onPress }) => {
  return (
    <View style={styles.serviceItemContainer}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
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
          <FontAwesome5
            name={item.name}
            size={25}
            color={item.id === selectedItem ? '#fff' : '#acacac'}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.serviceText,
          { color: item.id === selectedItem ? '#003d46' : '#acacac' },
        ]}
      >
        {item.title}
      </Text>
    </View>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState('1');

  const serviceData = [
    {
      id: '1',
      title: 'Cardiologists',
      name: 'heart',
      doctorList: [
        { doctor: 'Dr. Jayprakash', image: require('./resources/doctor1.jpeg'), degree: 'M.S in Cardiology, PCET', current: 'Online' },
        { doctor: 'Dr. Ramesh', image: require('./resources/doctor.jpeg'), degree: 'M.S in Cardiology, AIIMS Delhi', current: 'Offline' },
      ],
    },
    { id: '2', title: 'Dentist', name: 'tooth' },
    { id: '3', title: 'Ambulance', name: 'ambulance' },
    { id: '4', title: 'Medicines', name: 'pills' },
    { id: '5', title: 'Beds', name: 'bed', doctorList: ['Dr. Jane Smith', 'Dr. Alice Johnson'] },
  ];

  const renderServiceItem = ({ item }) => (
    <ServiceItem
      item={item}
      selectedItem={selectedItem}
      onPress={() => setSelectedItem(item.id)}
    />
  );

  const [DocStatus, setDocStatus] = useState('Offline');


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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Services Available</Text>
        <Text style={styles.viewAllText}>View All</Text>
      </View>
      <FlatList
        data={serviceData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.serviceList}
      />
      {serviceData.map((item) =>
        item.id === selectedItem && item.doctorList && (
          <View style={styles.selectedService} key={item.id}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.viewAllText}>View All</Text>
            </View>
            <View style={styles.doctorList}>
              {item.doctorList.map((doctor, index) => (
                <View style={styles.doctorCard} key={index}>
                  
                    <View style={styles.doctorpfp}>
                      <Image source={doctor.image} style={styles.doctorImage} />
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      <View>
                        <Text style={styles.doctorName}>{doctor.doctor}</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 9 }}>{doctor.degree}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
                        <FontAwesome5 name="circle" size={6} color={doctor.current === 'Offline' ? 'grey' : 'lightgreen'} solid />
                        <Text style={{ fontSize: 10, alignItems: 'center', marginLeft: 3 }}>{doctor.current === 'Offline' ? 'Offline' : 'Online'}</Text>
                      </View>
                    </View>
                  </View>
                
              ))}

            </View>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#003d46',
  },
  serviceItemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  serviceList: {
    marginTop: 0,
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
    padding: 20,
  },
  selectedServiceTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    paddingTop: 10,
    paddingLeft: 10,
  },
  doctorList: {
    marginTop: 10,
  },
  doctorCard: {
    height: 120,
    width: 'auto',
    margin: 20,
    backgroundColor: '#003e46',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  doctorText: {
    color: '#fff',
  },
  doctorpfp: {
    height: 80,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: '#acacac',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,

    color: '#fff',
  },
});

export default App;
