function solution(babbling) {
    const tell = ["aya", "ye", "woo", "ma"];  
    return babbling.map(x => {
        while(true){            
            for(var i=0; i<tell.length; i++){
                if(x.startsWith(tell[i])){
                    x = x.replace(tell[i], "");
                    break;
                }
            }

            if(i >= tell.length) break;
        }
        return x;
    }).filter(x => x==="").length;
}
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));