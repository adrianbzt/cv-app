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
		                "French": "Intermediate"
	        		},
        	    	'has-icons': 0,
        	    	'has-graph': 1,		                
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
});