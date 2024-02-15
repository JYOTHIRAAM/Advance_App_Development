package com.security.security.service;

import com.security.security.dto.Addondto;
import com.security.security.entity.Addonentity;
import com.security.security.mapper.Addonmapper;
import com.security.security.repository.Addonrepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Addonservice {

    @Autowired
    private final Addonrepo enqrepo;

    public Addonservice(Addonrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Addondto> getAllServices() {
        List<Addonentity> services = enqrepo.findAll();
        return services.stream()
                .map(Addonmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Addondto getServiceByName(String name) {
        Addonentity enqentity = enqrepo.findByName(name);
        return Addonmapper.maptoServicedto(enqentity);
    }

    public Addondto createService(Addondto servicedto) {
        Addonentity enqentity = Addonmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Addonmapper.maptoServicedto(enqentity);
    }

    public Addondto updateServiceByName(String name, Addondto updatedServicedto) {
        Addonentity existingService = enqrepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setRating(updatedServicedto.getRating());
            existingService.setPrice(updatedServicedto.getPrice());
           ;
            
            existingService = enqrepo.save(existingService);
            return Addonmapper.maptoServicedto(existingService);
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
