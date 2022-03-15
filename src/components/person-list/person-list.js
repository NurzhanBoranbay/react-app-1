import Persons from './persons';
import './person-list.css';

const PersonList = ({persons, onDelete}) => {
   
   const person = persons.map(item => {
      return <Persons key={item.id}  {...item} onDelete={onDelete} />
   });

   return (
      <div className="list">
         {person}
      </div>
   );
}

export default PersonList;