package com.delorenzodaniele.kafka_auth_demo.order.event;

public record OrderCreatedEvent(
        String productName,
        int quantity
) {
}
