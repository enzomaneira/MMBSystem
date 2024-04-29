package com.maneira.mongoproject.demo.service;

import com.maneira.mongoproject.demo.domain.Order;
import com.maneira.mongoproject.demo.domain.Revenue;
import com.maneira.mongoproject.demo.dto.RevenueDTO;
import com.maneira.mongoproject.demo.repository.RevenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class RevenueService {

    @Autowired
    private RevenueRepository repo;

    public List<Revenue> findAll(){
        return repo.findAll();
    }

    public Revenue findByYearAndMonth(Integer year, Integer month){
        return repo.findByYearAndMonth(year, month);
    }

    public List<Revenue> findRevenueByStartEnd(Integer startYear, Integer endYear, Integer startMonth, Integer endMonth, Sort sort){
        return repo.findByYearBetweenAndMonthBetween(startYear, endYear, startMonth, endMonth, sort);
    }

    public void updateRevenueForPayment(Date paymentDate, Order order) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(paymentDate);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1;
        Revenue revenue = repo.findByYearAndMonth(year, month);
        if (revenue == null) {
            revenue = new Revenue();
            revenue.setYear(year);
            revenue.setMonth(month);
            revenue.setAmount(0.0);
        }
        Double paymentAmount = order.getTotal();
        revenue.setAmount(revenue.getAmount() + paymentAmount);
        repo.save(revenue);
    }

    public Revenue fromDto(RevenueDTO objDto){
        return new Revenue(objDto.getId(), objDto.getYear(), objDto.getMonth(), objDto.getAmount());
    }

    public void save(Revenue revenue) {
        repo.save(revenue);
    }
}
