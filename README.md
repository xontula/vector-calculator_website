# Instructions for running the backend server

Requirements to install:
1. python 3.11
2. [Poetry](https://python-poetry.org/docs/#installing-with-the-official-installer)

### Configuring virtual environment

The initial Poetry files including dependencies should already be generated and included in the repository, so all there is left to do is to configure the project virtual environment.

The command below will set Poetry to generate the virtual environment files inside of the backend folder of this project. Can be omitted.

```
poetry config virtualenvs.in-project true
```

We will now use Poetry to generate the virtual environment and install the project dependencies defined by the pyproject.toml file.

```
poetry install
```

Now the virtual environment should be ready to use. 

### Opening a shell within the virtual environment

```
poetry shell
```

### Using Uvicorn to run server program

The FastAPI framework is used in conjunction with the Uvicorn ASGI server for this project.   
After we have opened a shell that is running inside the virtual environment we created earlier with Poetry, we can run the backend server on a local device. The command below sets the server to run on port 5000, but can be changed or even completely omitted. The --reload flag can also be omitted. 

```
uvicorn src.main:app --port 5000 --reload
```
