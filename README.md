# Winter Internship TAPNTOUR Challenge Program

This is a Intership TAPNTOUR Challenge Program, please follow the below intructions to complete the challenge.  
Please if you have any question send a email to info@glyfo.com. 

## Objetive 

Please clone this repository and finish the 3 challenges. Using the endpoint database to fetch the data. 
```console
1-  Show the all tours in a List Component  using TourView.vue file.     ( ETC 6 hrs ) 
2-  Show the all guides in a List Component using GuideView.vue file.    ( ETC 6 hrs )
3-  Show the tour detail in a List Component using  TourDetail.vue file. ( ETC 6 hrs )
```
## Our Stack

```console
+ Vue3 
+ Vite 
+ Tailwincss 
+ Pinia 
```

## Database Model 

```console

create table tours (
  id integer primary key autoincrement,
  name     text not null,
  resume   text not null,
  image    text not null,
  audio    text not null,
  country  text not null,
  city     text not null,
  duration text not null,
  stops    text not null,
  mode     text not null
);

create table tours_detail (
  id integer primary key autoincrement,
  name     text not null,
  resume   text not null,
  stop     text not null,
  image    text not null,
  audio    text not null,
  duration text not null,
  lat      text not null,
  log      text not null,
  tour_id  integer not null,
  guide_id integer not null
);

create table guides (
  id integer primary key autoincrement,
  guidename text not null,
  bio text not null,
  avatar text not null,
  country text not null,
  rating  integer not null
);

```
## Database Endpoint 

### Fetch all tours

```
$ curl -X POST https://tapntour-wk-db.glyfo.workers.dev/api/tours

```

### Fetch all guides

```
$ curl -X POST https://tapntour-wk-db.glyfo.workers.dev/api/guides

```

### Fetch guide detail

```
$ curl -X POST https://tapntour-wk-db.glyfo.workers.dev/api/tours/detail/:id

```

### Project Lifecycle 

```
$ git clone repo_challenge 
$ npm install 
$ npm run dev 
$ npm run build --> deploy the app

```
