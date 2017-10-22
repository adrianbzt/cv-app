$( document ).ready(function() {

//First Name, Last Name, Current Job and Job Description are included
includeHeader();
// CV sections (Personal Information, Languages, Education etc) are included
includeSections();
// CV sections are updated with data
updateSections();

function includeHeader() {
	let headerData = window.DataStore.header;
	let idKey = 'cv-app-header';

	$.each(headerData, function(key, value) {
		let elementId = '#' + idKey + '-' + key;

		$(elementId).text(value);
		$(elementId).css('padding', '5px');
	});
}

function includeSections() {
	let sections = window.DataStore.sections;

	let idKey = 'cv-app';

	$.each(sections, function(key, value) {
		let elementId = '#' + idKey + '-' + value['section-position'];

		let content = `<h5 class="cv-app-sections" id=` + value['section-id'] + `> <span class="fa-stack fa-lg"> 
		<i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-`+ value['section-icon'] +` fa-stack-1x">
		</i></span> 
		`+ value['section-name'] +`
		</h5>`;

		$(elementId).append(content);
	});
}

function updateSections() {

	updatePersonalInfo();
	updateLanguages('languages');
	updateStandard('key-skills');
	updateStandard('technical-skills');
	updateSpecialSections('experience');
	updateSpecialSections('education');
	updateSpecialSections('courses');
}

function updatePersonalInfo() {

		let sections = window.DataStore.sectionsData['personal-info']['data'];
		let hasIcons = window.DataStore.sectionsData['personal-info']['has-icons'];
		let hasGraph = window.DataStore.sectionsData['personal-info']['has-graph'];

		if(sections != undefined) {

			let htmlContentUl = `<ul>`;

			let htmlContentLi = '';

			let htmlContentIcon = '';

			$.each(sections, function(key, value) {

				htmlContentIcon = `<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-`+ key +` fa-stack-1x"> </i> </span> `;	

				htmlContentLi += `<li class="cv-app-span-entry">` + htmlContentIcon + value +` </li>`;
			});

			htmlContentUl += htmlContentLi;

			htmlContentUl += `</ul>`;

			$(htmlContentUl).insertAfter($('#personal-info'));
		}
}

function updateStandard(section) {

		let sections = window.DataStore.sectionsData[section]['data'];
		let hasIcons = window.DataStore.sectionsData[section]['has-icons'];
		let hasGraph = window.DataStore.sectionsData[section]['has-graph'];

		if(sections != undefined) {

			let htmlContentUl = `<ul>`;

			let htmlContentLi = '';

			let htmlContentIcon = '';

			let progressBar = '';

			$.each(sections, function(key, value) {
				htmlContentLi += `<li class="cv-app-span-entry"><span class='standard-key-name '>` +  key + `</span>: `+ value + progressBar + `</li>`;
			});

			htmlContentUl += htmlContentLi;

			htmlContentUl += `</ul>`;

			$(htmlContentUl).insertAfter($('#' + section));
		}
}

function updateLanguages(section) {

		let sections = window.DataStore.sectionsData[section]['data'];
		let hasIcons = window.DataStore.sectionsData[section]['has-icons'];
		let hasGraph = window.DataStore.sectionsData[section]['has-graph'];

		let contentToInclude = '';
		$.each(sections, function(key, value) {
			let level = window.DataStore.languageSettings[value];

			let whiteDot = '&#9675;';
			let blackDot = '&#9679';

			let dots = '';

			for(var i = 0; i < level['black']; i++) {
				dots += blackDot;
			}

			for(var i = 0; i < level['white']; i++) {
				dots += whiteDot;
			}


			contentToInclude += `

					<div class="col-lg-3" style="padding-bottom: 20px;">
						<div class="row" style="font-size: 12px;">
							` + key + `
						</div>
						<div class="row" >
							` + dots + `
						</div>
						<div class="row" style="font-size: 12px;">
							` + value + `
						</div>
					</div>
			`;
		});

			htmlContentDiv = `
			<div class="container"> 
				<div class="row cv-app-standard-container"> 
					` +  contentToInclude + `										
				</div> 
			</div>`;

			$(htmlContentDiv).insertAfter($('#' + section));
}

function updateSpecialSections(section) {

		let sections = window.DataStore.sectionsData[section]['data'];
		let hasIcons = window.DataStore.sectionsData[section]['has-icons'];
		let hasGraph = window.DataStore.sectionsData[section]['has-graph'];

		if(sections != undefined) {


				$.each(sections, function(key, value) {

				htmlContentUl = `<div class="container" style=""> 
				<div class="row">
				<div class="col-lg-4">
				<span class="cv-app-span-interval"> `+value['From']+` &rarr; `+value['To']+`</span>
				</div>
				<div class="col-lg-8">
					<div class="row">
					<span class="cv-app-span-header">`+value['Header']+` </span>
					</div>
					<div class="row">
					<span class="cv-app-span-description">`+value['Description']+`</span>
					</div>
				</div>
				</div>
				</div>`;

				$(htmlContentUl).insertAfter($('#' + section));

				});

			}

			
		}

});