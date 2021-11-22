create table region(
 id SERIAL PRIMARY KEY NOT NULL,
  name  TEXT NOT NULL
);

CREATE TABLE route(
    id SERIAL PRIMARY KEY NOT NULL,
    route_name TEXT NOT NULL,
    fare_price FLOAT NOT NULL
);

CREATE TABLE taxi(
     id SERIAL PRIMARY KEY NOT NULL,
     reg_number VARCHAR(20) NOT NULL,
     route_id INT NOT NULL,
     FOREIGN KEY (route_id) REFERENCES route(id)
);

CREATE TABLE trip(
 id SERIAL PRIMARY KEY NOT NULL,
 reg_id INT NOT NULL,
 region_id INT NOT NULL,
 FOREIGN KEY (reg_id) REFERENCES taxi(id),
 FOREIGN KEY (region_id) REFERENCES region(id)
);

