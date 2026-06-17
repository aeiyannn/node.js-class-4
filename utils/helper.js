const cleanPayload=(payload)=>{
    const cleanObj={}
    const objArr=Object.keys(payload)
    objArr.forEach((v)=>{
       if(payload[v]){
        cleanObj[v]=payload[v]
       }
    })
    console.log(cleanObj)
    return cleanObj
}


module.exports = {cleanPayload}