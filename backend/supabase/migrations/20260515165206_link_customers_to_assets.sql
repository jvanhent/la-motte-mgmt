create table la_motte_mgmt.customers_assets
(
    id          bigint      generated always as identity primary key,
    customer_id bigint      not null references la_motte_mgmt.customers (id) on delete cascade,
    asset_id    bigint      not null references la_motte_mgmt.assets (id) on delete cascade,
    created_at  timestamptz not null default now(),

    unique (customer_id, asset_id)
);

create or replace function la_motte_mgmt.get_customer_assets(
  p_customer_id bigint,
  p_asset_type_codes text[] default null
)
returns table (
  asset_id bigint,
  name text,
  code text,
  label text
)
language sql
as $$
select a.id, a.name, t.code, t.label
from la_motte_mgmt.customers_assets ca
         join la_motte_mgmt.assets a on a.id = ca.asset_id
         join la_motte_mgmt.asset_types t on t.id = a.asset_type_id
where ca.customer_id = p_customer_id
  and (p_asset_type_codes is null or t.code = any (p_asset_type_codes));
$$;