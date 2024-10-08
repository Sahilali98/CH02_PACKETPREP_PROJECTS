package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class Student {
	
	@Autowired
	private JdbcTemplate template;
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("add")
	public String add(@RequestParam("name") String name, @RequestParam("class") String classes, @RequestParam("dob") String dob, @RequestParam("stream") String stream) {
		
		String sql = "insert into student (name, class, dob, stream) values (?, ?, ?, ?)";
		
		template.update(sql,name, classes, dob, stream);
		return "index.jsp";
	}
	
	
	@RequestMapping("records")
	public String show_records(Model model) {
		
		List<Show_student_recordes> records = template.query("select * from student",
				
				(rs, rowNum) -> new Show_student_recordes(
						rs.getInt("id"),
						rs.getString("name"),
						rs.getString("class"),
						rs.getString("dob"),
						rs.getString("Stream")
					)
				);
		
		model.addAttribute("records", records);
		return "records.jsp";
	}
	
	
	@RequestMapping("edit")
	public String edit(@RequestParam("id") int id, Model model) {
		@SuppressWarnings("deprecation")
		Show_student_recordes record = template.queryForObject("select * from student where id = ?",
				new Object[] {id},
				(rs, newRow) -> new Show_student_recordes(
						rs.getInt("id"),
						rs.getString("name"),
						rs.getString("class"),
						rs.getString("dob"),
						rs.getString("stream")
						)
				);
		
		model.addAttribute("record", record);
		return "edit.jsp";
		
	}
	
	
	
	@RequestMapping("update")
	public String update(@RequestParam("id") int id, @RequestParam("name") String name, @RequestParam("class") String classes, @RequestParam("dob") String dob, @RequestParam("stream") String stream) {
		
		String sql = "update student set name = ?, class = ?, dob = ?, stream = ? where id = ?";
		
		int status = template.update(sql, name, classes, dob, stream, id);
		
		if(status>0) {
			return "redirect:/records";
		}
		else {
			return "error.jsp";
		}
	}
	
	
	@RequestMapping("delete/{id}")
	public String delete(@PathVariable int id) {
		String sql = "delete from student where id = ?";
		int status = template.update(sql, id);
		
		if(status > 0) {
			return "redirect:/records";
		}
		else {
			return "error.jsp";
		}
		
	}
	
}
