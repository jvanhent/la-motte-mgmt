"use client";

import {Datagrid, List, TextField } from 'react-admin';

const CustomerList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
        </Datagrid>
    </List>

)


export default CustomerList;