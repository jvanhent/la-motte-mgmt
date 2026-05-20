import {
    Create, required,
    SimpleForm,
    TextInput,
    NumberInput
} from "react-admin";

export default function AssetTypeCreate() {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="code" validate={[required()]}/>
                <TextInput source="label" />
                <NumberInput source="ref_price" step={1} validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
}