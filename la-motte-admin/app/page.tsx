"use client";

import { Admin, Resource } from "react-admin";
import dataProvider from "@/lib/data-provider";

import CustomerList from "@/components/react-admin/customers/CustomerList";
import AssetList from "@/components/react-admin/assets/AssetList";
import AssetTypeList from "@/components/react-admin/asset-types/AssetTypeList";
import {NoSsr} from "@mui/material";
import CustomerShow from "@/components/react-admin/customers/CustomerShow";
import AssetTypeCreate from "@/components/react-admin/asset-types/AssetTypeCreate";
import AssetCreate from "@/components/react-admin/assets/AssetCreate";
import CustomerCreate from "@/components/react-admin/customers/CustomerCreate";
import {CustomerEdit} from "@/components/react-admin/customers/CustomerEdit";
import {AssetTypeShow} from "@/components/react-admin/asset-types/AssetTypeShow";
import {AssetShow} from "@/components/react-admin/assets/AssetShow";
import {AssetEdit} from "@/components/react-admin/assets/AssetEdit";
import {AssetTypeEdit} from "@/components/react-admin/asset-types/AssetTypeEdit";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import CategoryIcon from "@mui/icons-material/Category";

export default function App() {
    return (
        <NoSsr>
            <Admin dataProvider={dataProvider}>
                <Resource name="customers" list={CustomerList} edit={CustomerEdit} show={CustomerShow} create={CustomerCreate} icon={PeopleIcon}/>
                <Resource name="assets" list={AssetList} edit={AssetEdit} show={AssetShow} create={AssetCreate} icon={BuildIcon}/>
                <Resource name="asset_types" list={AssetTypeList} edit={AssetTypeEdit} show={AssetTypeShow} create={AssetTypeCreate} icon={CategoryIcon}/>
            </Admin>
        </NoSsr>
    );
}
