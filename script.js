const movies = [
    {
        name: "Name: Avengers Endgame",
        director: "Director: Joe and Anthony Russo",
        year: "Year: 2019",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg" 
    },
    {
        name: "Name: 2 Fast 2 Furious",
        director: "Director: John Singleton",
        year: "Year: 2003",
        image: "https://i.pinimg.com/564x/22/4c/72/224c72c3378f783e868104caa94da584.jpg" 
    },
    {
        name: "Name: Gladiator",
        director: "Director: Ridley Scott",
        year: "Year: 2000",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png" 
    },
    ];
    list_elements = movies.map(generate_li);

		ol = document.querySelector("ol");

		for(i = 0; i < list_elements.length; i++)
		{
			ol.appendChild(list_elements[i]);
		}

		function generate_li(element)
		{
			var li = document.createElement("li");

			var name_paragraph = document.createElement("p");
			var director_paragraph = document.createElement("p");
			var year_paragraph = document.createElement("p");
			var image_paragraph = document.createElement("p");

			var name_value = document.createTextNode(element.name);
			var director_value = document.createTextNode(element.director);
			var year_value = document.createTextNode(element.year);

			var image_tag = document.createElement("img");
			image_tag.setAttribute("src", element.image);
			image_tag.setAttribute("alt", "Image not found");
			image_tag.setAttribute("height", 340);

			name_paragraph.appendChild(name_value);
			director_paragraph.appendChild(director_value);
			year_paragraph.appendChild(year_value);
			image_paragraph.appendChild(image_tag);

			li.appendChild(name_paragraph);
			li.appendChild(director_paragraph);
			li.appendChild(year_paragraph);
			li.appendChild(image_paragraph);

			return li;
		}

ol.innerHTML = template.join('');