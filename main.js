let QRCode = require('qrcode');

let id,
    cl = 100,
    i;

for(i=0;i<35;i++){
    id = Date.now()-1489270000000;
    QRCode.toFile('kfc/toto'+i+'.jpg', 'WBCB;SERVICE;1;'+id+";"+cl, err=>console.log(err));
}
