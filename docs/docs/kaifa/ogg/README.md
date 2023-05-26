# OGG

## ogg→kafka
配置文件参考：  
`kafka.props`
```
gg.handlerlist=kafkahandler 
gg.handler.kafkahandler.type=kafka
gg.handler.kafkahandler.KafkaProducerConfigFile=custom_kafka_producer.properties
gg.handler.kafkahandler.topicMappingTemplate=sapsr3_all
gg.handler.kafkahandler.format=json 
gg.handler.kafkahandler.mode=op  
gg.classpath=dirprm/:/opt/module/kafka_2.12-3.0.1/libs/*:/opt/module/ogg/:/opt/module/ogg/lib/*
javawriter.bootoptions=-Xmx512m -Xms32m -Djava.class.path=ggjava/ggjava.jar
```
引用的kafka配置文件：  
`custom_kafka_producer.properties`
```
bootstrap.servers=192.168.0.230:81
acks=1
reconnect.backoff.ms=1000
value.serializer=org.apache.kafka.common.serialization.ByteArraySerializer
key.serializer=org.apache.kafka.common.serialization.ByteArraySerializer
batch.size=102400
linger.ms=10000

# kafka开启安全认证后新加的配置 ↓
sasl.mechanism=PLAIN
security.protocol=SASL_PLAINTEXT
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="admin" password="admin-2019";
# 注意，这里配置sasl的账号密码必须加双引号，否则在填入值首字符为数字的情况下读取不到参数
```
