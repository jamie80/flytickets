
fetch("https://raw.githubusercontent.com/jamie80/flytickets/main/endpoints/endpoint2.json")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {

        const destinations = data.destination;
        // console.log(destinations);

        destinations.forEach(function (element) {

            const city = document.createElement("option");
            city.innerHTML = `${element.desc}`;
            document.getElementById("destinationSelect").appendChild(city);

        })

        destinations.forEach(function (element) {
            city = document.createElement("option");
            city.innerHTML = `${element.desc}`;
            document.getElementById("originSelect").appendChild(city);
        })
    });