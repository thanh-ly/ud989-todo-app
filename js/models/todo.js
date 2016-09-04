/*global Backbone */
var app = app || {};
//IIFE moddule patern, objects within the anon function does not pollute the global scope in the window object
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		// Poke around the documentation of Backbone for 'default'
		defaults: {
			title: '',
			completed: false,
			//added priority functionality
			priority: false
		},
		//toggles the priority functionality TL
		togglePriority: function () {
			//look up the .save functionality on Backbone
			this.save({
				priority: !this.get('priority')
			});
		},
		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
