const GStoreClient = require('./index');
const client = new GStoreClient(
  'username',
  'password',
  'http://localhost:9000'
);

(async function() {
  const result = await client.query('lubm', 'select * where {?s ?p ?o}');
  console.log(result);
})();
