package com.scce.service.Impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.scce.dao.CompanyDao;
import com.scce.domain.Company;
import com.scce.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: IdeaProjects
 * @description
 * @author: Lxy
 * @create: 2019-05-10 16:05
 **/
@Service
public class CompanyServiceImpl implements CompanyService {
 @Autowired
    private CompanyDao companyDao;
    @Override
    public PageInfo<Company> getCompany(int pageNum, int pageSize) {
        System.out.println(pageNum+"  "+pageSize+"=============================");
        PageHelper.startPage(pageNum, pageSize);
        //紧跟在PageHelper.startPage(pageNum, pageSize);的查询语句会执行分页，mysql中就会为它拼上limit
        List<Company> list=companyDao.getCompany();
        PageInfo<Company> pageInfo = new PageInfo<Company>(list);
       System.out.println(pageInfo+"=============================");
        return pageInfo;
    }

    @Override
    public void del(String[] ids) {
        for (int i = 0; i < ids.length; i++) {
            companyDao.del(ids[i]);
        }

    }

    @Override
    public void upCompany(Company company) {
        companyDao.upCompany(company);
    }

    @Override
    public void addCompany(Company company) {
        companyDao.addCompany(company);
    }


}
