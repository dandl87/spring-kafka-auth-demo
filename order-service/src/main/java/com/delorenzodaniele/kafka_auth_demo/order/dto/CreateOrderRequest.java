package com.delorenzodaniele.kafka_auth_demo.order.dto;

import java.util.List;

public record CreateOrderRequest(
        List<OrderItem> items
) {
}
