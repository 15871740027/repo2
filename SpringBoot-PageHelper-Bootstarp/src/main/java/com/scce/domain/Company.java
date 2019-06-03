package com.scce.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: IdeaProjects
 * @description
 * @author: Lxy
 * @create: 2019-04-29 16:00
 **/
public class Company implements Serializable {

    private int id;
    private String phone;
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date time;
    private  String email;
    private String neir;



    public Company() {
    }

    public Company(int id, String phone, Date time, String email, String neir) {
        this.id = id;
        this.phone = phone;
        this.time = time;
        this.email = email;
        this.neir = neir;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNeir() {
        return neir;
    }

    public void setNeir(String neir) {
        this.neir = neir;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", phone='" + phone + '\'' +
                ", time=" + time +
                ", email='" + email + '\'' +
                ", neir='" + neir + '\'' +
                '}';
    }


}
