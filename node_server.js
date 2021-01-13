/************************** Import library/fungsi ****************************/
//library terkait Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./service_key.json");

//library untuk (format) timestamp
var moment = require('moment');

//library serial communication
var serialport = require('serialport');
/************************ Deklarasi objek/variabel ***************************/
// terkait firestore (cloud firestore di dalam google firebase)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-db-4aa92.firebaseio.com"
});

var dummyBuffer = {
    Data: [],
    Timestamp: []
}
  
const dataLimit = 100;

// terkait serial comm
var portName = "COM6";
var myPort = new serialport(portName,{
    baudRate:115200
});

myPort.on("close",() => {
    //console.log("RECON coz close");
    myPort.resume();
});

myPort.on("error",() => {
    //console.log("RECON coz error");
    myPort.resume();
});

myPort.on("data", (line) => {
    var bufferArray=[];
    bufferArray = [...line];

    
    var key = bufferArray[0];
    switch (key) {
        case 1:
            //console.log("SI1 DI");
            //console.log(bufferArray);
            firestoreDataBuffer.SI_1_DI.DI_1 = bufferArray[1];
            firestoreDataBuffer.SI_1_DI.DI_2 = bufferArray[2];
            firestoreDataBuffer.SI_1_DI.DI_3 = bufferArray[3];
            firestoreDataBuffer.SI_1_DI.DI_4 = bufferArray[4];
            firestoreDataBuffer.SI_1_DI.DI_5 = bufferArray[5];
            firestoreDataBuffer.SI_1_DI.DI_6 = bufferArray[6];
            firestoreDataBuffer.SI_1_DI.DI_7 = bufferArray[7];
            firestoreDataBuffer.SI_1_DI.DI_8 = bufferArray[8];
            break;
        case 2:
            //console.log("SI1 DO");
            //console.log(bufferArray);
            firestoreDataBuffer.SI_1_DO.DO_1 = bufferArray[1];
            firestoreDataBuffer.SI_1_DO.DO_2 = bufferArray[2];
            firestoreDataBuffer.SI_1_DO.DO_3 = bufferArray[3];
            firestoreDataBuffer.SI_1_DO.DO_4 = bufferArray[4];
            firestoreDataBuffer.SI_1_DO.DO_5 = bufferArray[5];
            firestoreDataBuffer.SI_1_DO.DO_6 = bufferArray[6];
            firestoreDataBuffer.SI_1_DO.DO_7 = bufferArray[7];
            firestoreDataBuffer.SI_1_DO.DO_8 = bufferArray[8];
            break;
        case 3:
            //console.log("SI1 AI");
            //console.log(bufferArray);
            firestoreDataBuffer.SI_1_AI.AI_1 = bufferArray[1]/10;
            firestoreDataBuffer.SI_1_AI.AI_2 = bufferArray[2]/10;
            firestoreDataBuffer.SI_1_AI.AI_3 = bufferArray[3]/10;
            firestoreDataBuffer.SI_1_AI.AI_4 = bufferArray[4]/10;
            firestoreDataBuffer.SI_1_AI.AI_5 = bufferArray[5]/10;
            firestoreDataBuffer.SI_1_AI.AI_6 = bufferArray[6]/10;
            firestoreDataBuffer.SI_1_AI.AI_7 = bufferArray[7]/10;
            firestoreDataBuffer.SI_1_AI.AI_8 = bufferArray[8]/10;
            //console.log(firestoreDataBuffer.SI_1_AI);
            break;
        case 4:
            //console.log("SI1 AO");
            //console.log(bufferArray);
            firestoreDataBuffer.SI_1_AO.AO_1 = bufferArray[1]/10;
            firestoreDataBuffer.SI_1_AO.AO_2 = bufferArray[2]/10;
            firestoreDataBuffer.SI_1_AO.AO_3 = bufferArray[3]/10;
            firestoreDataBuffer.SI_1_AO.AO_4 = bufferArray[4]/10;
            firestoreDataBuffer.SI_1_AO.AO_5 = bufferArray[5]/10;
            firestoreDataBuffer.SI_1_AO.AO_6 = bufferArray[6]/10;
            firestoreDataBuffer.SI_1_AO.AO_7 = bufferArray[7]/10;
            firestoreDataBuffer.SI_1_AO.AO_8 = bufferArray[8]/10;
            break;
        case 5:
            firestoreDataBuffer.SI_2_DI.DI_1 = bufferArray[1];
            firestoreDataBuffer.SI_2_DI.DI_2 = bufferArray[2];
            firestoreDataBuffer.SI_2_DI.DI_3 = bufferArray[3];
            firestoreDataBuffer.SI_2_DI.DI_4 = bufferArray[4];
            firestoreDataBuffer.SI_2_DI.DI_5 = bufferArray[5];
            firestoreDataBuffer.SI_2_DI.DI_6 = bufferArray[6];
            firestoreDataBuffer.SI_2_DI.DI_7 = bufferArray[7];
            firestoreDataBuffer.SI_2_DI.DI_8 = bufferArray[8];
            break;
        case 6:
            firestoreDataBuffer.SI_2_DO.DO_1 = bufferArray[1];
            firestoreDataBuffer.SI_2_DO.DO_2 = bufferArray[2];
            firestoreDataBuffer.SI_2_DO.DO_3 = bufferArray[3];
            firestoreDataBuffer.SI_2_DO.DO_4 = bufferArray[4];
            firestoreDataBuffer.SI_2_DO.DO_5 = bufferArray[5];
            firestoreDataBuffer.SI_2_DO.DO_6 = bufferArray[6];
            firestoreDataBuffer.SI_2_DO.DO_7 = bufferArray[7];
            firestoreDataBuffer.SI_2_DO.DO_8 = bufferArray[8];
            break;
        case 7:
            firestoreDataBuffer.SI_2_AI.AI_1 = bufferArray[1]/10;
            firestoreDataBuffer.SI_2_AI.AI_2 = bufferArray[2]/10;
            firestoreDataBuffer.SI_2_AI.AI_3 = bufferArray[3]/10;
            firestoreDataBuffer.SI_2_AI.AI_4 = bufferArray[4]/10;
            firestoreDataBuffer.SI_2_AI.AI_5 = bufferArray[5]/10;
            firestoreDataBuffer.SI_2_AI.AI_6 = bufferArray[6]/10;
            firestoreDataBuffer.SI_2_AI.AI_7 = bufferArray[7]/10;
            firestoreDataBuffer.SI_2_AI.AI_8 = bufferArray[8]/10;
            break;
        case 8:
            firestoreDataBuffer.SI_2_AO.AO_1 = bufferArray[1]/10;
            firestoreDataBuffer.SI_2_AO.AO_2 = bufferArray[2]/10;
            firestoreDataBuffer.SI_2_AO.AO_3 = bufferArray[3]/10;
            firestoreDataBuffer.SI_2_AO.AO_4 = bufferArray[4]/10;
            firestoreDataBuffer.SI_2_AO.AO_5 = bufferArray[5]/10;
            firestoreDataBuffer.SI_2_AO.AO_6 = bufferArray[6]/10;
            firestoreDataBuffer.SI_2_AO.AO_7 = bufferArray[7]/10;
            firestoreDataBuffer.SI_2_AO.AO_8 = bufferArray[8]/10;
            //console.log(firestoreDataBuffer);
            break;
        default:
            break;
    }
});


// Get a reference to the database service
var firestore = admin.firestore();

var firestoreDataBuffer = {
    SI_1_DI:{
        DI_1:0,
        DI_2:0,
        DI_3:0,
        DI_4:0,
        DI_5:0,
        DI_6:0,
        DI_7:0,
        DI_8:0
    },
    SI_1_DO:{
        DO_1:0,
        DO_2:0,
        DO_3:0,
        DO_4:0,
        DO_5:0,
        DO_6:0,
        DO_7:0,
        DO_8:0
    },
    SI_1_AI:{
        AI_1:0,
        AI_2:0,
        AI_3:0,
        AI_4:0,
        AI_5:0,
        AI_6:0,
        AI_7:0,
        AI_8:0
    },
    SI_1_AO:{
        AO_1:0,
        AO_2:0,
        AO_3:0,
        AO_4:0,
        AO_5:0,
        AO_6:0,
        AO_7:0,
        AO_8:0
    },
    SI_2_DI:{
        DI_1:0,
        DI_2:0,
        DI_3:0,
        DI_4:0,
        DI_5:0,
        DI_6:0,
        DI_7:0,
        DI_8:0
    },
    SI_2_DO:{
        DO_1:0,
        DO_2:0,
        DO_3:0,
        DO_4:0,
        DO_5:0,
        DO_6:0,
        DO_7:0,
        DO_8:0
    },
    SI_2_AI:{
        AI_1:0,
        AI_2:0,
        AI_3:0,
        AI_4:0,
        AI_5:0,
        AI_6:0,
        AI_7:0,
        AI_8:0
    },
    SI_2_AO:{
        AO_1:0,
        AO_2:0,
        AO_3:0,
        AO_4:0,
        AO_5:0,
        AO_6:0,
        AO_7:0,
        AO_8:0
    }
}

/************************ Deklarasi fungsi/event ***************************/
function getRndFloat(min, max, decnumber) {
    return parseFloat(((Math.random() * (max - min + 1)) + min).toFixed(decnumber));
}

function GenerateRandom(currentbuffer) {
    for (var i = 0; i < 256; i++) {
        currentbuffer.data[i] = getRndInteger(800, 1500);
    }
    currentbuffer.timestamp = String(moment().format('hh:mm:ss'));

    return currentbuffer;
}

/*
firestore.collection('Baterai-Monitoring-V0').doc('Current').get()
    .then((doc) => {
        console.log(doc.data());
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
*/

function storeBuffer(currentBuff, Buff, Timestamp) {    
    if ((Buff.length) > dataLimit) {
        Buff.shift();
        Buff[dataLimit] = currentBuff;
        Timestamp.shift();
        Timestamp[dataLimit] = String(moment().format('DD MMMM YYYY HH:mm:ss [UTC] Z'));
    }
    else {
        Buff[Buff.length] = currentBuff;
        Timestamp[Timestamp.length] = String(moment().format('DD MMMM YYYY HH:mm:ss [UTC] Z'));
    }
    return [Buff, Timestamp];
}

function MainLoop() {
    // -------------------------------------------- MULAI EDIT DI SINI

    firestore.collection('Signal_Injector').doc('SI_1_DI').set(firestoreDataBuffer.SI_1_DI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_1_DO').set(firestoreDataBuffer.SI_1_DO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_1_AI').set(firestoreDataBuffer.SI_1_AI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_1_AO').set(firestoreDataBuffer.SI_1_AO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_2_DI').set(firestoreDataBuffer.SI_2_DI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_2_DO').set(firestoreDataBuffer.SI_2_DO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_2_AI').set(firestoreDataBuffer.SI_2_AI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    firestore.collection('Signal_Injector').doc('SI_2_AO').set(firestoreDataBuffer.SI_2_AO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    
}

setInterval(MainLoop, 1000);