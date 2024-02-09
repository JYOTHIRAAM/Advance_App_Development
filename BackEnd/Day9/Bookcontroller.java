package com.security.security.controller;

import com.security.security.dto.Bookdto;
import com.security.security.service.Bookservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products/book")
@CrossOrigin("*")
public class Bookcontroller {

    private final Bookservice enqservice;

    public Bookcontroller(Bookservice enqservice) {
        this.enqservice = enqservice;
    }

    @GetMapping
    public ResponseEntity<List<Bookdto>> getAllServices() {
        List<Bookdto> services = enqservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Bookdto> getServiceByName(@PathVariable String name) {
        Bookdto service = enqservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Bookdto> createService(@RequestBody Bookdto service) {
        Bookdto createdService = enqservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Bookdto> updateServiceByName(@PathVariable String name, @RequestBody Bookdto updatedService) {
        Bookdto updatedServiceDto = enqservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        enqservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}