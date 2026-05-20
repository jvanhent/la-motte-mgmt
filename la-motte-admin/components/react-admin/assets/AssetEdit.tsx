import {
    BooleanInput,
    DateInput,
    Edit, NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin'

export const AssetEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly/>
            <ReferenceInput source="asset_type_id" reference="asset_types">
                <SelectInput optionText="label" validate={[required()]}/>
            </ReferenceInput>
            <TextInput source="name" validate={[required()]}/>
            <NumberInput source="ref_price" step={1} validate={[required()]}/>
            <BooleanInput source="is_active" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
)