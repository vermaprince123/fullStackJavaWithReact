package com.example.fullstack.server;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.fullstack.server.ModalInterface;
import com.example.fullstack.server.ModalClass;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ControllerClass {

	
	@Autowired
	ModalInterface modalInterface;
	
	
	@PostMapping("/insert/data/intro")
	public String insertData(@RequestBody ModalClass modalClass) {
		modalInterface.insert(modalClass);
		return "Added Successfully";
	}
	
	@GetMapping("/get/data/intro")
	public List<ModalClass> getData(){
		return modalInterface.findAll();
	}
	
	@PutMapping("/update/data/{id}")
	public String updateData(@PathVariable String id, @RequestBody ModalClass modalClass) {
		modalInterface.save(modalClass);
		return "Updated Successfully"+id+ "------"+modalClass;
	}
	
	@DeleteMapping("/delete/data/{id}")
	public String deleteData(@PathVariable String id) {
		modalInterface.deleteById(id);
		return "deleted successfully"+id;
	}
}
