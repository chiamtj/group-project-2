CREATE TABLE Users(
user_id serial PRIMARY KEY,
name TEXT,
email TEXT,
password TEXT ,
created_at TIMESTAMP ,
updated_at TIMESTAMP 
);

CREATE TABLE Movies(
movie_id serial PRIMARY KEY,
title TEXT ,
image TEXT ,
genre TEXT ,
synopsis TEXT ,
release_date TEXT ,
cast_members TEXT ,
created_at TIMESTAMP ,
updated_at TIMESTAMP 
);
-- CREATE TABLE Ratings(
-- rating_id serial PRIMARY KEY,
-- FOREIGN KEY(user_id) REFERENCES Users(user_id)
-- FOREIGN KEY(movie_id) REFERENCES Movies(movie_id)
-- rating TEXT NOT NULL
-- )

CREATE TABLE Reviews(
review_id serial PRIMARY KEY,
user_id serial NOT NULL,
movie_id serial NOT NULL,
FOREIGN KEY(user_id) REFERENCES Users(user_id),
FOREIGN KEY(movie_id) REFERENCES Movies(movie_id),
rating INT ,
review TEXT ,
created_at TIMESTAMP ,
updated_at TIMESTAMP 
);