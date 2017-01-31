// javascript code

// initialize function called when script is loaded
function initialize(){
    cities();
};

// function to create a table with cities and their population
function cities(){
    // object to hold cities and populations
    var cityObj = {
        'Madison' : 233209,
        'Milwaukee' : 594833,
        'Green Bay' : 104057,
        'Superior' : 27244
    }

    var table = $('#mydiv').append("<table>");
    var headerRow = $('table').append("<tr>");
    var cityHeader = $('tr').append("<th>");

    console.log(cityHeader);
    cityHeader.html("City");
    headerRow.append(cityHeader);
    table.append(headerRow);

    // create table element
    var table = document.createElement("table");

    // create a header row
    var headerRow = document.createElement("tr");

    // add the "city" column
    var cityHeader = document.createElement("th"); //<th>
    cityHeader.innerHTML = "City"; // <th>City<th>
    headerRow.appendChild(cityHeader);

    // add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    // add header row to the table
    table.appendChild(headerRow);

    // loop to add a new row for each city
    for (var cityKey in cityObj){
        if (cityKey === 'Madison') {
          console.log(cityObj[cityKey]);
        } else if (cityKey === 'Milwaukee') {
          console.log('Lake Michigan!');
        }

        // create table row element
        var tr = document.createElement("tr");
        // create cell element for city
        var city = document.createElement("td");
        city.innerHTML = cityKey;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityObj[cityKey];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    // add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

// run script once page is loaded
window.onload = initialize();
