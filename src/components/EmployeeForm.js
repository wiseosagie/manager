import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
      <CardSection style={styles.headerStyle}>
        <Text style={styles.textStyle}>Name</Text>
      </CardSection>

        <CardSection>
        <Input
            //label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
        />
        </CardSection>

        <CardSection>
          <Text style={styles.textStyle}>Meaning</Text>
        </CardSection>


        <CardSection>
          <Input
            //label="meaning"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>




      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    //alignSelf: 'center',
    textAlign: 'center',
    flex: 2
  },
  headerStyle: {
    //fontSize: 18,
    //backgroundColor: 'blue',
    alignItems:'center',
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
