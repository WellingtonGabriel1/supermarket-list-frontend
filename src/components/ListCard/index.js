import { useState } from 'react';
import './index.css';

// export const ListCard = (props, onClick) => {
//   const { item } = props

//   return (
//     <div className="list-card-container" onClick={() => onClick(item)}>
//       <img
//         className="checkbox"
//         src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
//         alt="checked-item"
//       />
//       <div className="list-card-text-container">
//         <span className="list-card-title">{item.name}</span>
//         <span className="list-card-subtitle">{item.quantity} unidades</span>
//       </div>
//       <img src="/images/arrow.svg" alt="arrow-icon" className="arrow-icon" />
//     </div>
//   )
// }

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='list-card-container' onClick={() => onClick(item)}>
      <div className='checkbox'>
        <input
        onChange={() => setChecked(!checked)}
        checked={checked}
        id='checkbox'
        type='checkbox'
        />

        <label htmlFor='checkbox' />
      </div>
      <div className='list-card-text-container'>
        <span className='list-card-title'>{item?.name}</span>
        <span className='list-card-subtitle'>{item?.quantity} unidades</span>
      </div>
      <img src='/images/arrow.svg' alt='arrow-icon' className='arrow-icon' />
    </div>
  );
};

