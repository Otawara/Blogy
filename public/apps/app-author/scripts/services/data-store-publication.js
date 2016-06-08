(function() {
	'use strict';

	angular
		.module('authorApp')
		.factory('DataStorePublication', DataStorePublication);

	DataStorePublication.$inject = ['$http', '$q'];

	function DataStorePublication($http, $q) {
		var services = {
			getPublicationsByAuthor : getPublicationsByAuthor,
			deletePublicationById : deletePublicationById,
			updatePublicationById : updatePublicationById
		};

		return services;

		function getPublicationsByAuthor(authorId) {
			var deferred = $q.defer();

			$http.get('api/v1/publications/authors/' + authorId)
				.success(function(resp, status) {
					deferred.resolve(resp);
				})
				.error(function(error, status) {
					deferred.reject(error);
				});
			return deferred.promise;
		}

		function deletePublicationById(publicationId) {
			var deferred = $q.defer();

			$http.delete('api/v1/publications/' + publicationId)
				.success(function(resp, status) {
					deferred.resolve(resp);
				})
				.error(function(error, status) {
					deferred.reject(error);
				});
		  return deferred.promise;
		}

		function updatePublicationById(publicationObj) {
			var deferred = $q.defer();

			$http.put('api/v1/publications/' + publicationObj._id, publicationObj)
				.success(function(resp, status) {
					deferred.resolve(resp);
				})
				.error(function(error, status) {
					deferred.reject(error);
				});
		  return deferred.promise;
		}

	}

})();