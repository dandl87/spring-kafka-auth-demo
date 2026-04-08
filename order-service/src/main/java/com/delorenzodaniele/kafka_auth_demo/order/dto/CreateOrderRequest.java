package com.delorenzodaniele.kafka_auth_demo.order.dto;

public record CreateOrderRequest(
        String productName,
        int quantity
) {
}
