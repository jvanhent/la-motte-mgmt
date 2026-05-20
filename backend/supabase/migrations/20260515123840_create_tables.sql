create schema if not exists la_motte_mgmt;
GRANT USAGE ON SCHEMA la_motte_mgmt TO anon, authenticated, service_role;

SET search_path = 'la_motte_mgmt';

create table asset_types
(
    id          smallint generated always as identity primary key,
    code        text unique not null, -- ex. HORSE
    label       text        not null, -- ex. Cheval
    ref_price   int2        not null  -- ex. 300
);

create table assets
(
    id            bigint generated always as identity primary key,
    asset_type_id smallint    not null references asset_types (id),
    name          text        not null, -- bv. "Bella", "Box 12"
    ref_price     int2        not null, -- ex. 320
    is_active     boolean     not null default true,
    created_at    timestamptz not null default now()
);
CREATE INDEX IF NOT EXISTS idx_assets_asset_type_id
    ON assets(asset_type_id);

create table customers
(
    id         bigint generated always as identity primary key,
    name       text        not null,
    phone      text,
    created_at timestamptz not null default now()
);

create table customers_assets
(
    id          bigint      generated always as identity primary key,
    customer_id bigint      not null references customers (id) on delete cascade,
    asset_id    bigint      not null references assets (id) on delete cascade,
    ref_price   int2        not null,  -- ex. 300
    created_at  timestamptz not null default now(),
    unique (customer_id, asset_id)
);
CREATE INDEX IF NOT EXISTS idx_customers_assets_asset_id
    ON customers_assets(asset_id);
CREATE INDEX IF NOT EXISTS idx_customers_assets_customer_id
    ON customers_assets(customer_id);


GRANT ALL ON ALL TABLES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;