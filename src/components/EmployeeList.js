import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, TextInput, View, ScrollView, Image } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
//import AtoZListView from 'react-native-atoz-listview';
import Input from './common';
//import Search from 'react-native-search-box';
//import AlphabetListView from 'react-native-alphabetlistview';

const rowHeight = 40;

class EmployeeList extends Component {
  state = { searchTerm: ''};

  componentWillMount(){
    this.props.employeesFetch();

    this.createDataSource(this.props.employees);
  }

  componentWillReceiveProps(nextProps){
    //nextProps are the next set of Props that this component
    //will be rendered with
    //this. prios os still the old set  of props
    this.createDataSource(nextProps.employees);
  }

  createDataSource(employees) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);

  }

  renderRow(employee){
    return <ListItem employee={employee} />;

  }

  onSearchTermChange(term) {
    this.setState({ searchTerm: term.toLowerCase() });
    if (this.props.employees !== []) {
      const searched = _.filter(this.props.employees, (employee) => {
        console.log(employee.name.toLowerCase().indexOf(term.toLowerCase()));
        //const good = employee.name && employee.phone
        return employee.name.toLowerCase().indexOf(term.toLowerCase()) && employee.phone.toLowerCase().indexOf(term.toLowerCase()) !== -1;

      })
      //console.log(searched);
      this.createDataSource(searched);
    } else {
      createDataSource(employees);
    }
  }



  render() {
    return (

<View>
    <TextInput
      style={styles.textInput}
      placeholder = "search for medical"
      onChangeText={this.onSearchTermChange.bind(this)}
      value={this.state.searchTerm}
    />


      <ListView
         enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

    </View>




    );

  }
}

const styles = {
  textInput: {
    height: 30,
    borderWidth:1,
    borderColor: '#cecece',
    marginBottom:10,
  // opacity: 0.5
  //  marginHorizontal: 10
  }
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
