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
        return faculty.FirstName;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.LastName;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.LastName2;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Title;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Organization;
    })
    
    rows.append("td")
    .text(function(faculty){
        return faculty.Email;
    })
}

var getData = d3.csv("Faculty.csv")
getData.then(
function(faculty){
    setBanner("Faculty Data"); console.log(faculty); drawTable(faculty);
},
function(error){
    setBanner("Error"); console.log(error);
})
