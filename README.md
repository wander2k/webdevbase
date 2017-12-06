# A startup footstep set of microservice development 
  for php / ReactJS Webaplication
## Description 
* php7 on apache server
  * built-in codeception framework with test automation ready
  * e2e test sample
* nginx
  * ReactJs+ReactBoostrap+Redux sample
* webpack
* selenium server

# request
* Mac
* Docker
* Docker-compose
* Homebrew
* Composer

# How to use
```
git clone git@github.com:wander2k/webdevbase.git
cd webdevbase
#bash ./bin/start.sh
#bash ./bin/run_webapp_test.sh
```

# kong trying -- 
```
docker-compose exec kong bash
/var/work/add_api.sh
```
Then access the following url:
http://192.168.99.100:8000/go
In fact, the api is already proxied by kong (kong:8000 -> web:8888)

# Others
#### to access selenium server by vnc password:secret
