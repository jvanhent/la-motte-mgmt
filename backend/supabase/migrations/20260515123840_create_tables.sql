create schema if not exists la_motte_mgmt;

create table la_motte_mgmt.asset_type
(
    id    smallint generated always as identity primary key,
    code  text unique not null,
    label text        not null
);

create table la_motte_mgmt.asset
(
    id            bigint generated always as identity primary key,
    asset_type_id smallint    not null references la_motte_mgmt.asset_type (id),
    name          text        not null, -- bv. "Bella", "Box 12"
    is_active     boolean     not null default true,
    created_at    timestamptz not null default now()
);

create table la_motte_mgmt.customer
(
    id         bigint generated always as identity primary key,
    name       text        not null,
    phone      text,
    created_at timestamptz not null default now()
);