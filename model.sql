-- Типы техники: Большой грузовик, Средний трактор, Маленький тягач, etc
create table vehicle_types
(
	id serial primary key,
	name varchar
);

-- Единицы техники: Грузовик Вольво
create table vehicles
(
	id serial primary key,
	type_id int references vehicle_types(id),
	name varchar,
	state_number varchar,
);

-- Типы навесного оборудования: ковши, щетки, цистерны
create table equipment_types
(
	id serial primary key,
	name varchar,
);

-- Единицы навесного оборудования
create table equipment_units
(
	id serial primary key,
	type_id int references equipment_types(id),
	name varchar,
);

-- Совместимость навесного оборудования с типами техники
-- Задел на будущее: совместимость надо более детально специфицировать
create table equipment_compatibility
(
	vehicle_type_id int not null references vehicle_types(id),
	equipment_type_id int not null references equipment_types(id),
	assembly_price number not null,
	disassembly_price number not null
);

-- Комплектация техники (какой кош навешан на какой грузовик)
create table vehicle_equipment
(
	vehicle_id int not null references vehicles(id),
	equipment_id int not null references equipment_units(id)
);

-- Предприятия
create table companies
(
	id serial not null primary key,
	name varchar,
);

-- Единицы техники у предприятий
create table company_vehicles
(
	company_id not null references companies(id),
	vehicle_id not null references vehicles(id),
);

-- Единицы оборудования у предприятий
create table company_equipment
(
	company_id not null references companies(id),
	equipment_id not null references equipment_units(id),
);

