const cleanPayload=(payload)=>{
    const cleanObj={}
    const objArr=Object.keys(payload)
    objArr.forEach((v)=>{
       if(payload[v] !==undefined && payload[v] !== null){
        cleanObj[v]=payload[v]
       }
    })
    console.log(cleanObj)
    return cleanObj
}


module.exports = {cleanPayload}