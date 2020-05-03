
const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
console.log(buf.length, len);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

const length = buffer.write('abcd', 8);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// Prints: 2 bytes : ab

const bufCn = Buffer.alloc(256)

const lenCn = bufCn.write("日了狗", 'utf-8')

console.log(lenCn, `${bufCn.toString('utf8', 0, lenCn)}`)
console.log(bufCn)

function toUnicode(str:string) {
	return str.split('').map(function (value:string, index:number, array) {
		var temp = value.charCodeAt(0).toString(16).toUpperCase();
		if (temp.length > 2) {
			return '\\u' + temp;
		}
		return value;
	}).join('');
}

var str = '转换成 Unicode';

console.log(toUnicode(str));

console.log('你'.charCodeAt(0).toString(16))

const arr = new ArrayBuffer(16)
let view = new Uint32Array(arr)

view[0] = 123456
console.log(arr)
console.log(view)

