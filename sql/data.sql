insert into region(id, name) values (1, 'Durban');
insert into region(id, name) values (2, 'Cape Town');
insert into region(id, name) values (3, 'Gauteng');

insert into route(id,route_name,fare_price) values (4,'Cape Town - Bellville',17.00);
insert into route(id,route_name,fare_price) values (5,'Cape Town - Gugulethu',18.50);
insert into route(id,route_name,fare_price) values (6,'Cape Town - Langa',15.00);
insert into route(id,route_name,fare_price) values (7,'Sandton - Randburg',20.00);
insert into route(id,route_name,fare_price) values (8,'Alexandra - Sandton',16.50);
insert into route(id,route_name,fare_price) values (9,'Sandton - Midrand',12.00);
insert into route(id,route_name,fare_price) values (10,'Umlazi - Durban Central',20.00);
insert into route(id,route_name,fare_price) values (11,'Durban Central - Umhlanga Rocks',16.50);
insert into route(id,route_name,fare_price) values (12,'Durban Central - Umbilo',12.00);

 
     insert into taxi(id,reg_number,route_id) values (13,'CY-172872',4);
     insert into taxi(id,reg_number,route_id) values (14,'NZZ-185-GP',7);
     insert into taxi(id,reg_number,route_id) values (15,'RMH-486-GP',8);
     insert into taxi(id,reg_number,route_id) values (16,'FX-92-BJ-GP',9);
     insert into taxi(id,reg_number,route_id) values (17,'NP 40351',12);
     insert into taxi(id,reg_number,route_id) values (18,'NU 102-478',12);
     insert into taxi(id,reg_number,route_id) values (19,'KM-786-ZN',10);
    insert into taxi(id,reg_number,route_id) values (20,'CA-123-456',5);
    insert into taxi(id,reg_number,route_id) values (21,'CY-123-456',6);

     insert into trip(id,reg_id,region_id) values (22,13,1);
     insert into trip(id,reg_id,region_id) values (23,14,1);
     insert into trip(id,reg_id,region_id) values (24,15,3);
     insert into trip(id,reg_id,region_id) values (25,16,3);
     insert into trip(id,reg_id,region_id) values (26,17,3);
     insert into trip(id,reg_id,region_id) values (27,18,2);
     insert into trip(id,reg_id,region_id) values (28,19,2);
    insert into trip(id,reg_id,region_id) values (29,20,2);
    insert into trip(id,reg_id,region_id) values (30,21,1);







