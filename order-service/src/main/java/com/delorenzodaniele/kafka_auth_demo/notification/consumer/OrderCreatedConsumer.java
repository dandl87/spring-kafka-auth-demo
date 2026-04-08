package com.delorenzodaniele.kafka_auth_demo.notification.consumer;

import com.delorenzodaniele.kafka_auth_demo.order.event.OrderCreatedEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class OrderCreatedConsumer {

    private static final Logger logger = LoggerFactory.getLogger(OrderCreatedConsumer.class);

    @KafkaListener(topics = "order-created")
    public void consume(OrderCreatedEvent event){

        logger.info("Received event from kafka: product={}, quantity={}",
                event.productName(),
                event.quantity());

    }
}
