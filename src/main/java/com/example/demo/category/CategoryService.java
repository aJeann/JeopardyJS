package com.example.demo.category;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * Created by Axel Jeansson
 * Date: 2021-04-22
 * Time: 17:41
 * Project: Jeopardy
 * Copyright: MIT
 */

@Service
public class CategoryService {

    @GetMapping
    public List<Category> getCategories() {
        return List.of(
                new Category(
                        "Hår",
                        List.of(new Question("Vad är blont?", 100),
                                new Question("Vad är brunt?", 200))

                ),
                new Category(
                        "Hundar",
                        List.of(new Question("Vad är Mei?", 100),
                                new Question("Vad är Milton?", 200))
                )
        );
    }
}
