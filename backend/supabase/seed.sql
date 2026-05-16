-- Asset types
insert into la_motte_mgmt.asset_types (code, label)
values ('horse', 'Cheval'),
       ('pony', 'Pony'),
       ('box', 'Box'),
       ('locker', 'Locker');

-- HORSES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Horse ' || gs.n
from la_motte_mgmt.asset_types cross join generate_series(1, 3) gs(n)
where code = 'horse';


-- PONIES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Pony ' || gs.n
from la_motte_mgmt.asset_types cross join generate_series(1, 3) gs(n)
where code = 'pony';


-- BOXES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Box ' || gs.n
from la_motte_mgmt.asset_types cross join generate_series(1, 3) gs(n)
where code = 'box';


-- LOCKERS
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Locker ' || gs.n
from la_motte_mgmt.asset_types cross join generate_series(1, 3) gs(n)
where code = 'locker';

-- customer
insert into la_motte_mgmt.customers (name, phone)
select *
from (values  ('John Peeters', '+32 475 12 34 56'),  ('Sophie De Smet', '+32 486 98 76 54'),  ('Thomas Vermeulen', '+32 470 11 22 33'),  ('Emma Jacobs', '+32 479 44 55 66'),  ('Liam Van den Broeck', '+32 465 77 88 99'),  ('Noah Willems', '+32 478 22 11 00'),  ('Marie De Wilde', '+32 493 33 22 11'),  ('Lucas Martens', '+32 487 66 55 44 00')
     ) as v(name, phone);

-- customers linked to assets
with
    customers as (
        select id, row_number() over (order by id) as rn
        from la_motte_mgmt.customers
    ),
    horses as (
        select a.id, row_number() over (order by a.id) as rn
        from la_motte_mgmt.assets a         join la_motte_mgmt.asset_types t on t.id = a.asset_type_id
        where t.code = 'horse'
    ),
    ponies as (
        select a.id, row_number() over (order by a.id) as rn
        from la_motte_mgmt.assets a         join la_motte_mgmt.asset_types t on t.id = a.asset_type_id
        where t.code = 'pony'
    )

insert into la_motte_mgmt. customers_assets (customer_id, asset_id)

-- Customer 1 → 2 assets (Horse 1 + Pony 1)
select c.id, h.id
from customers c join horses h on h.rn = 1
where c.rn = 1

union all

select c.id, p.id
from customers c join ponies p on p.rn = 1
where c.rn = 1

-- Customer 2 → 1 asset (Horse 2)
union all
select c.id, h.id
from customers c join horses h on h.rn = 2
where c.rn = 2

-- Customer 3 → none (skip)

-- Customer 4 → 2 assets (Horse 3 + Pony 2)
union all
select c.id, h.id
from customers c join horses h on h.rn = 3
where c.rn = 4

union all

select c.id, p.id
from customers c join ponies p on p.rn = 2
where c.rn = 4

-- Customer 5 → 1 asset (Pony 3)
union all
select c.id, p.id
from customers c join ponies p on p.rn = 3
where c.rn = 5

-- Customer 6 → 1 asset (Horse 1)
union all
select c.id, h.id
from customers c join horses h on h.rn = 1
where c.rn = 6

-- Customer 7 → 2 assets (Horse 2 + Pony 1)
union all
select c.id, h.id
from customers c join horses h on h.rn = 2
where c.rn = 7

union all

select c.id, p.id
from customers c join ponies p on p.rn = 1
where c.rn = 7

-- Customer 8 → none
;