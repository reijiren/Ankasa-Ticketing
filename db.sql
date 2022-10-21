create database ankasa_ticketing;

create table users(
    id serial primary key,
    username varchar(40),
    email varchar(40),
    password varchar(25),
    credit_card varchar(16),
    phone varchar(12),
    city varchar(30),
    address text,
    post_code varchar(5),
    level integer, -- 0: Admin, 1: User
    photo text,
    date_created date,
    balance integer,
    gender varchar(6)
);

create table flight(
    id_flight varchar(10) primary key,
    airline text,
    city_departure varchar(30),
    city_destination varchar(30),
    region_departure varchar(30),
    region_destination varchar(30),
    luggage integer, -- 0: No Luggage, 1: Luggage
    inflight_meal integer, -- 0: No Meal, 1: Meal
    wifi integer, -- 0: No Wifi, 1: Wifi
    time_departure time,
    time_arrived time,
    price integer,
    refundable integer, -- 0: No Refund, 1: Refundable
    reschedule integer, -- 0: No Reschedule, 1: Reschedule
    logo text,
    transit integer, -- 0: Direct, 1: 1 Transit, 2: 2+ Transit
    date_created date
);

create table booking(
    id_booking serial primary key,
    id_customer integer,
    id_flight varchar(10),
    status integer, -- 0: Payment Incomplete, 1: Payment Complete
    terminal varchar(5),
    gate integer,
    class varchar(20),
    history integer, -- 0: Flight Incomplete, 1: Flight Complete
    date_created date
);