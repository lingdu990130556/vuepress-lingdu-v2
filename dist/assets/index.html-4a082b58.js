import{_ as e,o as a,c as i,e as n}from"./app-956ceeed.js";const r={},s=n(`<h1 id="ogg" tabindex="-1"><a class="header-anchor" href="#ogg" aria-hidden="true">#</a> OGG</h1><h2 id="ogg→kafka" tabindex="-1"><a class="header-anchor" href="#ogg→kafka" aria-hidden="true">#</a> ogg→kafka</h2><p>配置文件参考：<br><code>kafka.props</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gg.handlerlist=kafkahandler 
gg.handler.kafkahandler.type=kafka
gg.handler.kafkahandler.KafkaProducerConfigFile=custom_kafka_producer.properties
gg.handler.kafkahandler.topicMappingTemplate=sapsr3_all
gg.handler.kafkahandler.format=json 
gg.handler.kafkahandler.mode=op  
gg.classpath=dirprm/:/opt/module/kafka_2.12-3.0.1/libs/*:/opt/module/ogg/:/opt/module/ogg/lib/*
javawriter.bootoptions=-Xmx512m -Xms32m -Djava.class.path=ggjava/ggjava.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用的kafka配置文件：<br><code>custom_kafka_producer.properties</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bootstrap.servers=192.168.0.230:81
acks=1
reconnect.backoff.ms=1000
value.serializer=org.apache.kafka.common.serialization.ByteArraySerializer
key.serializer=org.apache.kafka.common.serialization.ByteArraySerializer
batch.size=102400
linger.ms=10000

# kafka开启安全认证后新加的配置 ↓
sasl.mechanism=PLAIN
security.protocol=SASL_PLAINTEXT
sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username=&quot;admin&quot; password=&quot;admin-2019&quot;;
# 注意，这里配置sasl的账号密码必须加双引号，否则在填入值首字符为数字的情况下读取不到参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[s];function l(o,c){return a(),i("div",null,d)}const m=e(r,[["render",l],["__file","index.html.vue"]]);export{m as default};
