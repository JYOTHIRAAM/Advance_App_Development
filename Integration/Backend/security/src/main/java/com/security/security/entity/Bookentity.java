package com.security.security.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookevents")
public class Bookentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Event Name",nullable = false)
    private String ename;

    @Column(name = "Applicant Name",nullable = false)
    private String name;

    @Column(name = "Mobile No",nullable = false,unique = true)
    private long mobile;
    
    @Column(name = "Email Id",nullable = false,unique = true)
    private String email;
    
    @Column(name = "Age",nullable = false)
    private int age;

    @Column(name = "Applicant Address",nullable = false)
    private String address;
    
    @Column(name = "Event Date",nullable = false)
    private String date;

    @Column(name = "Event Time",nullable = false)
    private String time;

    @Column(name = "No of People",nullable = false)
    private int noofpeople;

    @Column(name = "Veg Items",nullable = false)
    private int veg;

    @Column(name = "Non-Veg Items",nullable = false)
    private int nonveg;

    @Column(name = "Food Menu",nullable = false)
    private String food;

    @Column(name = "Add Ons",nullable = false)
    private String addons;
    
    @Column(name = "Price",nullable = false)
    private int pr;

    @Column(name = "Total Price",nullable = false)
    private int price;

    @Column(name = "Booking Status",nullable = false)
    private String status;
}