# tag-checker
This is a small web app that takes in a paragraph input from the user and evaluates if any tags present in the paragraph have been closed

## Prerequisites

* Nodejs 15.2.1
* Docker 19.03.13

## Setting up and Deploying a Development Environment

1. Install dependancies for the server
    ```
    $ cd server
    $ npm install
    ```
2. Install all dependancies for the client
    ```
    $ cd client
    $ npm install
    ```
3. Run the npm dev script
    ```
    $ cd server
    $ npm run dev
    ```
4. Open your favourite browser at http://localhost:3000

## Setting up and Deploying a Production Environment

1. Build the docker image
    ```
    $ docker build -f Dockerfile -t tag-checker-image
    ```
2. Run the docker image
    ```
    $ docker run -d -p 5000:5000 tag-checker-image
    ```

## Run server tests

1. Run the test script
    ```
    $ npm run test
    ```
