import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin'

export const AssetShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="asset_type_id" reference="asset_types" />
            <TextField source="name" />
            <BooleanField source="is_active" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
)