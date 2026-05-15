-- Schema
create schema if not exists la_motte_mgmt;

-- Clients tabel
create table if not exists la_motte_mgmt.clients (
    id bigint generated always as identity primary key,

    name text not null,
    phone text,

    created_at timestamptz not null default now()
);