package com.example.demo.category;

import java.util.List;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 17:30
 * Project: Jeopardy
 * Copyright: MIT
 */
public class Category {
    private long id;
    private String name;
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
