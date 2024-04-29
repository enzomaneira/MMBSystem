package com.maneira.mongoproject.demo.resources;

import com.maneira.mongoproject.demo.domain.Revenue;
import com.maneira.mongoproject.demo.dto.ClientDTO;
import com.maneira.mongoproject.demo.dto.RevenueDTO;
import com.maneira.mongoproject.demo.resources.util.URL;
import com.maneira.mongoproject.demo.service.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/revenue")
@CrossOrigin
public class RevenueResource {

    @Autowired
    private RevenueService service;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<RevenueDTO>> findAll(){
        List<Revenue> list = service.findAll();
        List<RevenueDTO> listDto = list.stream().map(x -> new RevenueDTO(x)).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @RequestMapping(value = "findByRange", method = RequestMethod.GET)
    public ResponseEntity<List<Revenue>> searchByRange(
            @RequestParam(defaultValue = "1") String startYear,
            @RequestParam(defaultValue = "10000000") String endYear,
            @RequestParam(defaultValue = "0") String startMonth,
            @RequestParam(defaultValue = "13") String endMonth,
            @RequestParam(defaultValue = "time") String orderBy,
            @RequestParam(defaultValue = "asc") String sortDirection){

        Integer parsedStartYear = URL.convertInteger(startYear, null);
        Integer parsedEndYear = URL.convertInteger(endYear, null);
        Integer parsedStartMonth = URL.convertInteger(startMonth, null);
        Integer parsedEndMonth = URL.convertInteger(endMonth, null);

        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), orderBy);

        List<Revenue> list = service.findRevenueByStartEnd(parsedStartYear, parsedEndYear, parsedStartMonth, parsedEndMonth, sort);
        return ResponseEntity.ok().body(list);
    }
}
