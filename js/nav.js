const nav = ["Home", "About Us", "Course", "Contact Us"];

const links = ["index.html", "about.html", "course.html", "contact.html"];

let navtext = '<ul class="flex">';

for(i = 0; i < nav.length; i++) {
    navtext += '<li><a href="' + links[i] +'">' + nav[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;