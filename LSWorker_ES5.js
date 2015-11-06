/**
 *	@file Interface for functional and flexible working process with localStorage -- ES5 variant.
 *	@copyright Yaroslav Surilov 2015
 */
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

/**
 *	@param {Object} keys - Array of keys for reading from localStorage.
 */	
LSWorker.prototype.read = function (keys) {
	if (!Array.isArray(keys) || keys.length === 0) {
		throw new Error(LSWorker.info.read[0]);
	}
	
	for (var i = 0, aLen = keys.length, ret = {}; i < aLen; i += 1) {
		ret[keys[i]] = this.db.getItem(keys[i]);
	}
	
	// If there is only one key in the array of keys then return corresponding value.
	return aLen === 1 ? ret[Object.keys(ret)[0]] ; ret;
};
	
/**
 *	@param {Object} data - Key-value pairs for inserting in localStorage.
 */	
LSWorker.prototype.write = function (data) {
	var keys;
	
	if (arguments.length > 1 || Object.prototype.toString.call(data) !== '[object Object]') {
		throw new Error(LSWorker.info.write[0]);
	}
	
	keys = Object.keys(data);
	
	keys.forEach(function (key) {
		this.db.setItem(key, data[key]);
	});
};

/**
 *	@param {Object} keys - Array of keys for removing from localStorage.
 */	
LSWorker.prototype.remove = function (keys) {
	if (arguments.length > 1 || !Array.isArray(keys)) {
		throw new Error(LSWorker.info.remove[0]);
	}
	
	keys.forEach(function (key) {
		this.db.removeItem(key);
	});
};


/** @static */
LSWorker.clear = function () {
	localStorage.clear();
};

/** @static */
LSWorker.info = {
	read: ['Impossible to read data. Keys are undefined.'],
	write: ['Data for writing are incorrect.'],
	remove: ['Impossible to delete data. Keys are undefined.']
};