import { Component } from 'react';
import PersonList from '../person-list/person-list';
import FilterPerson from '../filter-person/filter-person';
import AddPerson from '../add-person/add-person';

import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         persons: [
            {name: 'Азамат', surname: 'Аймахан', id: 1, year: 1997},
            {name: 'Нуржан', surname: 'Боранбай', id: 2, year: 1997},
            {name: 'Бекжан', surname: 'Боранбай', id: 3, year: 1997},
         ],
         term: ''
      }
   }

   addItem = (name, surname, year) => {
      const newPerson = {
         name,
         surname,
         id: this.state.persons.length + 1,
         year,
      }

      this.setState(({persons}) => {

         const newPersonsArr = persons.map(item => item);
         if (newPerson.name && newPerson.surname) {
            newPersonsArr.push(newPerson);
         }

         return {
            persons: newPersonsArr
         }

      })
   }

   deleteItem = (name) => {
      this.setState(({persons}) => {
         const newPersonsArr = persons.map(item => item).filter(item => item.name !== name);
         
         return {
            persons: newPersonsArr
         }
      });
   }

   searchPerson = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => item.name.indexOf(term) > -1 || item.surname.indexOf(term) > -1);
   }

   onSearch = (term) => {
      this.setState(({term}));
   }

   render() {
      const {persons, term} = this.state;
      const visiblePerson = this.searchPerson(persons, term)
      return (
         <div className="App">
            <h2>Спсиок одноклассников</h2>
            <FilterPerson onSearch={this.onSearch}/>
   
            <PersonList persons={visiblePerson} onDelete={this.deleteItem} />
            <AddPerson 
               onAdd={this.addItem}   
            />
         </div>
     );
   }
}

export default App;
