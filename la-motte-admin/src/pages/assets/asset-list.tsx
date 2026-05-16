import {
    Datagrid,
    List,
    TextField,
    BooleanField,
    ReferenceField,
    SelectInput,
    ReferenceInput,
    BooleanInput
} from 'react-admin';

const assetFilters = [
    <BooleanInput source="is_active" label="Active" alwaysOn/>,

    <ReferenceInput source="asset_type_id" reference="asset_types" label="Type">
        <SelectInput optionText="label" />
    </ReferenceInput>,
]

const AssetList = () => (
    <List filters={assetFilters} filterDefaultValues={{is_active: true}}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="is_active" />
            <ReferenceField reference="asset_types" source="asset_type_id" />
        </Datagrid>
    </List>

)


export default AssetList;