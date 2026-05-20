import {Edit, NumberInput, required, SimpleForm, TextInput} from 'react-admin'

export const AssetTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly/>
            <TextInput source="code" validate={[required()]}/>
            <TextInput source="label" />
            <NumberInput source="ref_price" step={1} validate={[required()]}/>
        </SimpleForm>
    </Edit>
)