import {NumberField, Show, SimpleShowLayout, TextField} from 'react-admin'

export const AssetTypeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="label" />
            <NumberField source="ref_price" />
        </SimpleShowLayout>
    </Show>
)