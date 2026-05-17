"use client";

import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import dataProvider from "@/lib/data-provider";

import CustomerList from "@/components/react-admin/customers/CustomerList";
import AssetList from "@/components/react-admin/assets/AssetList";
import AssetTypeList from "@/components/react-admin/asset-types/AssetTypeList";
import {NoSsr} from "@mui/material";
import CustomerShow from "@/components/react-admin/customers/CustomerShow";

export default function App() {
    return (
        <NoSsr>
            <Admin dataProvider={dataProvider}>
                <Resource name="customers" list={CustomerList} edit={EditGuesser} show={CustomerShow} />
                <Resource name="assets" list={AssetList} edit={EditGuesser} show={ShowGuesser}/>
                <Resource name="asset_types" list={AssetTypeList} edit={EditGuesser} show={ShowGuesser}/>
            </Admin>
        </NoSsr>
    );
}
