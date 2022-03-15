
import { Component } from 'react';
import './filter-person.css'

class FilterPerson extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: ''
      }
   }

   filter = (e) => {
      this.props.onSearch(e.target.value)
      this.setState(state => ({
         value: e.target.value
      }))
   }

   render() {
      return (
         <input 
            type="text" 
            placeholder="Найти человека" 
            className='filter-person' 
            value={this.state.value}
            onChange={this.filter}
         />
      );
   }
}

export default FilterPerson;