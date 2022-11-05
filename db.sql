create database ankasa_ticketing;

create table users(
    id_user serial primary key,
    username varchar(40) unique,
    fullname varchar(40),
    email varchar(40) unique,
    password text,
    phone varchar(12),
    gender integer, -- 0: None, 1: Male, 2: Female
    credit_card varchar(16),
    balance integer,
    city varchar(30),
    address text,
    post_code varchar(5),
    level integer, -- 0: Admin, 1: User
    photo text,
    date_created varchar(30)
);

create table airline(
    id_airline serial primary key,
    name varchar(50),
    logo text,
    date_created varchar(30)
);

create table flight(
    id_flight varchar(10) primary key,
    airline integer references airline(id_airline) on delete cascade,
    city_departure varchar(30),
    city_destination varchar(30),
    region_departure varchar(30),
    region_destination varchar(30),
    max_capacity integer,
    current_capacity integer,
    luggage integer, -- 0: No Luggage, 1: Luggage
    inflight_meal integer, -- 0: No Meal, 1: Meal
    wifi integer, -- 0: No Wifi, 1: Wifi
    time_departure time,
    time_arrived time,
    price integer,
    refundable integer, -- 0: No Refund, 1: Refundable
    reschedule integer, -- 0: No Reschedule, 1: Reschedule
    insurance integer, -- 0: No Insurance, 1: Insurance
    transit integer, -- 0: Direct, 1: 1 Transit, 2: 2+ Transit
    date_created varchar(30)
);

create table booking(
    id_booking serial primary key,
    id_user integer references users(id_user) on delete cascade,
    id_flight varchar(10) references flight(id_flight) on delete cascade,
    status integer, -- 0: Payment Incomplete, 1: Payment Complete
    passenger integer,
    terminal varchar(5),
    gate integer,
    class varchar(20),
    seat varchar(5),
    history integer, -- 0: Flight Incomplete, 1: Flight Complete
    date_created varchar(30)
);