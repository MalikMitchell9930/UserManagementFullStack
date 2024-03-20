package com.crudMalik.fullstackbackend.repository;

import com.crudMalik.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {


}
