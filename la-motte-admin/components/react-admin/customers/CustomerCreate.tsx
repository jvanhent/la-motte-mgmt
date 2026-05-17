import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required, TextField,
} from "react-admin"

export default function CustomerCreate() {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" validate={[required()]} fullWidth/>
                <TextInput source="phone" fullWidth/>
            </SimpleForm>
        </Create>
    )
}