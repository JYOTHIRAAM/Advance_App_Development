package com.security.security.mapper;

import com.security.security.dto.Eventdto;
import com.security.security.entity.Evententity;

public class Eventmapper {

    public static Eventdto maptoServicedto(Evententity enqentity) {
        // Implement the mapping logic
        return new Eventdto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getImage(),
                enqentity.getRating(),
                enqentity.getPhotographer(),
                enqentity.getDescription(),
                enqentity.getPrice()
                
        );
    }

    public static Evententity maptoServiceentity(Eventdto enqdto) {
        // Implement the mapping logic
        return new Evententity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getImage(),
                enqdto.getRating(),
                enqdto.getPhotographer(),
                enqdto.getDescription(),
                enqdto.getPrice()
            
        );
    }
}
