import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    required,
} from "react-admin"

export default function AssetCreate() {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="asset_type_id" reference="asset_types">
                    <SelectInput optionText="label" validate={[required()]}/>
                </ReferenceInput>
                <TextInput source="name" validate={[required()]} fullWidth/>
                <BooleanInput source="is_active" defaultValue={true}/>
            </SimpleForm>
        </Create>
    )
}