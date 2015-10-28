class LSWorker {
	constructor() {
		
	}
	
	static serviceMsgs = {
		read: ['Impossible to read data. Keys are undefined.'],
		write: [],
		remove: ['Impossible to delete data. Keys are undefined.']
	}
	
	static clear = function () {
		db.clear();
	}
	
	read (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(DBOperate.service.read[0]);
		}
		
		for (var i = 0, aLen = keys.length, ret = {}; i < aLen; i += 1) {
			ret[keys[i]] = db.getItem(keys[i]);
		}
		
		return ret;
	}
	
	write (data /* Key-value pairs */) {
		if (typeof key === 'undefined') {
			throw new Error('Key is not defined!');
		}
		db.setItem(this.key, value);
	}
	
	remove (keys /* Array of keys */) {
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(DBOperate.service.remove[0]);
		}
		
		for (var i = 0, aLen = keys.length; i < aLen; i += 1) {
			db.removeItem(keys[i]);
		}
	}
}