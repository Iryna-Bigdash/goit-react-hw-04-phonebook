import PropTypes from 'prop-types';
import {ContactsList, ContactsItem, ContactsContainer, PhoneContainer, DeletContactBtn} from './ContactList.styled';

const ContactList = ({contacts, onDeletContact}) => (
<ContactsList>
{contacts.map(({id, name, number}) => (
<ContactsItem key={id}>
    <ContactsContainer>{name}: <PhoneContainer>{number}</PhoneContainer>
    </ContactsContainer>
    <DeletContactBtn onClick={()=>onDeletContact(id)}>Delete</DeletContactBtn>
</ContactsItem>
))}
</ContactsList>
);

export default ContactList;

ContactList.protoType = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeletContact: PropTypes.func.isRequired,
}