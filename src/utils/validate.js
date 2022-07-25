/* eslint-disable */
/**
 * 
 * @param {过滤特殊字符} str 
 * @returns 
 */
export function stripscript(str) {
    let pattern = new RegExp("[ `~!%@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    let rs = "";
    for(let i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, "");
    }
    return rs;
}
/**
 * 
 * @param {邮箱验证} value 
 * @returns 
 */
export function validEmail(value) {
    let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(value)
}
/**
 * 
 * @param {密码验证} pass 
 * @returns 
 */
export function validPassword(pass) {
    let reg = /^[A-Za-z0-9]{6,16}$/;
    return reg.test(pass);
}
/**
 * 
 * @param {验证码验证} code 
 * @returns 
 */
export function validCode(code) {
    let reg = /^[a-z0-9]{6}$/;
    return reg.test(code);
}