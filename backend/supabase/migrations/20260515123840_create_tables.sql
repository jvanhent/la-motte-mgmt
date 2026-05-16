create schema if not exists la_motte_mgmt;

create table la_motte_mgmt.asset_types
(
    id    smallint generated always as identity primary key,
    code  text unique not null,
    label text        not null
);

create table la_motte_mgmt.assets
(
    id            bigint generated always as identity primary key,
    asset_type_id smallint    not null references la_motte_mgmt.asset_types (id),
    name          text        not null, -- bv. "Bella", "Box 12"
    is_active     boolean     not null default true,
    created_at    timestamptz not null default now()
);

create table la_motte_mgmt.customers
(
    id         bigint generated always as identity primary key,
    name       text        not null,
    phone      text,
    created_at timestamptz not null default now()
);

GRANT USAGE ON SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA la_motte_mgmt TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA la_motte_mgmt GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;