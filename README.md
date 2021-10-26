Setting up Mongo locally:
- https://www.mongodb.com/products/compass
- https://www.mongodb.com/try/download/community?tck=docs_server
- mongodb://127.0.0.1
- No credentials (unsafe)

running up frontend
```
- npm install -g @angular/cli
- npm update
- ng serve

```


foo
bar

Next step docker:
```
version: "3.8"
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - 27017:27017
    volumes:
      - data:/data
    environment:
      - MONGO_INITDB_ROOT_USERNAME=foo
      - MONGO_INITDB_ROOT_PASSWORD=bar
  mongo-express:
    image: mongo-express
    container_name: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=foo
      - ME_CONFIG_MONGODB_ADMINPASSWORD=bar
      - ME_CONFIG_MONGODB_SERVER=mongodb
volumes:
  data: {}

networks:
  default:
    name: mongodb_network
```

