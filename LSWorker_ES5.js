	var LSWorker = (function () {
		var inst = 0;
		
		function LSWorker() {
			if (inst) {
				throw new Error('LSWorker has already set.');
			}
			
			if (!(this instanceof LSWorker)) {
				return new LSWorker();
			}
			
			inst += 1;
			this.db = localStorage;
		}
		
		return LSWorker;
	}());
	
	LSWorker.prototype.read = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(LSWorker.info.read[0]);
		}
		
		for (var i = 0, aLen = keys.length, ret = {}; i < aLen; i += 1) {
			ret[keys[i]] = this.db.getItem(keys[i]);
		}
		
		// If there is only one key in the array of keys then return corresponding value.
		return aLen === 1 ? ret[Object.keys(ret)[0]] ; ret;
	};
		
		
	LSWorker.prototype.write = function (data /* Key-value pairs */) {
		if (typeof key === 'undefined') {
			throw new Error('Key is not defined!');
		}
		this.db.setItem(this.key, value);
	};
	
	LSWorker.prototype.remove = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(LSWorker.info.remove[0]);
		}
		
		for (var i = 0, aLen = keys.length; i < aLen; i += 1) {
			this.db.removeItem(keys[i]);
		}
	};
	
	
	/** @static */
	LSWorker.clear = function () {
		localStorage.clear();
	};
	
	/** @static */
	LSWorker.info = {
		read: ['Impossible to read data. Keys are undefined.'],
		write: [],
		remove: ['Impossible to delete data. Keys are undefined.']
	};