sudo docker build -t mmbsystem-main_react-app:latest .

sudo docker rm --force mmbsystem-main_react-app_1

sudo docker run -d -p 8080:8080 --name mmbsystem-main_react-app_1 mmbsystem-main_react-app:latest

sudo docker rm --force mmbsystem-main_react-app_1

cd ..

sudo docker-compose up --build
