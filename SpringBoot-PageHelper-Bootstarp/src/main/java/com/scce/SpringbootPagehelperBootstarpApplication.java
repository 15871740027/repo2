package com.scce;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.scce.dao")
public class SpringbootPagehelperBootstarpApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootPagehelperBootstarpApplication.class, args);
    }

}
