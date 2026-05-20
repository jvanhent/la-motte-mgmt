"use client";

import {
    BooleanField,
    Datagrid,
    DateField, NumberField,
    ReferenceField,
    ReferenceManyField,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

const CustomerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <DateField source="created_at" />

            <ReferenceManyField
                label="Assets"
                reference="customers_assets"
                target="customer_id"
            >
                <Datagrid bulkActionButtons={false}>
                    <ReferenceField label="Name" source="asset_id" reference="assets" >
                        <TextField source="name" />
                    </ReferenceField>
                    <NumberField source="ref_price" label="Price"/>

                    <ReferenceField label="Active" source="asset_id" reference="assets" link={false}>
                        <BooleanField source="is_active" label={true} />
                    </ReferenceField>

                    <ReferenceField label="Type" source="asset_id" reference="assets" link={false}>
                        <ReferenceField source="asset_type_id" reference="asset_types">
                            <TextField source="label" />
                        </ReferenceField>
                    </ReferenceField>
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
)

export default CustomerShow