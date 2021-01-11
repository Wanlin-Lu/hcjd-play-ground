// const ss = document.styleSheets
// const cssr = ss[0].cssRules
// const csst = cssr[0].cssText
// const cssst = cssr[0].selectorText
// console.log(ss[0])
// console.log(cssr)
// console.log(csst)
// console.log(cssst)
// ss[0].insertRule('body {background: red}')
// let { log } = console
// let arrnum = [20,30,40]
// log(arrnum)
// arrnum.forEach(i => i+2)
// log(arrnum)
// let arrnum1 = []
// arrnum.forEach(i => arrnum1.push(i+2))
// log(arrnum1)

// let arr = ['c','f','h','o']

// var str = 'ab4de8g1ijklmn9';

// let str3 = str.replace(/\d/g,function(){var count;return function() {return arr[count++]}})
// log(str3)

/*let str4 = str.replace(/\d/g,(function(){var count=0;return function() {return arr[count++]}})())
log(str4)*/

/*var func = (function() {
	var count = 0;
	return function() {
 		return arr[count++];
 	}
})()
let str2 = str.replace(/\d/g,func)
log(str2)*/

/*for(let i of arr) {
	str.replace(/\d/,arr[i])
}
log(str)

var bip = document.getElementById('bibao')
var list = bip.getElementsByTagName('li')*/

// for(let i=0;i<list.length;i++) {
// 	list[i].onclick = function() {
// 		alert(i+1)
// 	}
// }

/*for (var i=0; i<list.length; i++) {
	list[i].onclick =(function(i) {
		return function() {
			alert(i)
		}
	})(i)
}*/

/*function loadImageAsync(url) {
	return new Promise((resolve,reject) => {
		const image = new Image()


		image.onload = function() {
			resolve(image)
		}

		image.onerror = function() {
			reject(new Error('Could not load image at' + url));
		}
		image.src = url;

	})
}

loadImageAsync(`https://adom-wanlinlu-blog.oss-cn-hangzhou.aliyuncs.com/avatar.png`).then(image => document.getElementById('img').appendChild(image))*/

/*const getJSON = function(url) {
	const promise = new Promise((resolve,reject) => {
		const handler = function() {
			if (this.readyState !== 4) { // 这是大写呀readyState
				return
			}
			if (this.status === 200) {
				resolve(this.response)
			} else {
				reject(new Error(this.statusText))
			}
		}

		const xhr = new XMLHttpRequest()
		xhr.open('GET',url)
		xhr.onreadystatechange = handler
		xhr.response.Type = 'json'   // response.Type = 'json'
		xhr.setRequestHeader('Accept','application/json')
		xhr.send()
	})
	return promise
}*/


/*console.log('nimei')

getJSON('https://jsonplaceholder.typicode.com/todos/2').then(json =>console.log(json), error => {console.error(error)});
getJSON('https://jsonplaceholder.typicode.com/todos/1').then(json => console.log("Promise-Ajax:"+json), error => console.log("error:" + error))

const promises = [1,2,3,4,5].map(id => getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`))

Promise.all(promises).then(jsons => jsons.forEach(json => console.log(json))).catch(e => console.error(error));*/

/*function getFoo () {
	return new Promise((resolve,reject) => {
		// resolve('luwanlin')
		reject('error rrr')
	})
}

function* myGenerator () {
	try {
		const foo = yield getFoo()
		console.log(foo)
	} catch(e) {
		console.error(e)
	}
}

function run(gen) {
	let it = gen()

	function go(result) {
		if(result.done) return result.value;
		return result.value.then(value => {
			return go(it.next(value))
		}).catch( e => go(it.throw(e)))
	}

	go(it.next())
}
run(myGenerator)*/

/*let generator1 = function* () {
	yield 1;
	yield* [2,3,4];
	yield 5;
}

function runWithoutPromise(gen) {
	let it = gen()

	function go(result) {
		if(!result.done) { 
			return result.value 
		} else {
			return 'done'
		}
		go(it.next())
	}

	go(it.next())
}
runWithoutPromise(generator1)
let gen1 = generator1()
gen1.next()
gen1.next()*/

/* 手写深拷贝 */
/*let arr = [1,2,3,4]
let arr1 = arr
console.log(arr[0])
arr1[0]=100
console.log(arr[0])*/

/*function deepClone(obj = {}) {
	if (typeof obj !== 'object' || typeof obj === null) {
		return obj
	}

	let result
	if (obj instanceof Array) {
		result = []
	} else {
		result = {}
	}

	for(let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key])
		}
	}

	return result
}*/

/*let arr2 = deepClone(arr)
console.log(arr2)
arr[1]= 1000
console.log(arr[1])
console.log(arr2[1])*/

/* 手写jQuery */
/*class jQuery {
	constructor(selector) {
		const result = document.querySelectorAll(selector);
		const length = result.length;
		for(let i=0; i<length; i++) {
			this[i] = result[i]
		}
		this.length = length;
		this.selector = selector;
	}

	get(index) {
		return this[index]
	}
	each(fn) {
		for(let i=0; i<this.length; i++) {
			const elem = this[i];
			fn(elem)
		}
	}
	on(type, fn) {
		return this.each(elem => {
			elem.addEventListener(type,fn,false)
		})
	}
	// 扩展很多DOM API
}

//插件
jQuery.prototype.dialog = function(info) {
	alert(info)
}

// 造轮子
class myJQuery extends jQuery {
	constructor(selector) {
		super(selector)
	}
	// 扩展自己的方法
	addClass(className) {

	}
}

const $ = new jQuery('div')
console.log($[0])
$.each(elem => console.log(elem.nodeName))
$.on('click',() => alert('clicked'))*/

/* 手写bind */
/*Function.prototype.bind1 = function() {
	const args = Array.prototype.slice.call(arguments)
	const t = args.shift()
	const self = this // 当前函数
	return function() {
		return self.apply(t,args)
	}
}

let obj = {}
function say(some) {
	console.log(some)
}
let newSay = say.bind1(obj,'something')
newSay()*/

/* 闭包的作用 */
/*function createCache() {
	const data = {};
	return {
		set: function(key,value) {
			data[key] = value
		},
		get: function(key) {
			return data[key]
		}
	}
}
const c = createCache()
c.set('a',1000)
console.log(c['a']) // undefined
console.log(c.get('a'))*/

/*for(let i=0;i<10;i++) {
	let a = document.createElement('a')
	a.innerHTML = i + '<br>'
	a.addEventListener('click', function (e) {
		e.preventDefault()
		alert(i)
	})
	document.body.appendChild(a)
}*/

/*for(var i=0;i<10;i++) {
	let a = document.createElement('a')
	a.innerHTML = i + '<br>'
	a.onclick = (function(i) {
		return function(e) {
			e.preventDefault()
			alert(i)
		}
	})(i)
	document.body.appendChild(a)
}*/
/*const divcap = document.getElementById('target')
const divbubule = document.getElementById('target1')*/

/*divcap.addEventListener('click',e => alert('capture'),true)
divbubule.addEventListener('click',e => alert('buble'),false)
divbubule.firstElementChild.addEventListener('click',e => alert('target'),false)*/

/*function bindEvent(elem,type,selector,fn) {
	if (fn == null) {
		fn = selector
		selector = null
	}
	elem.addEventListener(type, event => {
		const target = event.target;
		if (selector) {
			if (target.matches(selector)) {
				fn.call(target, event)
			} 
		} else {
			fn.call(target, event)
		}
	})
}

bindEvent(divcap.firstElementChild.firstElementChild, 'click', e => alert('clicked'))
bindEvent(divbubule,'click','li.special',e => alert('委托'))*/

/* 手写防抖 */
/*const input1 = document.getElementById('input1')*/

/*let timer
input1.addEventListener('keyup',() => {
	if (timer) {
		clearTimeout(timer)
	}
	timer = setTimeout(() => {
		console.log(input1.value)
		timer = null;
	}, 500)
})*/
/*function debounce(fn, delay=500) {
	let timer
	return function() {
		if(timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments)
			timer = null
		}, delay)
	}
}*/
/*input1.addEventListener('keyup',debounce(function(e) {
	console.log(e.target)
	console.log(e.target.value)
}, 600))*/
/*input1.addEventListener('keyup',debounce((e) => {
	console.log(e.target)
	console.log(e.target.value)
}, 600))*/

/* 手写节流 */
/*const div1 = document.querySelector('#div1')
console.log(div1)*/

/*div1.addEventListener('drag', e => console.log(e.offsetX,e.offsetY),false)*/

/*let timer = null
div1.addEventListener('drag', function(e) {
	if (timer) {
		return
	}
	timer = setTimeout(() => {
		console.log(e.offsetX,e.offsetY)
		timer = null;
	}, 1000)
})*/

/*function throttle(fn, delay) {
	let timer = null
	return function() {
		if(timer) {
			return
		}
		timer = setTimeout(() => {
			fn.apply(this,arguments)
			timer = null;
		}, delay)
	}
}
*/
/*div1.addEventListener('drag', throttle(e => {
	console.log(e.offsetX,e.offsetY)
},1000))*/

/* 手写深度比较 */
/*function isObject(obj) {
	return typeof obj === 'object' && typeof obj !== null
}

function isEqual(obj1,obj2) {
	if (!isObject(obj1) || !isObject(obj2)) {
		return obj1 === obj2
	}

	if (obj1 === obj2) {
		return true
	}

	const obj1Keys = Object.keys(obj1)
	const obj2Keys = Object.keys(obj2)

	if (obj1Keys.length !== obj2Keys.length) {
		return false
	}

	for(let key in obj1) {
		const res = isEqual(obj1[key],obj2[key])
		if(!res) {
			return false
		}
	}
	return true
}*/

/*const obj1 = {
	a: 100,
	b: {
		x: 200,
		y: 300,
	}
}
const obj2 = {
	a: 100,
	b: {
		x: 200,
		y: 300,
	},
	c: 3000,
}
console.log(isEqual(obj1,obj2))*/

/* flat arr */
/*function flaten(arr) {
	const isDeep = arr.some(item => item instanceof Array)

	if(!isDeep) {
		return arr
	}

	const res = Array.prototype.concat.apply([],arr)

	return flaten(res)
}

const res = flaten([1,3,[2,3,4,[5,6,[7,8]],[2,3,[56]]]])
console.log(res)*/

/* RequestAnimationFrame */
/*let aniT = document.getElementById('animation')
let currW = aniT.style.width.slice(0,-2)
console.log(currW)
let finalW = 600*/

/*function animate() {
	currW  = Number(currW) + 3
	aniT.style.width = currW+'px'
	console.log(aniT.style.width)
	if (currW < finalW) {
		setTimeout(animate,16.7)
	}
}
animate()*/

/*function animate() {
	currW = Number(currW) + 3
	aniT.style.width = currW+'px'
	console.log(aniT.style.width)
	if(currW < finalW) {
		window.requestAnimationFrame(animate)
	}
}
animate()*/

/*function fibonacci(n) {
    if(n == 1 || n == 2) return 1
    let [a,b] = [1,1]
    for(let i=2;i<n;i++) {
        [a,b] = [b,a+b]
    }
    return b
}*/


/*输入：namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
输出：{a: {test: 1, b: {c: {d: {}}}}}*/

/*function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.');
    var res = oNamespace;   // 保留对原始对象的引用

    for(var i = 0, len = arr.length; i < len; i++) {
        if(arr[i] in oNamespace) {  // 空间名在对象中
            if(typeof oNamespace[arr[i]] !== "object") {    // 为原始值
                oNamespace[arr[i]] = {};    // 将此属性设为空对象
            }
        } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
            oNamespace[arr[i]] = {};
        }

        oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
    }

    return res;

}*/

/*function namespace(oNamespace, sPackage) {
   if(sPackage.length <= 0) return;
    // var arr = sPackage.split('.');
    var pointer = oNamespace;


        if(sPackage[0] in oNamespace) {
            if(typeof oNamespace[sPackage[0]] !== "object") {
                oNamespace[sPackage[0]] = {};
            }
        } else {
            oNamespace[sPackage[0]] = {};
        }

        oNamespace = oNamespace[sPackage[0]];

        namespace(oNamespace, sPackage.slice(2));


    return pointer;

}*/

/*查找两个节点的最近的一个共同父节点，可以包括节点自身
oNode1 和 oNode2 在同一文档中，且不会为相同的节点*/
/*function commonParentNode(oNode1, oNode2) {
    for(;oNode1;oNode1=oNode1.parentNode) {
        if(oNode1.contains(oNode2)) {
            return oNode1;
        }
    }
}*/