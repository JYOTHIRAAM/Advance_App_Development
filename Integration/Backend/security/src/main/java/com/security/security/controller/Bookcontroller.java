package com.security.security.controller;

import com.security.security.dto.Bookdto;
import com.security.security.service.Bookservice;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@Tag(name="Booked Events", description = "Endpoint for Book Events")
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

    @GetMapping("/{id}")
    public ResponseEntity<Bookdto> getServiceById(@PathVariable long id) {
        Bookdto service = enqservice.getServiceById(id);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // @Tag(name="Post", description = "Endpoint for post")
    @PostMapping
    public ResponseEntity<Bookdto> createService(@RequestBody Bookdto service) {
        Bookdto createdService = enqservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bookdto> updateServiceById(@PathVariable long id, @RequestBody Bookdto updatedService) {
        Bookdto updatedServiceDto = enqservice.updateServiceById(id, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
public ResponseEntity<Bookdto> updateStatusById(@PathVariable long id, @RequestBody String status) {
    Bookdto updatedServiceDto = enqservice.updateStatusById(id, status);
    if (updatedServiceDto != null) {
        return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceById(@PathVariable long id) {
        enqservice.deleteServiceById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}