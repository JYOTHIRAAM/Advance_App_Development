package com.security.security.service;

import com.security.security.dto.Fooddto;
import com.security.security.entity.FoodEntity;
import com.security.security.mapper.Foodmapper;
import com.security.security.repository.Foodrepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Foodservice {

    @Autowired
    private final Foodrepo enqrepo;

    public Foodservice(Foodrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Fooddto> getAllServices() {
        List<FoodEntity> services = enqrepo.findAll();
        return services.stream()
                .map(Foodmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Fooddto getServiceByName(String name) {
        FoodEntity enqentity = enqrepo.findByName(name);
        return Foodmapper.maptoServicedto(enqentity);
    }

    public Fooddto createService(Fooddto servicedto) {
        FoodEntity enqentity = Foodmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Foodmapper.maptoServicedto(enqentity);
    }

    public Fooddto updateServiceByName(String name, Fooddto updatedServicedto) {
        FoodEntity existingService = enqrepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setCategory(updatedServicedto.getCategory());
            existingService.setPrice(updatedServicedto.getPrice());
           ;
            
            existingService = enqrepo.save(existingService);
            return Foodmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
    @Transactional
    public void deleteServiceByName(String name) {
        enqrepo.deleteByName(name);
    }
}
