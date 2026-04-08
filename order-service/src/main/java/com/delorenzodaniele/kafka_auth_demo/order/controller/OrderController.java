package com.delorenzodaniele.kafka_auth_demo.order.controller;

import com.delorenzodaniele.kafka_auth_demo.order.dto.CreateOrderRequest;
import com.delorenzodaniele.kafka_auth_demo.order.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public String createOrder(@RequestBody CreateOrderRequest request){
        orderService.createOrder(request);
        return "Order created successfully";
    }

}
