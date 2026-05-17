import {DateInput, Edit, SimpleForm, TextField, TextInput} from 'react-admin';

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly/>
            <TextInput source="name" />
            <TextInput source="phone" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);