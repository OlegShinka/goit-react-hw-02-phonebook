import { Card } from 'components/contactCard/contactCard';
import { nanoid } from 'nanoid';
export const ContactsList = ({ list, name, number }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {list.map(item => (
          <li key={nanoid()}>
            <Card name={item.name} number={item.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
