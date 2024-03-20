package com.crudMalik.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(long id) {
        super("Could not locate this user.");
    }
}
