package com.delorenzodaniele.kafka_auth_demo.order.service;

import com.delorenzodaniele.kafka_auth_demo.order.dto.CreateOrderRequest;
import com.delorenzodaniele.kafka_auth_demo.order.event.OrderCreatedEvent;
import com.delorenzodaniele.kafka_auth_demo.order.messaging.OrderProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    private final OrderProducer orderProducer;

    public OrderService(OrderProducer orderProducer) {
        this.orderProducer = orderProducer;
    }


    public void createOrder(CreateOrderRequest request) {
        OrderCreatedEvent event = new OrderCreatedEvent(request.items());
        orderProducer.sendOrderCreated(event);
        logger.info("Order created successfully");
    }
}
