import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    ReferenceInput,
    required, NumberInput,
} from "react-admin"
import SelectInputWithPropagation from "@/components/react-admin/util/SelectInputWithPropagation"

export default function AssetCreate() {

    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="asset_type_id" reference="asset_types">
                    <SelectInputWithPropagation
                        optionText="label"
                        reference="asset_types"
                        sourceFieldToPropagate="ref_price"
                        targetField="ref_price"
                        validate={[required()]}
                    />
                </ReferenceInput>
                <TextInput source="name" validate={[required()]} fullWidth/>
                <NumberInput source="ref_price" step={1} validate={[required()]}/>
                <BooleanInput source="is_active" defaultValue={true}/>
            </SimpleForm>
        </Create>
    )
}