package com.security.security.controller;

import com.security.security.dto.Addondto;
import com.security.security.service.Addonservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products/addon")
@CrossOrigin("*")
public class Addoncontroller {

    private final Addonservice enqservice;

    public Addoncontroller(Addonservice enqservice) {
        this.enqservice = enqservice;
    }

    @GetMapping
    public ResponseEntity<List<Addondto>> getAllServices() {
        List<Addondto> services = enqservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Addondto> getServiceByName(@PathVariable String name) {
        Addondto service = enqservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Addondto> createService(@RequestBody Addondto service) {
        Addondto createdService = enqservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Addondto> updateServiceByName(@PathVariable String name, @RequestBody Addondto updatedService) {
        Addondto updatedServiceDto = enqservice.updateServiceByName(name, updatedService);
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