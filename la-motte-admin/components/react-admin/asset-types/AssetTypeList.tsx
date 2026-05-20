"use client";

import { Datagrid, List, TextField, NumberField } from 'react-admin';

const AssetTypeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="label" />
            <NumberField source="ref_price" />
        </Datagrid>
    </List>

)


export default AssetTypeList;