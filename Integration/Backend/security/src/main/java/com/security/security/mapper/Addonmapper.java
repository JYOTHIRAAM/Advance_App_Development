package com.security.security.mapper;

import com.security.security.dto.Addondto;
import com.security.security.entity.Addonentity;

public class Addonmapper {

    public static Addondto maptoServicedto(Addonentity enqentity) {
        // Implement the mapping logic
        return new Addondto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getRating(),
                enqentity.getPrice()
                
        );
    }

    public static Addonentity maptoServiceentity(Addondto enqdto) {
        // Implement the mapping logic
        return new Addonentity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getRating(),
                enqdto.getPrice()
            
        );
    }
}