
// GET request using fetch() 
fetch("https://emailengine2020.herokuapp.com/contactapi/email/") 
	
	// Converting received data to JSON 
	.then(response => response.json()) 
	.then(json => { 

		// Create a variable to store HTML 
		let li = `<tr><th>Id</th><th>Name</th><th>Customer_Id</th><th>Upload File</th></tr>`; 
		
		// Loop through each data and add a table row 
		json.forEach(user => { 
			li += `<tr> 
                <td>${user.id} </td> 
				<td>${user.name} </td> 
				<td>${user.my_customer}</td>
                <td>${user.upload_file}</td>		 
			</tr>`; 
		}); 

	// Display result 
	document.getElementById("emaillist").innerHTML = li; 
}); 

