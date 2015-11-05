	function LSWorker() {
		if (!(this instanceof LSWorker)) {
			return new LSWorker();
		}
		
		this.db = localStorage;
	}
	
	LSWorker.prototype.read = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(LSWorker.service.read[0]);
		}
		
		for (var i = 0, aLen = keys.length, ret = {}; i < aLen; i += 1) {
			ret[keys[i]] = this.db.getItem(keys[i]);
		}
		
		return ret;
	};
		
		
	LSWorker.prototype.write = function (data /* Key-value pairs */) {
		if (typeof key === 'undefined') {
			throw new Error('Key is not defined!');
		}
		this.db.setItem(this.key, value);
	};
	
	LSWorker.prototype.remove = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(LSWorker.service.remove[0]);
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
	LSWorker.service = {
		read: ['Impossible to read data. Keys are undefined.'],
		write: [],
		remove: ['Impossible to delete data. Keys are undefined.']
	};