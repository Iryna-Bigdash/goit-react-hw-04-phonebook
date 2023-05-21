import styled from '@emotion/styled';

export const ContactsList = styled.ul`
   padding:50px;
   background-color: #8b54c1;
   list-style: none;
`
export const ContactsItem = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid #e5d2f8;
    padding-left: 20px;
    margin-bottom: 4px;
`
export const ContactsContainer = styled.p`
    color: white;
    font-weight: bold;
`
export const PhoneContainer = styled.span`
    margin-left: 24px;
`
export const DeletContactBtn = styled.button`
    background-color: #e5d2f8;
   width: 100px;
   cursor: pointer;
   color:white;
   font-weight: 800;
   font-size: 23px;

   &&:hover{
    background-color: white;
    color: #e5d2f8;
   }

`