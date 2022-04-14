create TABLE person(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    userpass VARCHAR(255)
);

create TABLE people(
    id SERIAL PRIMARY KEY,
    peopleName VARCHAR(255),
    peoplePhone VARCHAR(255),
    active BOOLEAN,
    comment VARCHAR(255),
    emodji VARCHAR(255),
    price VARCHAR(255)
);