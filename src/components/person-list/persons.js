import { Component } from 'react'

class Persons extends Component  {
   constructor(props) {
      super(props);
      this.state = {
         year: '',
         age: ''
      };
   }

   deletePerson = () => {
      this.props.onDelete(this.props.name);
   }

   render() {
      const { name, surname, year } = this.props
      return (
         <div className="person">
            <div className='info'>
               <div className='info-1'><span>{name} {surname}</span></div>
               <div className='info-2'><span>Год: {year}</span></div>
               <div className="remove-btn">
                  <button onClick={this.deletePerson}>Удалить</button>   
               </div>
            </div>
         </div>
      );
   }
}

export default Persons;