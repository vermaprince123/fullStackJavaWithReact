package com.example.fullstack.server;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.fullstack.server.ModalClass;

public interface ModalInterface extends MongoRepository<ModalClass, String> {

	
}
