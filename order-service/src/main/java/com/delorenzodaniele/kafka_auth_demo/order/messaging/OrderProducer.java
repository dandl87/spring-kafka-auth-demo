package com.delorenzodaniele.kafka_auth_demo.order.messaging;

import com.delorenzodaniele.kafka_auth_demo.order.event.OrderCreatedEvent;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class OrderProducer {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    public OrderProducer(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendOrderCreated(OrderCreatedEvent orderCreatedEvent) {
        kafkaTemplate.send("order-created", orderCreatedEvent);
    }
}
