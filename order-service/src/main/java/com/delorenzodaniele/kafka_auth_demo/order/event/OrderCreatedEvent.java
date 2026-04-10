package com.delorenzodaniele.kafka_auth_demo.order.event;

import com.delorenzodaniele.kafka_auth_demo.order.dto.OrderItem;

import java.util.List;

public record OrderCreatedEvent(
        List<OrderItem> items
) {
}
