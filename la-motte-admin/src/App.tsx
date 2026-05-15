
import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { createClient } from "@supabase/supabase-js";
import { supabaseDataProvider } from "ra-supabase";
import AssetTypeList from "./pages/asset-types/asset-type-list.tsx";
import AssetList from "./pages/assets/asset-list.tsx";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
    db: {
        schema: "la_motte_mgmt"
    }
});

const dataProvider = supabaseDataProvider({
    supabaseClient: supabase,
    instanceUrl: SUPABASE_URL,
    apiKey: SUPABASE_API_KEY,
    schema: () => "la_motte_mgmt",
});

export default function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="asset_types" list={AssetTypeList} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="assets" list={AssetList} edit={EditGuesser} show={ShowGuesser} />
            <Resource name="customers" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        </Admin>
    );
}

