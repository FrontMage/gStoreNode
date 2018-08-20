# gStoreNode

Node.js client for [gStore](https://github.com/Caesar11/gStore)

## Usage

`npm install https://github.com/FrontMage/gStoreNode`

```javascript
const GStoreClient = rquire("gStoreNode");
const client = new GStoreClient(
  "username",
  "password",
  "http://localhost:9000"
);

(async function() {
  const result = await client.query("lubm", "select * where {?s ?p ?o}");
  console.log(result);
})();
```

### TODO

- publish to npm
