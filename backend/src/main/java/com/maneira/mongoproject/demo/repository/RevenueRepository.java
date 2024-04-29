package com.maneira.mongoproject.demo.repository;

import com.maneira.mongoproject.demo.domain.Revenue;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RevenueRepository extends MongoRepository<Revenue, Integer> {

    Revenue findByYearAndMonth(Integer year, Integer month);

    List<Revenue> findByYearBetweenAndMonthBetween(Integer startYear, Integer endYear, Integer startMonth, Integer endMonth, Sort sort);
}
