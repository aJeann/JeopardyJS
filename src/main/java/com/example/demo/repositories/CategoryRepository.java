package com.example.demo.repositories;

import com.example.demo.category.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 18:25
 * Project: Jeopardy
 * Copyright: MIT
 */
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
