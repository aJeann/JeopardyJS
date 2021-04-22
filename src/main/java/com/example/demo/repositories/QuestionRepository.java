package com.example.demo.repositories;

import com.example.demo.category.Question;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 18:25
 * Project: Jeopardy
 * Copyright: MIT
 */
public interface QuestionRepository extends CrudRepository<Question, Long> {
}
