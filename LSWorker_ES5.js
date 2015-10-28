	function DBOperate() {
		if (!(this instanceof DBOperate)) {
			return new DBOperate(key);
		}
	}
	
	DBOperate.prototype.read = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(DBOperate.service.read[0]);
		}
		
		for (var i = 0, aLen = keys.length, ret = {}; i < aLen; i += 1) {
			ret[keys[i]] = db.getItem(keys[i]);
		}
		
		return ret;
	};
		
		
	DBOperate.prototype.write = function (data /* Key-value pairs */) {
		if (typeof key === 'undefined') {
			throw new Error('Key is not defined!');
		}
		db.setItem(this.key, value);
	};
	
	DBOperate.prototype.remove = function (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(DBOperate.service.remove[0]);
		}
		
		for (var i = 0, aLen = keys.length; i < aLen; i += 1) {
			db.removeItem(keys[i]);
		}
	};
	
	
	/** @static */
	DBOperate.clear = function () {
		db.clear();
	};
	
	/** @static */
	DBOperate.service = {
		read: ['Impossible to read data. Keys are undefined.'],
		write: [],
		remove: ['Impossible to delete data. Keys are undefined.']
	};