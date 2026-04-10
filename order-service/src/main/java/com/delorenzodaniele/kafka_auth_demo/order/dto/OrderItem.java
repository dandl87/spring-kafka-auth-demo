package com.delorenzodaniele.kafka_auth_demo.order.dto;

public record OrderItem(
        String productName,
        Integer quantity
) {
}
