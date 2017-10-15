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
	updateStandard('languages');
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

				htmlContentLi += `<li>` + htmlContentIcon + value +` </li>`;
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

				if(hasGraph == 1) {

				let progressSettings = window.DataStore.progressBarLevel;

				progressBar = `<div class="progress">
				<div class="progress-bar `+ progressSettings[value]['bg'] +`" role="progressbar" style="width: `+progressSettings[value]['progress']+`%" aria-valuenow="`+progressSettings[value]['progress']+`" aria-valuemin="0" aria-valuemax="100">
				</div></div>`;
				}

				htmlContentLi += `<li><span class='standard-key-name'>` +  key + `</span>: `+ value + progressBar + `</li>`;
			});

			htmlContentUl += htmlContentLi;

			htmlContentUl += `</ul>`;

			$(htmlContentUl).insertAfter($('#' + section));
		}
}

function updateSpecialSections(section) {

		let sections = window.DataStore.sectionsData[section]['data'];
		let hasIcons = window.DataStore.sectionsData[section]['has-icons'];
		let hasGraph = window.DataStore.sectionsData[section]['has-graph'];

		if(sections != undefined) {

			let htmlContentUl = `<ul>`;

			let htmlContentLi = '';

			let htmlContentIcon = '';



			$.each(sections, function(key, value) {
				
				let jobUl = `<ul class="special-section-entry">`;

				let jobLi = ``;

				$.each(value, function(jobKey, jobName) {

					jobLi += `<li><span class="job-name-li">` + jobKey + `</span> : ` + jobName + `</li>`;
				});

				jobUl += jobLi + `</ul>`

				htmlContentLi += `<li>` + jobUl +` </li>`;
			});

			htmlContentUl += htmlContentLi;

			htmlContentUl += `</ul>`;

			$(htmlContentUl).insertAfter($('#' + section));
		}
}

// $('.cv-app-sections').on('click', function() {

// 	let clickedSection = $(this).attr('id');

// 	let closeResult = closeSections();
// 	let sections;
// 	let hasIcons;
// 	let hasGraph

// 	if(window.DataStore.sectionsData[clickedSection] != undefined) {
// 		sections = window.DataStore.sectionsData[clickedSection]['data'];
// 		hasIcons = window.DataStore.sectionsData[clickedSection]['has-icons'];
// 		hasGraph = window.DataStore.sectionsData[clickedSection]['has-graph'];
// 	}

// 	if(closeResult == 0 && sections != undefined) {

// 			let htmlContentUl = `<ul>`;

// 			let htmlContentLi = '';

// 			let htmlContentIcon = '';

// 			$.each(sections, function(key, value) {

// 				if(hasIcons == 1) {
// 					htmlContentIcon = `<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-`+ key +` fa-stack-1x"> </i> </span> `;	
// 				} else {
// 					htmlContentIcon = key + ': ';
// 				}

// 				htmlContentLi += `<li>` + htmlContentIcon + value +` </li>`;
// 			});

// 			htmlContentUl += htmlContentLi;

// 			htmlContentUl += `</ul>`;

// 			$(htmlContentUl).insertAfter($(this));
// 		}
	
// });

// function closeSections() {

// 	let leftUl = $('#cv-app-left').find('ul');
// 	let rightUl = $('#cv-app-right').find('ul')
// 	leftUl.remove();
// 	rightUl.remove();

// 	if(leftUl.length > 0 || rightUl.length >0) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// }

$(".cv-app-sections").hover(function() {
    $(this).css('cursor','pointer');
    $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}, function() {
    $(this).css('cursor','auto');
});

});