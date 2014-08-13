Tlontimesyo.ArticleTemplateController = Ember.ObjectController.extend({
	titleEdit: false,
	articleTitleEditClick: false,
	newTitle:"Your Article Title",
	newId: null,

	actions: {


		titleEditMethod: function(){
			this.set('titleEdit', true);
			this.set('articleTitleEditClick', true);

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
				
				/*retrievedArticle.set('articleTitle', this.newTitle);
				retrievedArticle.save();*/
			}


			this.set('articleTitleEditClick', false); 

			this.set('titleEdit', false);


		}

	}

});