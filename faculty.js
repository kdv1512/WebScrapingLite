var setBanner = function(msg)
{
    d3.select("h1")
    .text(msg);
}

var drawTable = function(faculty)
{
    var rows = d3.select("table")
    .selectAll("tr")
    .data(faculty)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Firstname;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Lastname;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Title;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Email;
    })
}

var getData = d3.csv("employee.csv")
getData.then(
function(faculty){
    setBanner("Faculty Data"); console.log(faculty); drawTable(faculty);
},
function(error){
    setBanner("Error"); console.log(error);
})
