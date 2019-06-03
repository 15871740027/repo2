package com.scce.service;

import com.github.pagehelper.PageInfo;
import com.scce.domain.Company;

/**
 * @program: IdeaProjects
 * @description
 * @author: Lxy
 * @create: 2019-05-10 15:58
 **/

public interface CompanyService {
    //分页查询
    public PageInfo<Company> getCompany(int pageNum, int pageSize);


     public  void del(String[] ids);

    public  void upCompany(Company company);

  public   void addCompany(Company company);
}
