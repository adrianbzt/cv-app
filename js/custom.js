$( document ).ready(function() {

//First Name, Last Name, Current Job and Job Description are included
includeHeader();
// CV sections (Personal Information, Languages, Education etc) are included
includeSections();


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

		let content = `<h3 class="cv-app-sections" id=` + value['section-id'] + `> <span class="fa-stack fa-lg"> 
		<i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-`+ value['section-icon'] +` fa-stack-1x">
		</i></span> 
		`+ value['section-name'] +`
		</h3>`;

		$(elementId).append(content);
	});
}

$('.cv-app-sections').on('click', function() {

	let clickedSection = $(this).attr('id');

	let closeResult = closeSections();
	let sections;
	let hasIcons;
	let hasGraph

	if(window.DataStore.sectionsData[clickedSection] != undefined) {
		sections = window.DataStore.sectionsData[clickedSection]['data'];
		hasIcons = window.DataStore.sectionsData[clickedSection]['has-icons'];
		hasGraph = window.DataStore.sectionsData[clickedSection]['has-graph'];
	}

	if(closeResult == 0 && sections != undefined) {

			let htmlContentUl = `<ul>`;

			let htmlContentLi = '';

			let htmlContentIcon = '';

			$.each(sections, function(key, value) {

				if(hasIcons == 1) {
					htmlContentIcon = `<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-`+ key +` fa-stack-1x"> </i> </span> `;	
				} else {
					htmlContentIcon = key + ': ';
				}

				htmlContentLi += `<li>` + htmlContentIcon + value +` </li>`;
			});

			htmlContentUl += htmlContentLi;

			htmlContentUl += `</ul>`;

			$(htmlContentUl).insertAfter($(this));
		}
	
});

function closeSections() {

	let leftUl = $('#cv-app-left').find('ul');
	let rightUl = $('#cv-app-right').find('ul')
	leftUl.remove();
	rightUl.remove();

	if(leftUl.length > 0 || rightUl.length >0) {
		return 1;
	} else {
		return 0;
	}
}

$(".cv-app-sections").hover(function() {
    $(this).css('cursor','pointer');
    $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}, function() {
    $(this).css('cursor','auto');
});

});