const fs = require("fs");

for(let i=0;i<96;i++){
       try{
           let json = JSON.parse(fs.readFileSync(`./${i}.json`));
           console.log(json);
           json.image = `ipfs://bafybeienakpfmxsifchtyf2sfsk24qmlnl7rpxiuvf5wpb3sexr3dzulh4/${i}.jpg`
           fs.writeFileSync(`./updated/${i}`, JSON.stringify(json));
       }catch(err){
         console.log("Error "+err);
       }
}