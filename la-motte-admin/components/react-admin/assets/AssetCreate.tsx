import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required, NumberInput,
} from "react-admin"

export default function AssetCreate() {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="asset_type_id" reference="asset_types">
                    <SelectInput optionText="label" validate={[required()]}/>
                </ReferenceInput>
                <TextInput source="name" validate={[required()]} fullWidth/>
                <NumberInput source="ref_price" step={1} validate={[required()]}/>
                <BooleanInput source="is_active" defaultValue={true}/>
            </SimpleForm>
        </Create>
    )
}