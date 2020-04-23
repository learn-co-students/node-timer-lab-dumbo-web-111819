process.argv.shift()
process.argv.shift()
// let secs

let str=process.argv[0]//.slice(-3,process.argv.length))
str=str.slice(-3,str.length) //slice returns what was removed
// console.log(str)
if('min'=== str){
    secs=parseInt(process.argv[0].slice(0,process.argv.length-3))*1000*60
}
else{
    secs=parseInt(process.argv.slice(-1))*1000
}


// // console.log(secs)

let timer=global.setInterval(function(){
    secs-=1000
    process.stdout.write(`Left: ${(secs)/1000}s\n`)
    if(secs===0){
    global.clearInterval(timer)
    }
},1000)