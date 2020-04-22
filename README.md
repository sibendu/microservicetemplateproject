# microservicetemplateproject

cd  microservicetemplate

cd  service_a
gradle clean build
docker build -t sibendudas/service_a .

cd  service_ui
npm install 
docker build -t sibendudas/service_ui .

cd ..

docker run -p 8080:8080 sibendudas/service_a  # this service is written in SpringBoot and at http://loalhost:8080
docker run -p 5000:5000 sibendudas/service_ui # this service is written in SpringBoot and at http://loalhost:5000
