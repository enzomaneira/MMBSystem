package com.maneira.mongoproject.demo.dto;

import com.maneira.mongoproject.demo.domain.Revenue;

import java.io.Serializable;

public class RevenueDTO implements Serializable {
    
    private String id;
    private Integer year;
    private Integer month;
    private Double amount;
    
    public RevenueDTO(){}
    
    public RevenueDTO(Revenue obj){
        id = obj.getId();
        year = obj.getYear();
        month = obj.getMonth();
        amount = obj.getAmount();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Revenue toEntity(){
        Revenue revenue = new Revenue();
        revenue.setId(this.id);
        revenue.setYear(this.year);
        revenue.setMonth(this.month);
        revenue.setAmount(this.amount);
        return revenue;
    }

    @Override
    public String toString() {
        return "RevenueDTO{" +
                "id='" + id + '\'' +
                ", year=" + year +
                ", month=" + month +
                ", amount=" + amount +
                '}';
    }
}
