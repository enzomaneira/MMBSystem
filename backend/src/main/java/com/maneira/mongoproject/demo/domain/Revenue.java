package com.maneira.mongoproject.demo.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Objects;

@Document
public class Revenue implements Serializable {

    @Id
    private String id;
    private Integer year;
    private Integer month;
    private Double amount;

    public Revenue(){}

    public Revenue(String id, Integer year, Integer month, Double amount) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.amount = amount;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Revenue revenue)) return false;
        return Objects.equals(getId(), revenue.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
