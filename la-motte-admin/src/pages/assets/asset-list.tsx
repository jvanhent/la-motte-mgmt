import {Datagrid, List, TextField, BooleanField, ReferenceField} from 'react-admin';

const AssetList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="is_active" />
            <ReferenceField reference="asset_types" source="asset_type_id" />
        </Datagrid>
    </List>

)


export default AssetList;