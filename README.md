# MMBSystem

This is a project that started with the goal for learning and practice Java and Spring Boot such as software engenireeing skills in general, but became part of something bigger than this.

My mother is a school teacher for kids around 2 to 6 years old. About 10 years ago she started making homemade toys for using in her class for educational porpuse. She really liked doing it, so she countiued and start selling for getting an extra income. Today, if she is not at the school she is needling and building something, it's a passion for her and became something that she could make money. I start noticing that my mother use excel for registering and tracking statistics about her sales, so I always thouht that I could help her building some better graphs or anything to help her somehow. So when I finished a course about Spring Boot I have the ideia to make a system to help her register her products, her clients and orders, and that's what this is about!

## System Requirements 

First of all I had to go to the user(my mom) and make the proposition for the application. She thought the idea was great and together we discuss what the system would need for be functional for her. After some conversations we together got the following requirments:

- The system must be able to register dolls.
- The system must be able to register clients.
- The system must be able to register orders made by clients.
- The system must be able to search for clients, showing all orders made by a specific client.
- The system must be able to search for a doll, showing all its attributes.
- The system must be able to search for a doll based on its price or sales quantity.
- The system must be able to search for orders by date range or price (min, max).
- The system must be able to sort the search results for clients by name, purchases made, amount spent.
- The system must be able to sort the search results for products by name, price, units sold, revenue.
- The system must be able to sort the search results for orders by date and total.
- The system must be able to change the order of sorting between ascending and descending.
- Whenever an order is changed to the PAID status, the order value must be added to a count attribute for the Client and Product entities.
-  Whenever an order is changed to the PAID status, 1 unit must be added to the count for Client and Product.
- The system must create a Sales by Product chart, showing the quantity of each product sold over time, allowing the user to choose the product and the time range for the chart.
- The system must create a Sales by Customer chart, showing the total value of purchases for each customer, allowing the user to choose the customer and the time range.
- The system must create a Most Sold Products chart, showing the products with the most sales.
- The system must create a Total Sales Value chart per day/month/year, showing the total sales over a user-chosen time range.
- The system must create a Product Price Distribution chart, showing the revenue percentage for each product.
- Each Product entity must have an attribute indicating the product type: [FELT, CLOTH, CHRISTMAS, SCHOOL, DECORATION, KEEPSAKE, COSTUME, EASTER, PUPPETS, MISC, REPAIR, QUIET BOOK, TOYS, STATIONERY].
- Each Order entity must have the order status: [PENDING, IN_PROGRESS, READY, DELIVERED, PAID, CANCELED].
- The system must change the order status, recording the date of the change.
- Each Product, Customer, and Order entity must have a Number attribute, which will be an integer assigned by the user.
- The system must create a Revenue entity, which will have the attributes: month, year, and value.
- Whenever an order is changed to the PAID status, the value must be updated for the relevant Revenue entity.
- The system must generate a table showing revenues per month and year, filtered by time.
- The system must generate a chart showing revenue over time, with time filtering capability.
- The system must allow the user to edit Customers and Products.
- The system must allow the user to delete Customers, Products, and Orders.
- The system must allow the user to register the stock for each product.
- The system must search for a product by number and show the user the quantity in stock.
- Whenever an order is removed, the counting statistics for the relevant entities must also be adjusted.

## Data Model


After defining the requirements, I turned my attention to the data structure of the application. I recognized the need for entities such as Products, Clients, and Orders based on my experience with an e-commerce system during college. Additionally, I understood the necessity for an OrderItem entity to manage individual items within orders, and I decided to create a separate entity to track monthly financial transactions.
In choosing the database, I opted for MongoDB due to its NoSQL nature. This decision was driven by the flexibility offered by MongoDB, making it well-suited for handling the diverse and evolving data structures of the application.

![image](https://github.com/enzomaneira/MMBSystem/assets/62163206/86922eb2-7392-47fa-84e9-7b6b04573ce1)

## Architecture

For designing the system architecture, I opted for a layered service architecture that I have previously used and believed would be ideal for the application. This approach offers clear separation of responsibilities, making code maintenance easier, and provides an organized structure for development. As my main focus was on studying and practicing backend development, I knew it would require a Data Access Layer, a Service Layer, and a Rest Controller. Additionally, I aimed to use Docker to simplify setup on my mom's computer. This led me to a solution like this:

![image](https://github.com/enzomaneira/MMBSystem/assets/62163206/9613b7c3-63e8-4ee6-9ac6-314daeb02539)



## Installation

Follow the following instructions to install the system on your local machine:

### Pre-reqs

You need ot be on a Linux Ubuntu Machine

#### Step 1: Clone the repo:

```bash
git clone https://github.com/seu-usuario/MMBSystem.git
cd MMBSystem
```
#### Step 2: Add Docker's official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

#### Step 3: Set up the stable repository:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"  # For Debian/Ubuntu-based systems
```

#### Step 4: Start and enable Docker service:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```


#### Step 5: Install docker compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Step 6: Make the binary executable:

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

### Step 7: Execute app:

```bash
docker-compose up --build
```

### Expected result:

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

```bash
Starting mmbsystem-main_mongodb_1   ... done
Starting mmbsystem-main_react-app_1 ... done
Starting mmbsystem-main_springboot-mongodb_1 ... done
Attaching to mmbsystem-main_react-app_1, mmbsystem-main_mongodb_1, mmbsystem-main_springboot-mongodb_1
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.785+00:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"main","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.785+00:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"main","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":21},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":21},"outgoing":{"minWireVersion":6,"maxWireVersion":21},"isInternalClient":true}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.787+00:00"},"s":"I",  "c":"NETWORK",  "id":4648601, "ctx":"main","msg":"Implicit TCP FastOpen unavailable. If TCP FastOpen is required, set tcpFastOpenServer, tcpFastOpenClient, and tcpFastOpenQueueSize."}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.790+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationDonorService","namespace":"config.tenantMigrationDonors"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.790+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationRecipientService","namespace":"config.tenantMigrationRecipients"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.790+00:00"},"s":"I",  "c":"CONTROL",  "id":5945603, "ctx":"main","msg":"Multi threading initialized"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.791+00:00"},"s":"I",  "c":"TENANT_M", "id":7091600, "ctx":"main","msg":"Starting TenantMigrationAccessBlockerRegistry"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.791+00:00"},"s":"I",  "c":"CONTROL",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":1,"port":27017,"dbPath":"/data/db","architecture":"64-bit","host":"7290ccc9a1bc"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.791+00:00"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"7.0.8","gitVersion":"c5d33e55ba38d98e2f48765ec4e55338d67a4a64","openSSLVersion":"OpenSSL 3.0.2 15 Mar 2022","modules":[],"allocator":"tcmalloc","environment":{"distmod":"ubuntu2204","distarch":"x86_64","target_arch":"x86_64"}}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.791+00:00"},"s":"I",  "c":"CONTROL",  "id":51765,   "ctx":"initandlisten","msg":"Operating System","attr":{"os":{"name":"Ubuntu","version":"22.04"}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.791+00:00"},"s":"I",  "c":"CONTROL",  "id":21951,   "ctx":"initandlisten","msg":"Options set by command line","attr":{"options":{"net":{"bindIp":"*"}}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.793+00:00"},"s":"I",  "c":"STORAGE",  "id":22270,   "ctx":"initandlisten","msg":"Storage engine to use detected by data files","attr":{"dbpath":"/data/db","storageEngine":"wiredTiger"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.794+00:00"},"s":"I",  "c":"STORAGE",  "id":22297,   "ctx":"initandlisten","msg":"Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem","tags":["startupWarnings"]}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:58.794+00:00"},"s":"I",  "c":"STORAGE",  "id":22315,   "ctx":"initandlisten","msg":"Opening WiredTiger","attr":{"config":"create,cache_size=3342M,session_max=33000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,remove=true,path=journal,compressor=snappy),builtin_extension_config=(zstd=(compression_level=6)),file_manager=(close_idle_time=600,close_scan_interval=10,close_handle_minimum=2000),statistics_log=(wait=0),json_output=(error,message),verbose=[recovery_progress:1,checkpoint_progress:1,compact_progress:1,backup:0,checkpoint:0,compact:0,evict:0,history_store:0,recovery:0,rts:0,salvage:0,tiered:0,timestamp:0,transaction:0,verify:0,log:0],"}}
react-app_1           | 
react-app_1           | > codebuddy-repo@0.0.0 dev /app
react-app_1           | > vite --host 0.0.0.0
react-app_1           | 
react-app_1           | 
react-app_1           |   VITE v4.5.0  ready in 389 ms
react-app_1           | 
react-app_1           |   ➜  Local:   http://localhost:5173/
react-app_1           |   ➜  Network: http://172.23.0.2:5173/
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.830+00:00"},"s":"I",  "c":"STORAGE",  "id":4795906, "ctx":"initandlisten","msg":"WiredTiger opened","attr":{"durationMillis":1036}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.830+00:00"},"s":"I",  "c":"RECOVERY", "id":23987,   "ctx":"initandlisten","msg":"WiredTiger recoveryTimestamp","attr":{"recoveryTimestamp":{"$timestamp":{"t":0,"i":0}}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.842+00:00"},"s":"W",  "c":"CONTROL",  "id":22120,   "ctx":"initandlisten","msg":"Access control is not enabled for the database. Read and write access to data and configuration is unrestricted","tags":["startupWarnings"]}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.842+00:00"},"s":"W",  "c":"CONTROL",  "id":5123300, "ctx":"initandlisten","msg":"vm.max_map_count is too low","attr":{"currentValue":65530,"recommendedMinimum":1677720,"maxConns":838860},"tags":["startupWarnings"]}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.845+00:00"},"s":"I",  "c":"NETWORK",  "id":4915702, "ctx":"initandlisten","msg":"Updated wire specification","attr":{"oldSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":21},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":21},"outgoing":{"minWireVersion":6,"maxWireVersion":21},"isInternalClient":true},"newSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":21},"incomingInternalClient":{"minWireVersion":21,"maxWireVersion":21},"outgoing":{"minWireVersion":21,"maxWireVersion":21},"isInternalClient":true}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.845+00:00"},"s":"I",  "c":"REPL",     "id":5853300, "ctx":"initandlisten","msg":"current featureCompatibilityVersion value","attr":{"featureCompatibilityVersion":"7.0","context":"startup"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.845+00:00"},"s":"I",  "c":"STORAGE",  "id":5071100, "ctx":"initandlisten","msg":"Clearing temp directory"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.847+00:00"},"s":"I",  "c":"CONTROL",  "id":6608200, "ctx":"initandlisten","msg":"Initializing cluster server parameters from disk"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.847+00:00"},"s":"I",  "c":"CONTROL",  "id":20536,   "ctx":"initandlisten","msg":"Flow Control is enabled on this deployment"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.848+00:00"},"s":"I",  "c":"FTDC",     "id":20625,   "ctx":"initandlisten","msg":"Initializing full-time diagnostic data capture","attr":{"dataDirectory":"/data/db/diagnostic.data"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.856+00:00"},"s":"I",  "c":"REPL",     "id":6015317, "ctx":"initandlisten","msg":"Setting new configuration state","attr":{"newState":"ConfigReplicationDisabled","oldState":"ConfigPreStart"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.856+00:00"},"s":"I",  "c":"STORAGE",  "id":22262,   "ctx":"initandlisten","msg":"Timestamp monitor starting"}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.857+00:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"/tmp/mongodb-27017.sock"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.857+00:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"0.0.0.0"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.857+00:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:21:59.857+00:00"},"s":"I",  "c":"CONTROL",  "id":8423403, "ctx":"initandlisten","msg":"mongod startup complete","attr":{"Summary of time elapsed":{"Startup from clean shutdown?":true,"Statistics":{"Transport layer setup":"0 ms","Run initial syncer crash recovery":"0 ms","Create storage engine lock file in the data directory":"0 ms","Get metadata describing storage engine":"0 ms","Validate options in metadata against current startup options":"0 ms","Create storage engine":"1038 ms","Write current PID to file":"10 ms","Initialize FCV before rebuilding indexes":"3 ms","Drop abandoned idents and get back indexes that need to be rebuilt or builds that need to be restarted":"0 ms","Rebuild indexes for collections":"0 ms","Load cluster parameters from disk for a standalone":"0 ms","Build user and roles graph":"0 ms","Set up the background thread pool responsible for waiting for opTimes to be majority committed":"1 ms","Initialize information needed to make a mongod instance shard aware":"0 ms","Start up the replication coordinator":"2 ms","Start transport layer":"0 ms","_initAndListen total elapsed time":"1066 ms"}}}}
springboot-mongodb_1  | 
springboot-mongodb_1  |   .   ____          _            __ _ _
springboot-mongodb_1  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
springboot-mongodb_1  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
springboot-mongodb_1  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
springboot-mongodb_1  |   '  |____| .__|_| |_|_| |_\__, | / / / /
springboot-mongodb_1  |  =========|_|==============|___/=/_/_/_/
springboot-mongodb_1  |  :: Spring Boot ::                (v3.2.3)
springboot-mongodb_1  | 
springboot-mongodb_1  | 2024-04-30T00:22:00.110Z  INFO 1 --- [           main] c.m.mongoproject.demo.DemoApplication    : Starting DemoApplication v0.0.1-SNAPSHOT using Java 17-ea with PID 1 (/app/app.jar started by root in /app)
springboot-mongodb_1  | 2024-04-30T00:22:00.114Z  INFO 1 --- [           main] c.m.mongoproject.demo.DemoApplication    : No active profile set, falling back to 1 default profile: "default"
springboot-mongodb_1  | 2024-04-30T00:22:00.731Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data MongoDB repositories in DEFAULT mode.
springboot-mongodb_1  | 2024-04-30T00:22:00.799Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 64 ms. Found 5 MongoDB repository interfaces.
springboot-mongodb_1  | 2024-04-30T00:22:01.312Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
springboot-mongodb_1  | 2024-04-30T00:22:01.326Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
springboot-mongodb_1  | 2024-04-30T00:22:01.327Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.19]
springboot-mongodb_1  | 2024-04-30T00:22:01.379Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
springboot-mongodb_1  | 2024-04-30T00:22:01.381Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1186 ms
springboot-mongodb_1  | 2024-04-30T00:22:01.571Z  INFO 1 --- [           main] org.mongodb.driver.client                : MongoClient with metadata {"driver": {"name": "mongo-java-driver|sync|spring-boot", "version": "4.11.1"}, "os": {"type": "Linux", "name": "Linux", "architecture": "amd64", "version": "6.5.0-28-generic"}, "platform": "Java/Oracle Corporation/17-ea+14"} created with settings MongoClientSettings{readPreference=primary, writeConcern=WriteConcern{w=null, wTimeout=null ms, journal=null}, retryWrites=true, retryReads=true, readConcern=ReadConcern{level=null}, credential=null, transportSettings=null, streamFactoryFactory=null, commandListeners=[], codecRegistry=ProvidersCodecRegistry{codecProviders=[ValueCodecProvider{}, BsonValueCodecProvider{}, DBRefCodecProvider{}, DBObjectCodecProvider{}, DocumentCodecProvider{}, CollectionCodecProvider{}, IterableCodecProvider{}, MapCodecProvider{}, GeoJsonCodecProvider{}, GridFSFileCodecProvider{}, Jsr310CodecProvider{}, JsonObjectCodecProvider{}, BsonCodecProvider{}, EnumCodecProvider{}, com.mongodb.client.model.mql.ExpressionCodecProvider@49e4c2d5, com.mongodb.Jep395RecordCodecProvider@24a2e565, com.mongodb.KotlinCodecProvider@3e36b7a0]}, loggerSettings=LoggerSettings{maxDocumentLength=1000}, clusterSettings={hosts=[mongodb:27017], srvServiceName=mongodb, mode=SINGLE, requiredClusterType=UNKNOWN, requiredReplicaSetName='null', serverSelector='null', clusterListeners='[]', serverSelectionTimeout='30000 ms', localThreshold='15 ms'}, socketSettings=SocketSettings{connectTimeoutMS=10000, readTimeoutMS=0, receiveBufferSize=0, proxySettings=ProxySettings{host=null, port=null, username=null, password=null}}, heartbeatSocketSettings=SocketSettings{connectTimeoutMS=10000, readTimeoutMS=10000, receiveBufferSize=0, proxySettings=ProxySettings{host=null, port=null, username=null, password=null}}, connectionPoolSettings=ConnectionPoolSettings{maxSize=100, minSize=0, maxWaitTimeMS=120000, maxConnectionLifeTimeMS=0, maxConnectionIdleTimeMS=0, maintenanceInitialDelayMS=0, maintenanceFrequencyMS=60000, connectionPoolListeners=[], maxConnecting=2}, serverSettings=ServerSettings{heartbeatFrequencyMS=10000, minHeartbeatFrequencyMS=500, serverListeners='[]', serverMonitorListeners='[]'}, sslSettings=SslSettings{enabled=false, invalidHostNameAllowed=false, context=null}, applicationName='null', compressorList=[], uuidRepresentation=JAVA_LEGACY, serverApi=null, autoEncryptionSettings=null, dnsClient=null, inetAddressResolver=null, contextProvider=null}
mongodb_1             | {"t":{"$date":"2024-04-30T00:22:01.577+00:00"},"s":"I",  "c":"NETWORK",  "id":22943,   "ctx":"listener","msg":"Connection accepted","attr":{"remote":"172.23.0.4:41790","uuid":{"uuid":{"$uuid":"472b2433-c824-4350-aebf-d202ec58b108"}},"connectionId":1,"connectionCount":1}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:22:01.578+00:00"},"s":"I",  "c":"NETWORK",  "id":22943,   "ctx":"listener","msg":"Connection accepted","attr":{"remote":"172.23.0.4:41792","uuid":{"uuid":{"$uuid":"3c9db9d1-bdf9-4c1c-9b45-ba9c22e02476"}},"connectionId":2,"connectionCount":2}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:22:01.588+00:00"},"s":"I",  "c":"NETWORK",  "id":51800,   "ctx":"conn1","msg":"client metadata","attr":{"remote":"172.23.0.4:41790","client":"conn1","negotiatedCompressors":[],"doc":{"driver":{"name":"mongo-java-driver|sync|spring-boot","version":"4.11.1"},"os":{"type":"Linux","name":"Linux","architecture":"amd64","version":"6.5.0-28-generic"},"platform":"Java/Oracle Corporation/17-ea+14"}}}
mongodb_1             | {"t":{"$date":"2024-04-30T00:22:01.588+00:00"},"s":"I",  "c":"NETWORK",  "id":51800,   "ctx":"conn2","msg":"client metadata","attr":{"remote":"172.23.0.4:41792","client":"conn2","negotiatedCompressors":[],"doc":{"driver":{"name":"mongo-java-driver|sync|spring-boot","version":"4.11.1"},"os":{"type":"Linux","name":"Linux","architecture":"amd64","version":"6.5.0-28-generic"},"platform":"Java/Oracle Corporation/17-ea+14"}}}
springboot-mongodb_1  | 2024-04-30T00:22:01.606Z  INFO 1 --- [}-mongodb:27017] org.mongodb.driver.cluster               : Monitor thread successfully connected to server with description ServerDescription{address=mongodb:27017, type=STANDALONE, state=CONNECTED, ok=true, minWireVersion=0, maxWireVersion=21, maxDocumentSize=16777216, logicalSessionTimeoutMinutes=30, roundTripTimeNanos=26565995}
springboot-mongodb_1  | 2024-04-30T00:22:02.461Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path ''
springboot-mongodb_1  | 2024-04-30T00:22:02.475Z  INFO 1 --- [           main] c.m.mongoproject.demo.DemoApplication    : Started DemoApplication in 3.066 seconds (process running for 3.764)
```
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
