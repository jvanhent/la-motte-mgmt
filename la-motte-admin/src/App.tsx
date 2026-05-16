import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import dataProvider from "./data-provider-config.ts";
import AssetTypeList from "./pages/asset-types/asset-type-list.tsx";
import AssetList from "./pages/assets/asset-list.tsx";
import CustomerList from "./pages/customers/customer-list.tsx";
import CustomerShow from "./pages/customers/customer-show.tsx";


export default function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="asset_types" list={AssetTypeList} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="assets" list={AssetList} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="customers" list={CustomerList} edit={EditGuesser} show={CustomerShow} />
        </Admin>
    );
}

