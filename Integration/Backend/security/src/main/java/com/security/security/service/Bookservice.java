package com.security.security.service;

import com.security.security.dto.Bookdto;
import com.security.security.entity.Bookentity;
import com.security.security.mapper.Bookmapper;
import com.security.security.repository.Bookrepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Bookservice {

    @Autowired
    private final Bookrepo enqrepo;

    public Bookservice(Bookrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Bookdto> getAllServices() {
        List<Bookentity> services = enqrepo.findAll();
        return services.stream()
                .map(Bookmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Bookdto getServiceById(long id) {
        Bookentity enqentity = enqrepo.findById(id);
        return Bookmapper.maptoServicedto(enqentity);
    }

    public Bookdto createService(Bookdto servicedto) {
        Bookentity enqentity = Bookmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Bookmapper.maptoServicedto(enqentity);
    }

    public Bookdto updateServiceById(long id, Bookdto updatedServicedto) {
        Bookentity existingService = enqrepo.findById(id);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEname(updatedServicedto.getEname());
            existingService.setName(updatedServicedto.getName());
            existingService.setMobile(updatedServicedto.getMobile());
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setAge(updatedServicedto.getAge());
            existingService.setAddress(updatedServicedto.getAddress());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setTime(updatedServicedto.getTime());
            existingService.setNoofpeople(updatedServicedto.getNoofpeople());
            existingService.setVeg(updatedServicedto.getVeg());
            existingService.setNonveg(updatedServicedto.getNonveg());
            existingService.setFood(updatedServicedto.getFood());
            existingService.setAddons(updatedServicedto.getAddons());
            existingService.setPr(updatedServicedto.getPr());
            existingService.setPrice(updatedServicedto.getPrice());
            existingService.setStatus(updatedServicedto.getStatus());
        
           
            
            existingService = enqrepo.save(existingService);
            return Bookmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public Bookdto updateStatusById(long id, String status) {
        Bookentity existingService = enqrepo.findById(id);
        if (existingService != null) {
            // Update the status field
            existingService.setStatus(status);
            
            // Save the updated entity
            existingService = enqrepo.save(existingService);
            
            // Map the updated entity to DTO and return
            return Bookmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
    


    @Transactional
    public void deleteServiceById(long id) {
        enqrepo.deleteById(id);
    }
}