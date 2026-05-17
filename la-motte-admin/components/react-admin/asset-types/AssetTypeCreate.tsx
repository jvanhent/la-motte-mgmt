import {
    Create, required,
    SimpleForm,
    TextInput,
} from "react-admin";

export default function AssetTypeCreate() {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="code" validate={[required()]}/>
                <TextInput source="label" />
            </SimpleForm>
        </Create>
    );
}