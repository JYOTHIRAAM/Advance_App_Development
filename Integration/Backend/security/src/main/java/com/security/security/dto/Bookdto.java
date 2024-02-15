package com.security.security.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookdto {
    private Long id;
    private String ename;
    private String name;
    private long mobile;
    private String email;
    private int age;
    private String address;
    private String date;
    private String time;
    private int noofpeople;
    private int veg;
    private int nonveg;
    private String food;
    private String addons;
    private int pr;
    private int price;
    private String status;

}