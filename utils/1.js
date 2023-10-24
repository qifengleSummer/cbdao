var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    if(s.length === 1){
        return 1
    }
    let res = []
    let max = 0
    for (let str of s) { // str每一个字母
        while (res.includes(str)) {
            res.shift()
        }
        res.push(str)
        max = Math.max(max,res.length)
    }
    return max
    };