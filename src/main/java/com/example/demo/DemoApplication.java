package com.example.demo;

import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 18:30
 * Project: Jeopardy
 * Copyright: MIT
 */

@SpringBootApplication
public class DemoApplication {
    @Autowired
    private CategoryRepository categoryRepository;
    private QuestionRepository questionRepository;

    public static void main(String[] args) { SpringApplication.run(DemoApplication.class, args);}
}
