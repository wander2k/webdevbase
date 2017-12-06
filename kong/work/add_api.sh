curl -i -X POST \
  --url http://localhost:8001/apis/ \
  --data 'name=demo-api' \
  --data 'upstream_url=http://192.168.99.100:8888/src/json.php' \
  --data 'uris=/go'