Example `GET` request:

```bash
curl http://localhost:3000/items
```

Example `POST` request:

```bash
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"monitor","quantity":4}'
```

Example `PUT` request:

```bash
curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"mechanical keyboard","quantity":12}'
```

Example `DELETE` request:

```bash
curl -X DELETE http://localhost:3000/items/1
```

## Automated Testing
Run tests with:

```bash
npm test
```
