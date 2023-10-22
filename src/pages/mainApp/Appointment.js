import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      declined: false,
    };
  }

  handleAccept = () => {
    this.setState({ accepted: true, declined: false });
  };

  handleDecline = () => {
    this.setState({ accepted: false, declined: true });
  };

  render() {
    const { userName, appointmentDate, gmail, appointmentType } = this.props;
    const { accepted, declined } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.appointmentType}>Appointment Type: {appointmentType}</Text>
        <Text style={styles.appointmentDate}>Date: {appointmentDate}</Text>
        <Text style={styles.gmail}>Gmail: {gmail}</Text>
        {!accepted && !declined && (
          <View style={styles.buttonContainer}>
            <Button title="Accept" onPress={this.handleAccept} color="green" />
            <Button title="Decline" onPress={this.handleDecline} color="red" />
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
  appointmentType: {
    fontSize: 16,
    marginTop: 5,
  },
  appointmentDate: {
    fontSize: 16,
    marginTop: 5,
  },
  gmail: {
    fontSize: 16,
    marginTop: 5,
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

export default Appointment;
