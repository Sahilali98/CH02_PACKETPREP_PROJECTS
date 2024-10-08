
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
	<table class="table container my-5">
	  <thead>
	    <tr>
	      <th scope="col">#</th>
	      <th scope="col">STUDENT NAME</th>
	      <th scope="col">STUDENT CLASS</th>
	      <th scope="col">STUDENT DOB</th>
		  <th scope="col">STUDENT stream</th>
	    </tr>
	  </thead>
	  <tbody>
		<c:forEach var="record" items="${records}"> 
	    <tr>
	      <th scope="row">${record.id}</th>
	      <td>${record.name}</td>
	      <td>${record.classes}</td>
	      <td>${record.dob}</td>
		  <td>${record.stream}</td>
		  <td><a href="edit?id=${record.id}">Edit</a></td>
		  <td><a href="delete/${record.id}">Delete</a></td>
	    </tr>
		</c:forEach>  
	</table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>