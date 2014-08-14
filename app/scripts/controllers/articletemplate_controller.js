Tlontimesyo.ArticleTemplateController = Ember.ObjectController.extend({
	titleEdit: false,
	articleTitleEditClick: false,
	newTitle:"A Most Grave Incident",
	authorEdit: false,
	articleAuthorEditClick: false,
	newAuthor:"Dr. WHO?",
	timeEdit: false,
	newTime: "THE PAST, THE FUTURE",
	articleTimeEditClick: false,
	newId: null,

	createRecord: function() {

			this.newId = Math.floor((Math.random() * 10000));

			var newArticle = this.store.createRecord('article', {
				id: this.newId,
			});


			newArticle.save();


		},

	updateInterface: function(key) {

		if (key === "articleTitle")
		{

		this.set('articleTitleEditClick', false); 

		this.set('titleEdit', false);
		}

		if (key === "Author")
		{
			this.set('articleAuthorEditClick', false);

			this.set('authorEdit', false);
		}

		if( key === "time") 
		{
			this.set('articleTimeEditClick', false);
			this.set('timeEdit', false);


		}


	},




	actions: {


		titleEditMethod: function(){
			this.set('titleEdit', true);
			this.set('articleTitleEditClick', true);

		},

		authorEditMethod: function(){
			this.set('articleAuthorEditClick', true);
			this.set('authorEdit', true);
		},

		timeEditMethod: function(){
			this.set('articleTimeEditClick', true);
			this.set('timeEdit', true);
		},

		persist: function(key, keyValue) {
			if(this.newId === null) 
			{
				this.createRecord();
			}

			//RETRIEVE AND UPDATE RECORD

			//save controller context 
			var controller = this; 

			//use closure to retain controller context while we wait for promise to resolve 
			(function(controller, key, keyValue){
			
			
			//returns a promise object
			//value = the fulfilled promise (i.e. a record)
			var retrievedArticle = controller.store.find('article', controller.newId);
			retrievedArticle.then(
				function(value)
				{
					console.log("worked");
					value.set(key, keyValue);
					//IS THIS SAVING PROPERLY? Some sort of glitch where the saved article won't render properly
					value.save();
				
				}, function(){console.log("didn't work")});
			})(controller, key, keyValue);


			//UPDATE INTERFACE
			this.updateInterface(key); 
		},




		persistTitle: function(){

			//CREATES MULTIPLE ARTICLE RECORDS IF SAVE IS PRESSED MORE THAN ONCE....
			//NEED TO FIND A WAY TO FIX THIS SO THERE IS ONLY ONE ARTICLE RECORD PER SESSION

			if(this.newId === null) 
			{
			
			this.newId = Math.floor((Math.random() * 10000));

			var newArticle = this.store.createRecord('article', {
				id: this.newId,
				articleTitle: this.newTitle
			});


			newArticle.save();


			}

			else
			{
				//save controller context 
				var controller = this; 

				//use closure to retain controller context while we wait for promise to resolve 
				(function(controller){
				
				
				//returns a promise object
				//value = the fulfilled promise (i.e. a record)
				var retrievedArticle = controller.store.find('article', controller.newId);
				retrievedArticle.then(
					function(value){
					console.log("worked");
					var test = controller.newTitle; 
					value.set('articleTitle', controller.newTitle);
					value.save();
					
					}, function(){console.log("didn't work")});

				})(controller);
				
				
			}


			this.set('articleTitleEditClick', false); 

			this.set('titleEdit', false);


		}

	}

});