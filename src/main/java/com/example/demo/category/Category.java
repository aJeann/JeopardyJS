package com.example.demo.category;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 17:30
 * Project: Jeopardy
 * Copyright: MIT
 */

@Entity
@Table
public class Category {
    @Id
    @SequenceGenerator(
            name = "category_sequence",
            sequenceName = "category_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "category_sequence"

    )
    private long id;
    private String name;
    @OneToMany
    private List<Question> listOfQuestions;

    public Category() {
    }

    public Category(long id, String name, List<Question> listOfQuestions) {
        this.id = id;
        this.name = name;
        this.listOfQuestions = listOfQuestions;
    }

    public Category(String name, List<Question> listOfQuestions) {
        this.name = name;
        this.listOfQuestions = listOfQuestions;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Question> getListOfQuestions() {
        return listOfQuestions;
    }

    public void setListOfQuestions(List<Question> listOfQuestions) {
        this.listOfQuestions = listOfQuestions;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", listOfQuestions=" + listOfQuestions +
                '}';
    }
}
