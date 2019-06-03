package com.scce.controller;

import com.github.pagehelper.PageInfo;
import com.scce.domain.Company;
import com.scce.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;

/*
*  <dependency>
      <groupId>com.github.jsqlparser</groupId>
      <artifactId>jsqlparser</artifactId>
      <version>1.2</version>
    </dependency>
*
* <dependency>
      <groupId>com.github.pagehelper</groupId>
      <artifactId>pagehelper</artifactId>
      <version>5.1.8</version>
    </dependency>*/

/**
 * @program: IdeaProjects
 * @description
 * @author: Lxy
 * @create: 2019-05-10 16:11
 **/
@Controller
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    @RequestMapping("/getCompany")
    @ResponseBody
    public HashMap<String,Object> getCompany(int pageNum, int pageSize) {
        System.out.println("进入");
        PageInfo<Company> pageInfo = companyService.getCompany(pageNum, pageSize);
        System.out.println(pageInfo);
        HashMap<String,Object> o=new HashMap<String,Object>();
        System.out.println(pageInfo.getList());
        o.put("rows",pageInfo.getList());
        o.put("total",pageInfo.getTotal());
        o.put("state",true);
        o.put("msg","111");
        return o;
    }

    @RequestMapping("/delCompany")
    @ResponseBody
    public String delCompany(String [] ids){
        System.out.println("删除");
        for (int i = 0; i < ids.length; i++) {
            String id = ids[i];
            System.out.println(id);
        }
       companyService.del(ids);
        return "1";
    }

    @RequestMapping("/upCompany")
    @ResponseBody
    public String upCompany(Company company){
        System.out.println("修改");
        companyService.upCompany(company);
        return "1";
    }

    @RequestMapping("/addCompany")
    @ResponseBody
    public int addCompany(Company company,int size){
        System.out.println("增加 "+size);
        company.setTime(new Date());
        companyService.addCompany(company);
        PageInfo<Company> pageInfo = companyService.getCompany(1, 5);
        System.out.println(pageInfo.getPages());
        return pageInfo.getPages();
    }


}
