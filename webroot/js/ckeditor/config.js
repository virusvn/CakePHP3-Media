/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.plugins.add( '5questions', {
	icons: '5questions',
	init: function( editor ) {
		editor.addCommand( '5questions', {
			exec: function( editor ) {
				editor.insertHtml( '<div class="question5 middle mb-20"><img src="/images/common/5questions.png"></div>' );
			}
		});
		editor.ui.addButton( '5questions', {
			label: 'Insert 5 questions title',
			command: '5questions',
			toolbar: 'others'
		});
	}
});
CKEDITOR.stylesSet.add( 'my_styles', [
	// Block-level styles.
	{ name: '見出し', element: 'h2', attributes: { 'class': 'headline mb-20' },},
	{ name: 'テキスト', element: 'p',  attributes: { 'class': 'text1 mb-20' }},
	{ name: 'Mention',  element: 'p', attributes: { 'class': 'mention mb-20' } },
	{ name: 'Q質問見出し', element: 'span' },
	{ name: '質問見出し', element: 'h4', attributes: { 'class': 'headline_q mb-20' } },
	{ name: '回答', element: 'p', attributes: { 'class': 'answer mb-20' } },


]);
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
    
    	config.extraPlugins = 'gallery,colorbutton,5questions';
    	
    	config.language = 'ja';
    	
    	config.height = 200;

		config.allowedContent = true;
	// The toolbar groups arrangement, optimized for two toolbar rows.

	 config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },

		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		 '/',
		 {name : 'スーパCEO', groups: ['styles', 'others', 'colorbutton']},

	];

	config.contentsCss = '/css/article.css';
	config.stylesSet = 'my_styles';
/*
	config.toolbar = [
		{ name: 'styles', items: [ 'Format' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
		{ name: 'insert', items: [ 'gallery' ] },
		{ name: 'tools', items: [ 'Maximize' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source' ] },
		{ name: 'others', items: [ '-' ] },
		'/',
	];
    	
	 */
	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript,Image';
	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	// config.removeDialogTabs = 'image:advanced;link:advanced';
};