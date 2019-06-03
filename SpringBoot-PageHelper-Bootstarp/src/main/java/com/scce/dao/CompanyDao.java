package com.scce.dao;

import com.scce.domain.Company;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;


public interface CompanyDao {
	//查询所有
	@Select("select * from company")
	public List<Company> getCompany();

	@Delete("delete from company where id=#{id}")
	/*@Delete(
			"delete from company where id in "+
			"<foreach collection='ids' item='item',open='(', separator=','  close=')' #{item} </foreach>"
			)*/
	public 	void del( String id);

	@Update("update company set phone=#{phone},email=#{email},time=#{time},neir=#{neir} where id=#{id} ")
	public void upCompany(Company company);

	@Insert("insert into company(phone,email,time,neir) values(#{phone},#{email},#{time},#{neir})")
	public 	void addCompany(Company company);
}
