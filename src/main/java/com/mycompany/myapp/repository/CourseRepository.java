package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Course;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Course entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    @Query("select course from Course course where course.deliverer.login = ?#{principal.username}")
    List<Course> findByDelivererIsCurrentUser();

    @Query("select course from Course course where course.customer.login = ?#{principal.username}")
    List<Course> findByCustomerIsCurrentUser();

}
