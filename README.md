# Personal Web

## Prerequisites
To use this repository, you will need the following installed locally:
- [Node.js](https://nodejs.org/)
- npm (should be installed with node)
- A container runtime, like [Docker](https://www.docker.com/)

Before you start, make sure to install the dependencies. Clone the repository and navigate to the directory:
```sh
git clone https://github.com/harmonicnauts/personal-web.git
cd personal-web
```

## Running the website locally using Node and Next.js
To build and test the website locally, run:
```sh
# Install dependencies
npm install

# Build & run website
npm build
npm run
```

## Running the website using Docker
To build the website with docker, run:
```sh
docker build -t webpage .
```
Afterwards, to run the website, do:
```sh
docker run -p 3000:3000 webpage
```

This will start the Next.js local server on port 3000. Open up your browser to https://localhost:3000 to view the website. As you make changes to components and pages, Next.js updates the website and forces a browser refresh.
