var bio = {
    "name": "Bogdan Profirescu",
    "role": "Web Developer & more",
    "contacts": {
        // "mobile": "+4 confidential",
        "email": "bogdanprofirescu@yahoo.com",
        "github": "bogdanprofirescu",
        "twitter": "@bogdanprofi",
        "location": "Brasov,Romania"
    },
    "welcomeMessage": "Welcome to my online CV, enjoy!",
    "skills": ["project & product management,", "front-end development,", "mngmt. consulting"],
    "bioPic": "images/me.jpg"
};

bio.display = function() {
    $("#header").append(HTMLheaderName.replace("%data%", bio.name),
                        HTMLheaderRole.replace("%data%", bio.role),
                        // HTMLmobile.replace("%data%", bio.contacts.mobile),
                        HTMLemail.replace("%data%", bio.contacts.email),
                        HTMLgithub.replace("%data%", bio.contacts.github),
                        HTMLtwitter.replace("%data%", bio.contacts.twitter),
                        HTMLlocation.replace("%data%", bio.contacts.location),
                        HTMLbioPic.replace("%data%", bio.bioPic),
                        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

    $("#footerContacts").append(
                          // HTMLmobile.replace("%data%", bio.contacts.mobile),
                            HTMLemail.replace("%data%", bio.contacts.email),
                            HTMLgithub.replace("%data%", bio.contacts.github),
                            HTMLtwitter.replace("%data%", bio.contacts.twitter),
                            HTMLlocation.replace("%data%", bio.contacts.location));

};

var work = {
    "jobs": [{
        "employer": "BIT Software",
        "title": "Product/Project Manager",
        "location": "Brasov, RO",
        "dates": "may 2015 - may 2016",
        "description": "Product Mngmt for a financial reporting software; internal projects management",
        "url":"http://www.bitsoftware.eu"
    }, {
        "employer": "Deloitte Consulting Romania",
        "title": "Manager",
        "location": "Bucharest, RO",
        "dates": "may 2011 - jan 2015",
        "description": "Managing projects and the consulting team plus expert role in certain topics ",
        "url": "https://www2.deloitte.com/ro/ro.html"
    }]
};


work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedJobEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedJobEmployerURL=formattedJobEmployer.replace("#",work.jobs[job].url);

        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedJobEmployerAndTitle = formattedJobEmployerURL + formattedJobTitle;

        $(".work-entry:last").append(formattedJobEmployerAndTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);

        var formattedjobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedjobDescription);
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Roadmap definition for a financial reporting sw",
        "url":"http://bitsoftware.eu/bpwise/",
        "dates": "Oct 2015 - Jan 2016",
        "description": "analyzed the market, competition and existing features, proposed new roadmap",
        "images": [
            "images/fin-reporting-small.jpg", "images/fin-reporting-small.jpg"
        ]
    }, {
        "title": "Assesed the market potential for a mk research software",
        "url": "http://plotto.com/#overview",
        "dates": "Mar-May 2016",
        "description": "analyzed the industry's tech absortion rate and competition, determined sales potential",
        "images": [
            "images/mk-research-small.jpg", "images/mk-research-small.jpg"
        ]
    }]
};

projects.display = function() {
    // for (proj in projects.projects)
    for (var proj = 0; proj < projects.projects.length; proj++) {

        $("#projects").append(HTMLprojectStart);

        var formatted = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        formatted=formatted.replace("#",projects.projects[proj].url);
        $(".project-entry:last").append(formatted);

        formatted = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formatted);

        formatted = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formatted);


        if (projects.projects[proj].images.length > 0) {
            for (var i = 0; i < projects.projects[proj].images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};


var education = {
    "schools": [{
        "name": "Cantemir University",
        "location": "Brasov,Romania",
        "degree": "BA",
        "majors": "Business and Economics",
        "dates": "2001-2005",
        "url": "http://ucdc.ro/en/"
    }, {
        "name": "Ienachita Vacaresu highschool",
        "location": "Targoviste, RO",
        "degree": "High School Diploma",
        "majors": ["Computer science"],
        "dates": "1994-1999",
        "url": "http://www.ienachita.com/"
    }],
    "onlineCourses": [{
            "title": "Frontend Web Developer",
            "school": "Udacity",
            "dates": "09/2016-11/2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
        }, {
            "title": "Software Product Management",
            "school": "Coursera",
            "dates": "10/2015 – 06/2016",
            "url": "https://www.coursera.org/specializations/product-management"
        }

    ]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolNameDegree = HTMLschoolName.replace("%data%", education.schools[i].name) +
            HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        formattedSchoolNameDegree = formattedSchoolNameDegree.replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajors);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
    }

    $("#education").append(HTMLonlineschoolStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedCourseProvider = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
            HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".onlineedu-entry:last").append(formattedCourseProvider);

        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".onlineedu-entry:last").append(formattedOnlineDate);

        var formattedOnlineCourseURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url);
        formattedOnlineCourseURL = formattedOnlineCourseURL.replace("%data%", education.onlineCourses[i].url);
        $(".onlineedu-entry:last").append(formattedOnlineCourseURL);
    }
};

projects.display();
education.display();
bio.display();
$("#mapDiv").append(googleMap);
