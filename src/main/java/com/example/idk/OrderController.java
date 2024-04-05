package com.example.idk;


import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private List<Order> orders = new ArrayList<>();

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        orders.add(order);
        return order;
    }

    @GetMapping
    public List<Order> getOrders() {
        return orders;
    }
}
