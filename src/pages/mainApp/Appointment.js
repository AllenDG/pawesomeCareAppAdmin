import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.10:5000/api/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointment data:', error);
      });
  }, []);

  return (
    <ScrollView>
      {appointments.map(appointment => (
        <Appointment
          key={appointment.AppointmentID}
          FirstName={appointment.FirstName}
          AppointmentDate={appointment.AppointmentDate}
          Email={appointment.Email}
          AppointmentType={appointment.AppointmentType}
          AppointmentID={appointment.AppointmentID} // Pass AppointmentID as a prop
        />
      ))}
    </ScrollView>
  );
}

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      declined: false,
      selectedAppointmentTypes: [], // For storing selected appointment types
    };
  }

  handleAccept = () => {
    // Access the AppointmentID from props
    const { AppointmentID } = this.props;
    // Perform any actions with AppointmentID as needed
    this.setState({ accepted: true, declined: false });

   
    axios.put(`http://192.168.100.10:5000/api/appointments/accept/${AppointmentID}`, {isPending: false})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching appointment data:', error);
    });
  };



  handleDecline = () => {
    // Access the AppointmentID from props
    const { AppointmentID } = this.props;
    // Perform any actions with AppointmentID as needed
    this.setState({ accepted: false, declined: true });

    const isPending = false
    const isVeterinaryCare = false
    const isPetGrooming = false
    const isPetBoarding = false
    const isPetSpa = false

    axios.put(`http://192.168.100.10:5000/api/appointments/update-bool/${AppointmentID}`, {isPending, isVeterinaryCare,
    isPetGrooming,
    isPetBoarding,
    isPetSpa})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching appointment data:', error);
    });
    
  };

  handleAppointmentTypeChange = (type) => {
    const { selectedAppointmentTypes } = this.state;
    const index = selectedAppointmentTypes.indexOf(type);
    if (index === -1) {
      selectedAppointmentTypes.push(type);
    } else {
      selectedAppointmentTypes.splice(index, 1);
    }
    this.setState({ selectedAppointmentTypes });
  };

  render() {
    const { FirstName, AppointmentDate, Email, AppointmentType } = this.props;
    const { accepted, declined, selectedAppointmentTypes } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.userName}>{FirstName}</Text>
        <Text style={styles.appointmentDate}>Date: {AppointmentDate}</Text>
        <Text style={styles.gmail}>Gmail: {Email}</Text>

        <Text style={styles.appointmentType}>Appointment Type:</Text>
        {['Veterinary Care', 'Pet Grooming', 'Pet Boarding', 'Pet Spa and Pampering'].map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => this.handleAppointmentTypeChange(type)}
            style={[
              styles.typeItem,
              {
                backgroundColor: selectedAppointmentTypes.includes(type) ? 'lightblue' : 'white',
              },
            ]}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}

        {!accepted && !declined && (
          <View style={styles.buttonContainer}>
            {/* Pass AppointmentID as id to the Accept and Decline buttons */}
            <Button id={this.props.AppointmentID} title="Accept" onPress={this.handleAccept} color="green" />
            <Button id={this.props.AppointmentID} title="Decline" onPress={this.handleDecline} color="red" />
          </View>
        )}
        {accepted && <Text style={styles.status}>Accepted</Text>}
        {declined && <Text style={styles.status}>Declined</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appointmentDate: {
    fontSize: 16,
    marginTop: 5,
  },
  gmail: {
    fontSize: 16,
    marginTop: 5,
  },
  appointmentType: {
    fontSize: 16,
    marginTop: 5,
  },
  typeItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
});

export default AppointmentsList;
