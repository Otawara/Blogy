(function() {
	'use strict';

	angular
		.module('programApp')
		.factory('DataStorePublication', DataStorePublication);

	DataStorePublication.$inject = ['$http', '$q'];

	function DataStorePublication($http, $q) {
		var services = {
			getPublications : getPublications
		};

		return services;

		function getPublications() {
			var deferred = $q.defer();

			$http.get('api/v1/publications')
				.success(function(resp, status) {
					deferred.resolve(resp);
				})
				.error(function(error, status) {
					deferred.reject(error);
				});
			return deferred.promise;
		}

		// function deletePublicationById(publicationId) {
		// 	var deferred = $q.defer();
		//
		// 	$http.delete('api/v1/publications/' + publicationId)
		// 		.success(function(resp, status) {
		// 			deferred.resolve(resp);
		// 		})
		// 		.error(function(error, status) {
		// 			deferred.reject(error);
		// 		});
		//   return deferred.promise;
		// }

	}

})();
