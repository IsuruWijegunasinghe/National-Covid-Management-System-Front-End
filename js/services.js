/*
function register(first_name, lastName, district, coordinateX, coordinateY, gender, contactNo, email, age) {
	$.ajax({
		url: "http://localhost:8080/Patient",
		type: "POST",
		contentType:"application/json",
		data: JSON.stringify({
	        firstName: first_name,
	        lastName: "B",
	        district: "District 3",
	        coordinateX: 165,
	        coordinateY: 255,
	        gender: "Male",
	        contactNo: "0711200167",
	        email: "def@gmail.com",
	        age: 33
    	}),
		//dataType: "json",

		success: function (res) {
			try {
	            window.alert("Patient Successfully Registered!");
	            //res.bedId
	        } catch (e) {
	            alert("Output is not valid JSON: ");
	        }
			//window.alert("Patient Successfully Registered!");
			console.log(res);
	    },
	    error: function (error) {
	        window.alert(error);
	        console.log(error);
	    }
  	});
  	//window.alert("Patient Successfully Registered!");
}
*/

$(document).ready(function () {
    $('#regButton').click(function () {
        //var formdata=$('#form').serialize();
        //console.log(formdata);
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/Patient",
            data : JSON.stringify({
            	"firstName": $('#firstName').val(),
            	"lastName": $('#lastName').val(),
            	"district": $('#district').val(),
            	"coordinateX": $('#coordinateX').val(),
            	"coordinateY": $('#coordinateY').val(),
            	"gender": $('#gender').val(),
            	"contactNo": $('#contactNo').val(),
            	"email": $('#email').val(),
            	"age": $('#age').val()
            }),
            contentType:"application/json",
            //dataType:"json",
            success: function (res) {
                window.alert("Patient Successfully Registered!");
                console.log(res);
            },
            error : function (e) {
                window.alert("Registration Unsuccessful!");
                console.log(e);
            }



        })
    })
})


$(document).ready(function () {
    $('#navStat').click(function () {
    	tableFromJson();
    })
})

function loadStatistics() {
	// the json data. (you can change the values for output.)
    
	$.ajax({
        type : "GET",
        url : "http://localhost:8080/Patient/PatientCount",
        //contentType:"application/json",
        //dataType:"json",
        success: function (res) {
            var myBooks = res;

		    // Extract value from table header. 
		    // ('Book ID', 'Book Name', 'Category' and 'Price')
		    var col = [];
		    for (var i = 0; i < myBooks.length; i++) {
		        for (var key in myBooks[i]) {
		            if (col.indexOf(key) === -1) {
		                col.push(key);
		            }
		        }
		    }

		    // Create a table.
		    var table = document.createElement("table");

		    // Create table header row using the extracted headers above.
		    var tr = table.insertRow(-1);                   // table row.

		    for (var i = 0; i < col.length; i++) {
		        var th = document.createElement("th");      // table header.
		        th.innerHTML = col[i];
		        tr.appendChild(th);
		    }

		    // add json data to the table as rows.
		    for (var i = 0; i < myBooks.length; i++) {

		        tr = table.insertRow(-1);

		        for (var j = 0; j < col.length; j++) {
		            var tabCell = tr.insertCell(-1);
		            tabCell.innerHTML = myBooks[i][col[j]];
		        }
		    }

		    // Now, add the newly created table with json data, to a container.
		    var divShowData = document.getElementById('showData');
		    divShowData.innerHTML = "";
		    divShowData.appendChild(table);
            console.log(res);
        },
        error : function (e) {
            window.alert("Try Again!");
            console.log(e);
        }
	})
   
}

function loadPatientDetails() {
	// the json data. (you can change the values for output.)
    
	$.ajax({
        type : "GET",
        url : "http://localhost:8080/Patient/AllPatientInfo",
        //contentType:"application/json",
        //dataType:"json",
        success: function (res) {
            var myBooks = res;

		    // Extract value from table header. 
		    // ('Book ID', 'Book Name', 'Category' and 'Price')
		    var col = [];
		    for (var i = 0; i < myBooks.length; i++) {
		        for (var key in myBooks[i]) {
		            if (col.indexOf(key) === -1) {
		                col.push(key);
		            }
		        }
		    }

		    // Create a table.
		    var table = document.createElement("table");

		    // Create table header row using the extracted headers above.
		    var tr = table.insertRow(-1);                   // table row.

		    for (var i = 0; i < col.length; i++) {
		        var th = document.createElement("th");      // table header.
		        th.innerHTML = col[i];
		        tr.appendChild(th);
		    }

		    // add json data to the table as rows.
		    for (var i = 0; i < myBooks.length; i++) {

		        tr = table.insertRow(-1);

		        for (var j = 0; j < col.length; j++) {
		            var tabCell = tr.insertCell(-1);
		            tabCell.innerHTML = myBooks[i][col[j]];
		        }
		    }

		    // Now, add the newly created table with json data, to a container.
		    var divShowData = document.getElementById('showPatientData');
		    divShowData.innerHTML = "";
		    divShowData.appendChild(table);
            console.log(res);
        },
        error : function (e) {
            window.alert("Try Again!");
            console.log(e);
        }
	})
   
}

$(document).ready(function () {
    $('#loginFormButton').click(function () {
        //var formdata=$('#form').serialize();
        //console.log(formdata);
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/Authentication",
            data : JSON.stringify({
            	"username": $('#username').val(),
            	"password": $('#password').val(),
            }),
            contentType:"application/json",
            //dataType:"json",
            success: function (res) {
                if(JSON.parse(res).isAuthorized == "true"){
                	location.replace("PatientDetails.html")
                	window.alert("Login Successful!");
                }else{
                	window.alert("Invalid Username or Password!");
                }
                //tableFromJsonNew();

                //var divShowData = document.getElementById('showData');
		    	//divShowData.innerHTML = "";
		    	//divShowData.appendChild("Login Successful!");
                
                console.log(res.isAuthorized);
            },
            error : function (e) {
                window.alert("Login Unsuccessful!");
                console.log(e);
            }



        })
    })
})

$(document).ready(function () {
    $('#patientUpdateButton').click(function () {
        //var formdata=$('#form').serialize();
        //console.log(formdata);
        $.ajax({
            type : "POST",
            url : "http://localhost:8080/Doctor",
            data : JSON.stringify({
            	"patientID": $('#patientID').val(),
            	"doctorID": $('#doctorID').val(),
            	"severityLevel": $('#severityLevel').val(),
            }),
            contentType:"application/json",
            //dataType:"json",
            success: function (res) {
                if(JSON.parse(res).result == "1"){
                	location.replace("PatientDetails.html")
                	window.alert("Patient Updated Successfully!");
                }else{
                	window.alert("Patient Update Unsuccessful!");
                }
                //tableFromJsonNew();

                //var divShowData = document.getElementById('showData');
		    	//divShowData.innerHTML = "";
		    	//divShowData.appendChild("Login Successful!");
                
                console.log(res.result);
            },
            error : function (e) {
                window.alert("Patient Update Unsuccessful!");
                console.log(e);
            }



        })
    })
})