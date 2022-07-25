// // 1
// let str =`aaa@bbb@ccc`;
// console.log(str);
// str = str.replace(/@/g,'!')
// console.log(str);

// // 2
// let date = '2025-12-31';
// date = date.replace(/(2025)-(12)-(31)/g,'$3/$2/$1')
// console.log(date)

// // 3
// let str = `Я учу javascript!`;

// console.log(str.substring(2,5));
// console.log(str.substr(2,3));
// console.log(str.slice(2,5));

// console.log(str.substring(6,16));
// console.log(str.substr(6,10));
// console.log(str.slice(6,16));

// // 4
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3)
// }
// let res = Math.sqrt(sum);
// console.log(res);

// // 5
// let a = 6;
// let b  = 1;
// let c = Math.max(a,b) - Math.min(a,b);
// console.log(c);

// // 6
// let dateNow = new Date();
// dateNow = dateNow.toLocaleString('ru');
// dateNow = dateNow.split(', ').reverse().join(', ');
// console.log(dateNow);

// let date = new Date;
// function getZero(num) {
//     if (num > 0 && num < 10) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(getZero(date.getHours()) + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ', ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// // 7
// let str = `aa aba abba abbba abca abea`;
// let cheker = /a[b]{1,}a/gi;
// console.log(str.match(cheker))

// // 8
// let phone = prompt(`Write your mobile phone`);
// let cheker = /([+]{1}[1-9]{1,} [1-9]{2,3} [1-9]{5})/g;
// console.log(cheker.test(phone))

// // 9
// let email = prompt('Write your email');
// let cheker = /(^[a-z]+\w+[-_.]+@?.[a-z]{2,11})/gi;
// console.log(cheker.test(email))

// // 10
// const funcAdress = function (path) {
//     let domain = path.match(/^h[a-z]*\:\/\/.*\.\w+/);
//     let otherWithoutParams;
//     let params;
//     let hash;
//     switch (true) {
//         case path.indexOf('?') !== -1:
//             otherWithoutParams = path.substr(domain.toString().length, path.indexOf('?') - domain.toString().length);

//             if (path.indexOf('#') !== -1) {
//                 params = path.substr(path.indexOf('?') + 1, (path.indexOf('#') - path.indexOf('?')) - 1);
//                 hash = path.match(/\#.+/);
//             } else {
//                 params = path.substr(path.indexOf('?') + 1, path.length - path.indexOf('?'));
//                 hash = '-';
//             }
//             break;
//         case path.indexOf('#') !== -1:
//             otherWithoutParams = path.substr(domain.toString().length, path.indexOf('#') - domain.toString().length);
//             params = '-';
//             hash = path.match(/\#.+/);
//             break;
//         default:
//             otherWithoutParams = path.substr(domain.toString().length, path.length - domain.toString().length);
//             params = '-';
//             hash = '-';
//             break;
//     }
//     return [domain, otherWithoutParams, params, hash]
// }
// let adress = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
// console.log(`Adress = ${adress}`);
// arrAdress = funcAdress(adress);
// console.log(`Domen =  ${arrAdress[0]}`);
// console.log(`WithoutParametrs = ${arrAdress[1]}`);
// console.log(`Parametrs = ${arrAdress[2]}`);
// console.log(`Hash = ${arrAdress[3]}`);