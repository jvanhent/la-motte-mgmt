"use client";

import {
    Datagrid,
    DateField, NumberField,
    ReferenceField,
    ReferenceManyField,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin'

const CustomerShow = () => {

    return <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="phone"/>
            <DateField source="created_at"/>
            <ReferenceManyField reference="customers_assets" target="customer_id" label="Customer-Assets">
                <Datagrid bulkActionButtons={false}>
                    <ReferenceField reference="assets" source="asset_id" />
                    <NumberField source="ref_price" />
                    <DateField label="Since" source="created_at" />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
}

export default CustomerShow