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
        logger.info("Creating order: product={}, quantity={}",request.productName(), request.quantity());
        OrderCreatedEvent event = new OrderCreatedEvent(request.productName(), request.quantity());
        orderProducer.sendOrderCreated(event);
        logger.info("Order created successfully");
    }
}
