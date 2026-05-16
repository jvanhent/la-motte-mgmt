"use client";

import { Datagrid, List, TextField } from 'react-admin';

const AssetTypeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="label" />
        </Datagrid>
    </List>

)


export default AssetTypeList;