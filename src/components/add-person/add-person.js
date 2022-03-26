import React, { Component } from "react";

import './add-person.css'

class AddPerson extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         surname: '',
         year: ''
      }
   }

   onValueChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      })
   }

   onAddPerson = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name, this.state.surname, this.state.year);
      
      this.setState({
            name: '',
            surname: '',
            year: ''
      });
   }

   render() {
      return (
         <div className="add-person">

            {/*{this.props.children}*/}

            {
               React.Children.map(this.props.children, child => {
                  return React.cloneElement(child, {style: {color: 'yellow'}})
               })
            }

            <div className="item">
            <input 
               type="text" 
               placeholder="Имя"
               value={this.state.name}
               name='name'
               onChange={this.onValueChange} />
            <input 
               type="text" 
               placeholder="Фамилия"
               value={this.state.surname}
               name='surname'
               onChange={this.onValueChange} />
            <input 
               type="number" 
               className="input-number"
               placeholder="Год"
               value={this.state.year}  
               name='year'
               onChange={this.onValueChange} />
            <button onClick={this.onAddPerson}>
               Добавить
            </button></div>
         </div>
      )
   }
}

export default AddPerson;