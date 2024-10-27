# React Component Library

## Overview

This document provides instructions to set up and run the React Component Library developed as part of the coding assignment. This library includes various UI components and is Dockerized for easy setup and deployment.

## Prerequisites

- Docker installed on your system.

## Setup and Running the Application

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/LeopoldXing/assignment13-react-component-library
cd assignment13-web-component-library
```

### Building the Docker Image

To build the Docker image for the application, run the following command in the root directory of the project:

```bash
docker build -t luping_xing_coding_assignment13 .
```

### Running the Docker Container

Once the image is built, you can run the container using:

```bash
docker run -dp 8081:8081 --name luping_xing_coding_assignment13 luping_xing_coding_assignment13
```

### Accessing the Component Library

After the container starts, you can access the component library by navigating to [http://localhost:8081](http://localhost:8081)
in your web browser.

## Components

The library includes the following components:

- Button
- Label
- Text
- Table (with Table Header, Table Row, Table Cell, and Table Footer)
- Dropdown
- Radio Button
- Image
- Hero Image
- Card
  Each component is responsive and includes a default state and a disabled state.
