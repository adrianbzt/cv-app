window.DataStore = {};

Object.defineProperties(window.DataStore, {
    header: {
        value: 
            {
                "first-name": "Aegon",
                "last-name": "Targaryen",
                "current-job": "Academy Awards Winner",
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            },
        writable: true,
        configurable: true,
        enumerable: false,
    },
    sectionsData: {
        value: {
        	    "personal-info":  {
        	    	"data":{
		                "phone":"0727555555",
		                "envelope": "aegon.targaryen@email.com",
		                "facebook": "/aegon.targaryen",
		                "linkedin": "/aegon.targaryen",
	        		},
        	    	'has-icons': 1,
        	    	'has-graph': 0,
        	    },

        	    "languages": 
	        	    {
        	    	"data":{
		                "English":"Advanced",
		                "French": "Intermediate",
                        "Spanish": "Beginner",
	        		},
        	    	'has-icons': 0,
        	    	'has-graph': 1,		                
	        		},	
                "key-skills": 
                    {
                    "data":{
                        "Team":"Management",
                        "Money":"Management",
                        "Time": "Management",
                        "Chart": "Management",
                    },
                    'has-icons': 0,
                    'has-graph': 0,                     
                    },   
                "technical-skills": 
                    {
                    "data":{
                        "PHP":"Intermediate",
                        "MySQL":"Intermediate",
                        "Java": "Intermediate",
                        "JavaScript": "Intermediate",
                        "HTML": "Intermediate",
                        "CSS": "Intermediate",
                    },
                    'has-icons': 0,
                    'has-graph': 0,                     
                    },    
                "experience": 
                    {
                    "data":[
                    {
                        "Header": "Main Role: Season VI",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "Main Role: Season VII",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "Main Role: Season VIII",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },                    
                    ],
                    'has-icons': 0,
                    'has-graph': 0,
                    }, 
                "education": 
                    {
                    "data":[
                    {
                        "Header": "University of War I",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "University of War II",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "University of War III",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },                                        
                    ],
                    'has-icons': 0,
                    'has-graph': 0,                     
                    },
                "courses": 
                    {
                    "data":[
                    {
                        "Header": "Game of Thrones: Mastery I",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "Game of Thrones: Mastery II",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                        "Header": "Game of Thrones: Mastery III",
                        "From": "2016-Sep",
                        "To": "2017-Oct",
                        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },                                        
                    ],
                    'has-icons': 0,
                    'has-graph': 0,                     
                    },                                                                                                     		
        		},
        writable: true,
        configurable: true,
        enumerable: false,
    },  

    sections: {
        value:[
            {
            	"section-position": "left",
            	"section-name": "Personal Info",
            	"section-id": "personal-info",
            	"section-icon": "user",

            },
            {
            	"section-position": "left",
            	"section-name": "Languages",
            	"section-id": "languages",
            	"section-icon": "users",

            },
            {
            	"section-position": "left",
            	"section-name": "Key Skills",
            	"section-id": "key-skills",
            	"section-icon": "tasks",

            },
            {
            	"section-position": "left",
            	"section-name": "Technical Skills",
            	"section-id": "technical-skills",
            	"section-icon": "wrench",

            },  
            {
            	"section-position": "right",
            	"section-name": "Experience",
            	"section-id": "experience",
            	"section-icon": "briefcase",

            },
            {
            	"section-position": "right",
            	"section-name": "Education",
            	"section-id": "education",
            	"section-icon": "university",

            },
            {
            	"section-position": "right",
            	"section-name": "Courses",
            	"section-id": "courses",
            	"section-icon": "graduation-cap",
            },
                                            
        ],
        writable: true,
        configurable: true,
        enumerable: false,
    }, 
    languageSettings: {
        value: {
        "Beginner": {
            'white': 4,
            'black':1,
        },
        "Intermediate": {
            'white': 2,
            'black':3,
        },
        "Advanced": {
            'white': 0,
            'black':5,
        },   
        },
        writable: true,
        configurable: true,
        enumerable: false,
    }    
});