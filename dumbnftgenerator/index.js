/**
 * Syncrnous implementation of Generator 
 * yea ik its shit lol it does the work btw :awkward:
 * author  : shivzee
 */


const base = require("./styles/base/base");

const normalEyebrows = require("./styles/eyebrows/normalEyebrows");
const abnormalEyebrows = require("./styles/eyebrows/abnormalEyebrows");
const tensedEyebrows = require("./styles/eyebrows/tensedEyebrows");
const relaxedEyebrows = require("./styles/eyebrows/relaxedEyebrows");
const coolEyebrows = require("./styles/eyebrows/coolEyebrows");

const crossEyes = require("./styles/eyes/crossEyes");
const curvedEyes = require("./styles/eyes/curvedEyes");
const dollarEyes = require("./styles/eyes/dollarEyes");
const iEyes = require("./styles/eyes/iEyes");
const straightEyes = require("./styles/eyes/straightEyes");

const uwuMouth = require("./styles/mouths/uwuMouth");
const chadMouth = require("./styles/mouths/chadMouth");
const dedMouth = require("./styles/mouths/dedMouth");
const happyMouth = require("./styles/mouths/happyMouth");
const sadgeMouth = require("./styles/mouths/sadgeMouth");


const rareBanana = require("./styles/rare/rareBanana");
const colors = require("./styles/base/colors");


const crypto = require("crypto");


const fs = require("fs");
const sharp = require("sharp");

const genHash = (msg) => {
    let HASHER = crypto.createHmac("sha256", "NFTGENERATION");
    return HASHER.update(msg).digest("hex");
}

const getRand = () => {
    return Math.floor((Math.random() * 10) + 1)-1;
}

const eyes = [straightEyes , straightEyes , straightEyes , curvedEyes , curvedEyes , curvedEyes , crossEyes , dollarEyes , iEyes , iEyes];
const mouths = [sadgeMouth , sadgeMouth , happyMouth , happyMouth , happyMouth , dedMouth , dedMouth , uwuMouth , chadMouth , chadMouth];
const eyebrows = [normalEyebrows , normalEyebrows , normalEyebrows , abnormalEyebrows , abnormalEyebrows , abnormalEyebrows , coolEyebrows , coolEyebrows , tensedEyebrows , relaxedEyebrows];
const bgs = [colors[0] , colors[0] , colors[1] , colors[1] , colors[2] , colors[2] , colors[3] , colors[3] , colors[4] , colors[4]];

const generateSVG = (bg , eyebrow , eye , mouth , layer) => {
    return `
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="${bg}"/>
    ${layer}
    ${base.svg}
    ${eyebrow}
    ${eye}
    ${mouth}

    </svg>
    `;
}

const generateJSON = (id , eyebrow , eye , mouth , layer) => {
    return JSON.stringify({
        "image": `ipfs://{*cid*}/${id}` , 
        "attributes" : [
            {
                "trait_type" : "Eyebrows" ,
                "value" : eyebrow
            } ,
            {
                "trait_type": "Eyes",
                "value": eye
            },
            {
                "trait_type": "Mouth",
                "value": mouth
            },
            {
                "trait_type": "Layer",
                "value": layer
            },
        ]
    } , null , 4);
}

const generateMetaNFT = (id) => {
    let eyebrow = eyebrows[getRand()];
    let eye = eyes[getRand()];
    let mouth = mouths[getRand()];
    let bg = bgs[getRand()];
    let layer = getRand()==6?rareBanana : {id:"none" , svg:""};

    let svg = generateSVG(bg,eyebrow.svg,eye.svg,mouth.svg,layer.svg);
    let json = generateJSON(id , eyebrow.id , eye.id , mouth.id , layer.id);
    return {svg , json};
}


const generateNFTs = (limit) => {
    let total = 0;
    let alreadyGenerated = [];
    while(total<limit){
        let NFT = generateMetaNFT(total);
        let hash = genHash(JSON.stringify(JSON.parse(NFT.json).attributes));
        if(!alreadyGenerated.includes(hash)){
            alreadyGenerated.push(hash);
            try{
                fs.writeFileSync(`./generated/metadata/${total}.json`, NFT.json);
                fs.writeFileSync(`./generated/${total}.svg` , NFT.svg);
                sharp(`./generated/${total}.svg`)
                    .png()
                    .toFile(`./generated/nfts/${total}.jpg`)
                    .then(function (info) {
                        console.log(info)
                    })
                    .catch(function (err) {
                        console.log(err)
                    });
                total++;
            }catch(err){
                console.log(err);
            }
        }
    }
}

generateNFTs(96);