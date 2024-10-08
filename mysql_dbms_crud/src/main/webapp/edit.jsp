<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
	<form class="container my-5" method="post" action="update">
		<input type="hidden" value="${record.id}" name="id">
	  <div class="mb-3">
	    <label for="exampleInputEmail1" class="form-label">Name</label>
	    <input value="${record.name}" name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
	  </div>
	  <div class="mb-3">
	    <label for="exampleInputPassword1" class="form-label">Class</label>
	    <input value="${record.classes}" name="class" type="text" class="form-control" id="exampleInputPassword1">
	  </div>
	  <div class="mb-3">
	  	    <label for="exampleInputPassword1" class="form-label">DOB</label>
	  	    <input value="${record.dob}" name="dob" type="date" class="form-control" id="exampleInputPassword1">
	  </div>
	  <div class="mb-3">
	  	    <label for="exampleInputPassword1" class="form-label">Stream</label>
	  	    <input value="${record.stream}" name="stream" type="text" class="form-control" id="exampleInputPassword1">
	  </div>
	  <button type="submit" class="btn btn-primary">Edit</button>
	</form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>