package com.security.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.security.entity.FoodEntity;

@Repository
public interface Foodrepo extends JpaRepository<FoodEntity, Long> {
    FoodEntity findByName(String name);
    void deleteByName(String name);
    // Other methods...
    
}