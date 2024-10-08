package com.example.demo;

public class Show_student_recordes {
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	private String name;
	private String classes;
	private String dob;
	private String stream;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getClasses() {
		return classes;
	}
	public void setClasses(String classes) {
		this.classes = classes;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	@Override
	public String toString() {
		return "Show_student_recordes [id=" + id + ", name=" + name + ", classes=" + classes + ", dob=" + dob
				+ ", stream=" + stream + "]";
	}
	public Show_student_recordes(int id, String name, String classes, String dob, String stream) {
		super();
		this.id = id;
		this.name = name;
		this.classes = classes;
		this.dob = dob;
		this.stream = stream;
	}
	
	
	

}
