package com.example.demo.category;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 17:31
 * Project: Jeopardy
 * Copyright: MIT
 */

@Entity
@Table
public class Question {
    @Id
    @GeneratedValue
    private long id;
    private String question;
    private int value;

    public Question() {
    }

    public Question(long id, String question, int value) {
        this.id = id;
        this.question = question;
        this.value = value;
    }

    public Question(String question, int value) {
        this.question = question;
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
