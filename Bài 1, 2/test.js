//bài 1 :
function allLongestStrings(inputArray) {
    return inputArray.filter(s=>s.length===Math.max(...inputArray.map(l=>l.length)));
}
console.log(allLongestStrings( ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]))
// bài 2 
function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    a.forEach((element, index) =>{
        if(index % 2 === 0){
            team1 += element;
        }else{
            team2 += element;
        }
    });
    return[team1, team2];
}


