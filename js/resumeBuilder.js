var DATA = '%data%';

var bio = {
  name: 'Ivan Ivancic',
  role: 'Front End Software Engineer',
  contacts: {
    mobile: '+353 85 8343829',
    email: 'fiksie@gmail.com',
    github: 'fiksie',
    twitter: '@fiksie',
    location: 'Ireland'
  },
  welcomeMessage: 'Miserable bastard.',
  skills: ['HTML', 'CSS', 'JavaScript','MySQL','WordPress','Front-end Development',
           'Node.js', 'Git','React.js','Angular.js'],
  biopic: 'images/me.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'ETS',
      'location': 'Split, Croatia',
      'degree': 'Computer Technician',
      'dates': '2000 - 2004',
      'url': 'www.ets.hr'
    }
  ],
  onlineCourses: [
   {
     'title': 'W3C Schools',
     'school': 'Html/CSS/Javascript courses',
     'dates': 'April 2009',
     'url': 'https://www.w3cschools.com'
   },
   {
     'title': 'React for Beginners',
     'school': 'Wes Bos',
     'dates': 'November 2015',
     'url': 'https://reactforbeginners.com'
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'fiksie',
      title: 'Owner',
      location: 'Croatia/Ireland',
      dates: 'September 2009 - Present',
      description: 'I did all sorts of slimy shit for internet marketers.'
    }
  ],
  display: function() {
    if (work.jobs.length >= 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'Paying the bills',
      'dates': '2009 - 2018',
      'description': 'Involves heavy logistics.',
      'images': ['images/notifier-udacity-1.png', 'images/notifier-udacity-2.png']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);