package com.security.security.mapper;

import com.security.security.dto.Fooddto;
import com.security.security.entity.FoodEntity;

public class Foodmapper {

    public static Fooddto maptoServicedto(FoodEntity enqentity) {
        // Implement the mapping logic
        return new Fooddto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getCategory(),
                enqentity.getPrice()
                
        );
    }

    public static FoodEntity maptoServiceentity(Fooddto enqdto) {
        // Implement the mapping logic
        return new FoodEntity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getCategory(),
                enqdto.getPrice()
            
        );
    }
}