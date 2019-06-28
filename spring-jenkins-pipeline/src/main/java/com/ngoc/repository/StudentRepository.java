package com.ngoc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.baeldung.domain.Student;

public interface StudentRepository extends MongoRepository<Student, String> {
}
