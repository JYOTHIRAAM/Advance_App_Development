package com.security.security.service;

import com.security.security.dto.Eventdto;
import com.security.security.entity.Evententity;
import com.security.security.mapper.Eventmapper;
import com.security.security.repository.Eventrepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Eventservice {

    @Autowired
    private final Eventrepo enqrepo;

    public Eventservice(Eventrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Eventdto> getAllServices() {
        List<Evententity> services = enqrepo.findAll();
        return services.stream()
                .map(Eventmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Eventdto getServiceByName(String name) {
        Evententity enqentity = enqrepo.findByName(name);
        return Eventmapper.maptoServicedto(enqentity);
    }

    public Eventdto createService(Eventdto servicedto) {
        Evententity enqentity = Eventmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Eventmapper.maptoServicedto(enqentity);
    }

    public Eventdto updateServiceByName(String name, Eventdto updatedServicedto) {
        Evententity existingService = enqrepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setName(updatedServicedto.getName());
            existingService.setImage(updatedServicedto.getImage());
            existingService.setRating(updatedServicedto.getRating());
            existingService.setPhotographer(updatedServicedto.getPhotographer());
            existingService.setDescription(updatedServicedto.getDescription());
            existingService.setPrice(updatedServicedto.getPrice());
           ;
            
            existingService = enqrepo.save(existingService);
            return Eventmapper.maptoServicedto(existingService);
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
