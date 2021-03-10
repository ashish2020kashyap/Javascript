

// GET request using fetch() 
fetch("https://emailengine2020.herokuapp.com/contactapi/campaign/") 
	
	// Converting received data to JSON 
	.then(response => response.json()) 
	.then(json => { 

		// Create a variable to store HTML 
		let li = `<tr><th>Id</th><th>Url</th><th>Name</th><th>Sender_Name</th><th>Sender_Email/th><th>sender_email</th>
        <th>Email_Subject</th><th>My_Customer</th><th>Camp_Emails</th><th>Email_Message</th><th>Temp_Json/th><th>Ht</th><th>Attachment</th></tr>`; 
		
		// Loop through each data and add a table row 
		json.forEach(user => { 
			li += `<tr> 
                <td>${user.id} </td> 
				<td>${user.url} </td> 
				<td>${user.name}</td>
                <td>${user.sender_name}</td>
                <td>${user.sender_email} </td> 
				<td>${user.email_subject}</td>
                <td>${user.my_customer}</td>
                <td>${user.camp_emails} </td> 
				<td>${user.email_message}</td>
                <td>${user.temp_json}</td>
                <td>${user.ht} </td> 
				<td>${user.attachment}</td>
        	 
			</tr>`; 
		}); 

	// Display result 
	document.getElementById("campaignlist").innerHTML = li; 
}); 

