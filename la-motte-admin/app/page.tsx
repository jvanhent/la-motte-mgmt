"use client";


import { Admin, Resource } from "react-admin";
import dataProvider from "@/lib/data-provider";

import CustomerList from "@/components/react-admin/customers/CustomerList";
import AssetList from "@/components/react-admin/assets/AssetList";
import AssetTypeList from "@/components/react-admin/asset-types/AssetTypeList";
import {NoSsr} from "@mui/material";

export default function App() {
    return (
        <NoSsr>
            <Admin dataProvider={dataProvider}>
                <Resource name="customers" list={CustomerList} />
                <Resource name="assets" list={AssetList} />
                <Resource name="asset_types" list={AssetTypeList} />
            </Admin>
        </NoSsr>
    );
}