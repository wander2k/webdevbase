curl -i -X POST \
  --url http://localhost:8001/apis/ \
  --data 'name=demo-api' \
  --data 'upstream_url=http://web/src/json.php' \
  --data 'uris=/go'