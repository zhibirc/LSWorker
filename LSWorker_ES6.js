class LSWorker {
	constructor() {}
	
	/**
	 *	Handle error messages.
	 *	@param {object[]} msg - Type-code pair of an error.
	 */
	static getServiceInfo(msg) {
		const msgs = {
			unknown: 'Unknown problem.',
			read: ['Impossible to read data. Keys are undefined.'],
			write: [],
			remove: ['Impossible to delete data. Keys are undefined.']
		};
		
		return Array.isArray(msg) && msg.length === 2 ? msgs[msg[0]][msg[1]] : msgs.unknown;
	}
	
	/**
	 *	Set reference to localStorage.
	 */
	static setDB() {
		return localStorage;
	}
	
	/**
	 *	Clean whole storage.
	 */
	static clear() {
		this.setDB().clear();
	}
	
	read (keys /* Array of keys */) {
		let _class = this.constructor,
			db = _class.setDB(),
			ret = Object.create(null); // Prevent prototypal inheritance of unwanted properties.
		
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(_class.getServiceInfo(['read', 0]));
		}
		
		for (var i = 0, aLen = keys.length; i < aLen; i += 1) {
			ret[keys[i]] = db.getItem(keys[i]);
		}
		
		return ret;
	}
	
	write (data /* Key-value pairs */) {
		let _class = this.constructor,
			db = _class.setDB(),
			hasOwn = Object.prototype.hasOwnProperty,
			prop;
		
		if (!Array.isArray(data) || data.length === 0) {
			throw new Error(_class.getServiceInfo(['write', 0]));
		}
		
		for (prop in data) {
			hasOwn.call(data, prop) && db.setItem(prop, data[prop]);
		}
	}
	
	remove (keys /* Array of keys */) {
		let _class = this.constructor,
			db = _class.setDB();
		
		if (!Array.isArray(keys) || keys.length === 0) {
			throw new Error(_class.getServiceInfo(['remove', 0]));
		}
		
		for (var i = 0, aLen = keys.length; i < aLen; i += 1) {
			db.removeItem(keys[i]);
		}
	}
}