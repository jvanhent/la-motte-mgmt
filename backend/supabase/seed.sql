-- Asset types
insert into la_motte_mgmt.asset_types (code, label)
values ('horse', 'Cheval'),
       ('pony', 'Pony'),
       ('box', 'Box'),
       ('locker', 'Locker');

-- HORSES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Horse ' || gs.n
from la_motte_mgmt.asset_types
         cross join generate_series(1, 3) gs(n)
where code = 'horse';


-- PONIES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Pony ' || gs.n
from la_motte_mgmt.asset_types
         cross join generate_series(1, 3) gs(n)
where code = 'pony';


-- BOXES
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Box ' || gs.n
from la_motte_mgmt.asset_types
         cross join generate_series(1, 3) gs(n)
where code = 'box';


-- LOCKERS
insert into la_motte_mgmt.assets (asset_type_id, name)
select id, 'Locker ' || gs.n
from la_motte_mgmt.asset_types
         cross join generate_series(1, 3) gs(n)
where code = 'locker';

-- customer
insert into la_motte_mgmt.customers (name, phone)
select *
from (values
          ('John Peeters', '+32 475 12 34 56'),
          ('Sophie De Smet', '+32 486 98 76 54'),
          ('Thomas Vermeulen', '+32 470 11 22 33'),
          ('Emma Jacobs', '+32 479 44 55 66'),
          ('Liam Van den Broeck', '+32 465 77 88 99'),
          ('Noah Willems', '+32 478 22 11 00'),
          ('Marie De Wilde', '+32 493 33 22 11'),
          ('Lucas Martens', '+32 487 66 55 44 00')
     ) as v(name, phone);