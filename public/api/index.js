// 本地模式
var ISLOCAL = 1;
var BASEURL = ISLOCAL ? '/api' : 'http://target.com/api/api';
const OPTIONS = {
	API01: BASEURL + '',
};
window.$API = OPTIONS;
