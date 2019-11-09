# Bank Kata ES

<div align="center">
    <img width="200" src="https://www.uco.es/aulasoftwarelibre/wp-content/uploads/2018/09/logo-cuadrado-transparente-1.png" alt="Aula Software Libre de la UCO">
</div>

<div align="center">

![built by developers](https://img.shields.io/badge/built%20by-developers%20%3C%2F%3E-orange.svg?longCache=true&style=for-the-badge) ![made with typescript](https://img.shields.io/badge/made%20with-typescript-green.svg?longCache=true&style=for-the-badge) ![uses git](https://img.shields.io/badge/uses-git-blue.svg?longCache=true&style=for-the-badge)

</div>

This workshop is created by the [Free Software Club](https://www.uco.es/aulasoftwarelibre) from [University of Córdoba (Spain)](https://www.uco.es).

## Install

### Docker

This repository has a docker-compose.yaml file than contains some services:

- Eventstore registry: http://localhost:2113 user:admin password: changeit
- MongoDB
- MongoExpress http://localhost:8081

run with `docker-compose up`

### NestJS backend

You need to install the dependencies. Run `yarn install`.

To run the API backend run `yarn start:dev`.

The application starts in http://localhost:3000

## Demo

You will need a valid uuiv v4 to create the aggregates. You can execute uuidgen in the console or use this:

- 9e773578-32e4-4d22-896d-17eac3258000

## References

- Docker workshop (Spanish): https://aulasoftwarelibre.github.io/taller-de-docker/
- The Software Architecture Chronicles: https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/
