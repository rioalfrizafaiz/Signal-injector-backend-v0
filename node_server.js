/************************** Import library/fungsi ****************************/
//library terkait Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./service_key.json");

//library untuk (format) timestamp
var moment = require('moment');

//library serial communication
var serialport = require('serialport');

//library mysql
var mysql = require('mysql');

//library "File System" untuk mengakses file lokal
const fs = require('fs');
const saveFolder = './csvLogs/';

/************************ Deklarasi objek/variabel ***************************/
// terkait firestore (cloud firestore di dalam google firebase)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-db-4aa92.firebaseio.com"
});

const dataLimit = 100;

// terkait serial comm
var portName = "COM6";
var myPort = new serialport(portName, {
    baudRate: 115200
});

myPort.on("close", () => {
    //console.log("RECON coz close");
    myPort.resume();
});

myPort.on("error", () => {
    //console.log("RECON coz error");
    myPort.resume();
});

myPort.on("data", (line) => {
    var bufferArray = [];
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
            firestoreDataBuffer.SI_1_AI.AI_1 = bufferArray[1] / 10;
            firestoreDataBuffer.SI_1_AI.AI_2 = bufferArray[2] / 10;
            firestoreDataBuffer.SI_1_AI.AI_3 = bufferArray[3] / 10;
            firestoreDataBuffer.SI_1_AI.AI_4 = bufferArray[4] / 10;
            firestoreDataBuffer.SI_1_AI.AI_5 = bufferArray[5] / 10;
            firestoreDataBuffer.SI_1_AI.AI_6 = bufferArray[6] / 10;
            firestoreDataBuffer.SI_1_AI.AI_7 = bufferArray[7] / 10;
            firestoreDataBuffer.SI_1_AI.AI_8 = bufferArray[8] / 10;
            //console.log(firestoreDataBuffer.SI_1_AI);
            break;
        case 4:
            //console.log("SI1 AO");
            //console.log(bufferArray);
            firestoreDataBuffer.SI_1_AO.AO_1 = bufferArray[1] / 10;
            firestoreDataBuffer.SI_1_AO.AO_2 = bufferArray[2] / 10;
            firestoreDataBuffer.SI_1_AO.AO_3 = bufferArray[3] / 10;
            firestoreDataBuffer.SI_1_AO.AO_4 = bufferArray[4] / 10;
            firestoreDataBuffer.SI_1_AO.AO_5 = bufferArray[5] / 10;
            firestoreDataBuffer.SI_1_AO.AO_6 = bufferArray[6] / 10;
            firestoreDataBuffer.SI_1_AO.AO_7 = bufferArray[7] / 10;
            firestoreDataBuffer.SI_1_AO.AO_8 = bufferArray[8] / 10;
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
            firestoreDataBuffer.SI_2_AI.AI_1 = bufferArray[1] / 10;
            firestoreDataBuffer.SI_2_AI.AI_2 = bufferArray[2] / 10;
            firestoreDataBuffer.SI_2_AI.AI_3 = bufferArray[3] / 10;
            firestoreDataBuffer.SI_2_AI.AI_4 = bufferArray[4] / 10;
            firestoreDataBuffer.SI_2_AI.AI_5 = bufferArray[5] / 10;
            firestoreDataBuffer.SI_2_AI.AI_6 = bufferArray[6] / 10;
            firestoreDataBuffer.SI_2_AI.AI_7 = bufferArray[7] / 10;
            firestoreDataBuffer.SI_2_AI.AI_8 = bufferArray[8] / 10;
            break;
        case 8:
            firestoreDataBuffer.SI_2_AO.AO_1 = bufferArray[1] / 10;
            firestoreDataBuffer.SI_2_AO.AO_2 = bufferArray[2] / 10;
            firestoreDataBuffer.SI_2_AO.AO_3 = bufferArray[3] / 10;
            firestoreDataBuffer.SI_2_AO.AO_4 = bufferArray[4] / 10;
            firestoreDataBuffer.SI_2_AO.AO_5 = bufferArray[5] / 10;
            firestoreDataBuffer.SI_2_AO.AO_6 = bufferArray[6] / 10;
            firestoreDataBuffer.SI_2_AO.AO_7 = bufferArray[7] / 10;
            firestoreDataBuffer.SI_2_AO.AO_8 = bufferArray[8] / 10;
            //console.log(firestoreDataBuffer);
            break;
        default:
            break;
    }
});

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'signal_injector'
});

// Get a reference to the database service
var firestore = admin.firestore();

var firestoreDataBuffer = {
    SI_1_DI: {
        DI_1: 0,
        DI_2: 0,
        DI_3: 0,
        DI_4: 0,
        DI_5: 0,
        DI_6: 0,
        DI_7: 0,
        DI_8: 0
    },
    SI_1_DO: {
        DO_1: 0,
        DO_2: 0,
        DO_3: 0,
        DO_4: 0,
        DO_5: 0,
        DO_6: 0,
        DO_7: 0,
        DO_8: 0
    },
    SI_1_AI: {
        AI_1: 0,
        AI_2: 0,
        AI_3: 0,
        AI_4: 0,
        AI_5: 0,
        AI_6: 0,
        AI_7: 0,
        AI_8: 0
    },
    SI_1_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    },
    SI_2_DI: {
        DI_1: 0,
        DI_2: 0,
        DI_3: 0,
        DI_4: 0,
        DI_5: 0,
        DI_6: 0,
        DI_7: 0,
        DI_8: 0
    },
    SI_2_DO: {
        DO_1: 0,
        DO_2: 0,
        DO_3: 0,
        DO_4: 0,
        DO_5: 0,
        DO_6: 0,
        DO_7: 0,
        DO_8: 0
    },
    SI_2_AI: {
        AI_1: 0,
        AI_2: 0,
        AI_3: 0,
        AI_4: 0,
        AI_5: 0,
        AI_6: 0,
        AI_7: 0,
        AI_8: 0
    },
    SI_2_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    }
}

var firestoreOutputDataBuffer = {
    SI_1_DO: {
        DO_1: 0,
        DO_2: 0,
        DO_3: 0,
        DO_4: 0,
        DO_5: 0,
        DO_6: 0,
        DO_7: 0,
        DO_8: 0
    },
    SI_1_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    },
    SI_2_DO: {
        DO_1: 0,
        DO_2: 0,
        DO_3: 0,
        DO_4: 0,
        DO_5: 0,
        DO_6: 0,
        DO_7: 0,
        DO_8: 0
    },
    SI_2_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    }
}

/************************ Deklarasi fungsi/event ***************************/
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

function SetupFunc() {
    connection.connect();
}

function MainLoop() {
    // -------------------------------------------- DATA INPUT KE FIRESTORE: MULAI EDIT DI SINI

    firestore.collection('Signal_Injector').doc('SI_1_DI').set(firestoreDataBuffer.SI_1_DI)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_1_AI').set(firestoreDataBuffer.SI_1_AI)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_2_DI').set(firestoreDataBuffer.SI_2_DI)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_2_AI').set(firestoreDataBuffer.SI_2_AI)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    // -------------------------------------------- DATA OUTPUT DARI FIRESTORE: MULAI EDIT DI SINI
    firestore.collection('Signal_Injector').doc('SI_1_DO').get()
        .then(function (doc) {
            firestoreOutputDataBuffer.SI_1_DO = doc.data();
            //console.log(firestoreOutputDataBuffer.SI_1_DO)
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_1_AO').get()
        .then(function (doc) {
            firestoreOutputDataBuffer.SI_1_AO = doc.data();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_2_DO').get()
        .then(function (doc) {
            firestoreOutputDataBuffer.SI_2_DO = doc.data();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Signal_Injector').doc('SI_2_AO').get()
        .then(function (doc) {
            firestoreOutputDataBuffer.SI_2_AO = doc.data();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    // -------------------------------------------- DATA OUTPUT DARI FIRESTORE: STOP EDIT DI SINI
    // nama variabelnya firestoreOutputDataBuffer. Bisa diambil key-key nya

    connection.query(
        'INSERT INTO `si_1_di`(`DI_1`,`DI_2`,`DI_3`,`DI_4`,`DI_5`,`DI_6`,`DI_7`,`DI_8`) VALUES('
        + (firestoreDataBuffer.SI_1_DI.DI_1 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_2 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_3 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_4 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_5 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_6 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_7 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_1_DI.DI_8 ? 1 : 0)
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_1_do`(`DO_1`,`DO_2`,`DO_3`,`DO_4`,`DO_5`,`DO_6`,`DO_7`,`DO_8`) VALUES('
        + (firestoreOutputDataBuffer.SI_1_DO.DO_1 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_2 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_3 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_4 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_5 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_6 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_7 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_1_DO.DO_8 ? 1 : 0)
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_1_ai`(`AI_1`,`AI_2`,`AI_3`,`AI_4`,`AI_5`,`AI_6`,`AI_7`,`AI_8`) VALUES('
        + firestoreDataBuffer.SI_1_AI.AI_1 + ','
        + firestoreDataBuffer.SI_1_AI.AI_2 + ','
        + firestoreDataBuffer.SI_1_AI.AI_3 + ','
        + firestoreDataBuffer.SI_1_AI.AI_4 + ','
        + firestoreDataBuffer.SI_1_AI.AI_5 + ','
        + firestoreDataBuffer.SI_1_AI.AI_6 + ','
        + firestoreDataBuffer.SI_1_AI.AI_7 + ','
        + firestoreDataBuffer.SI_1_AI.AI_8
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_1_ao`(`AO_1`,`AO_2`,`AO_3`,`AO_4`,`AO_5`,`AO_6`,`AO_7`,`AO_8`) VALUES('
        + firestoreOutputDataBuffer.SI_1_AO.AO_1 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_2 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_3 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_4 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_5 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_6 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_7 + ','
        + firestoreOutputDataBuffer.SI_1_AO.AO_8
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_2_di`(`DI_1`,`DI_2`,`DI_3`,`DI_4`,`DI_5`,`DI_6`,`DI_7`,`DI_8`) VALUES('
        + (firestoreDataBuffer.SI_2_DI.DI_1 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_2 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_3 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_4 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_5 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_6 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_7 ? 1 : 0) + ','
        + (firestoreDataBuffer.SI_2_DI.DI_8 ? 1 : 0)
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_2_do`(`DO_1`,`DO_2`,`DO_3`,`DO_4`,`DO_5`,`DO_6`,`DO_7`,`DO_8`) VALUES('
        + (firestoreOutputDataBuffer.SI_2_DO.DO_1 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_2 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_3 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_4 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_5 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_6 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_7 ? 1 : 0) + ','
        + (firestoreOutputDataBuffer.SI_2_DO.DO_8 ? 1 : 0)
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_2_ai`(`AI_1`,`AI_2`,`AI_3`,`AI_4`,`AI_5`,`AI_6`,`AI_7`,`AI_8`) VALUES('
        + firestoreDataBuffer.SI_2_AI.AI_1 + ','
        + firestoreDataBuffer.SI_2_AI.AI_2 + ','
        + firestoreDataBuffer.SI_2_AI.AI_3 + ','
        + firestoreDataBuffer.SI_2_AI.AI_4 + ','
        + firestoreDataBuffer.SI_2_AI.AI_5 + ','
        + firestoreDataBuffer.SI_2_AI.AI_6 + ','
        + firestoreDataBuffer.SI_2_AI.AI_7 + ','
        + firestoreDataBuffer.SI_2_AI.AI_8
        + ');',
        function (err) { if (err) throw err }
    );

    connection.query(
        'INSERT INTO `si_2_ao`(`AO_1`,`AO_2`,`AO_3`,`AO_4`,`AO_5`,`AO_6`,`AO_7`,`AO_8`) VALUES('
        + firestoreOutputDataBuffer.SI_2_AO.AO_1 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_2 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_3 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_4 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_5 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_6 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_7 + ','
        + firestoreOutputDataBuffer.SI_2_AO.AO_8
        + ');',
        function (err) { if (err) throw err }
    );

    fs.appendFile(
        (saveFolder + 'SI_1_DI.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreDataBuffer.SI_1_DI.DI_1 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_2 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_3 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_4 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_5 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_6 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_7 ? 1 : 0},${firestoreDataBuffer.SI_1_DI.DI_8 ? 1 : 0}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_1_DO.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreOutputDataBuffer.SI_1_DO.DO_1 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_2 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_3 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_4 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_5 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_6 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_7 ? 1 : 0},${firestoreOutputDataBuffer.SI_1_DO.DO_8 ? 1 : 0}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_1_AI.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreDataBuffer.SI_1_AI.AI_1},${firestoreDataBuffer.SI_1_AI.AI_2},${firestoreDataBuffer.SI_1_AI.AI_3},${firestoreDataBuffer.SI_1_AI.AI_4},${firestoreDataBuffer.SI_1_AI.AI_5},${firestoreDataBuffer.SI_1_AI.AI_6},${firestoreDataBuffer.SI_1_AI.AI_7},${firestoreDataBuffer.SI_1_AI.AI_8}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_1_AO.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreOutputDataBuffer.SI_1_AO.AO_1},${firestoreOutputDataBuffer.SI_1_AO.AO_2},${firestoreOutputDataBuffer.SI_1_AO.AO_3},${firestoreOutputDataBuffer.SI_1_AO.AO_4},${firestoreOutputDataBuffer.SI_1_AO.AO_5},${firestoreOutputDataBuffer.SI_1_AO.AO_6},${firestoreOutputDataBuffer.SI_1_AO.AO_7},${firestoreOutputDataBuffer.SI_1_AO.AO_8}`,
        function (err) { if (err) throw err; }
    );

    fs.appendFile(
        (saveFolder + 'SI_2_DI.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreDataBuffer.SI_2_DI.DI_1 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_2 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_3 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_4 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_5 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_6 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_7 ? 1 : 0},${firestoreDataBuffer.SI_2_DI.DI_8 ? 1 : 0}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_2_DO.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreOutputDataBuffer.SI_2_DO.DO_1 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_2 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_3 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_4 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_5 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_6 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_7 ? 1 : 0},${firestoreOutputDataBuffer.SI_2_DO.DO_8 ? 1 : 0}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_2_AI.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreDataBuffer.SI_2_AI.AI_1},${firestoreDataBuffer.SI_2_AI.AI_2},${firestoreDataBuffer.SI_2_AI.AI_3},${firestoreDataBuffer.SI_2_AI.AI_4},${firestoreDataBuffer.SI_2_AI.AI_5},${firestoreDataBuffer.SI_2_AI.AI_6},${firestoreDataBuffer.SI_2_AI.AI_7},${firestoreDataBuffer.SI_2_AI.AI_8}`,
        function (err) { if (err) throw err; }
    );
    fs.appendFile(
        (saveFolder + 'SI_2_AO.csv'),
        `\n${String(moment().format('YYYY-MM-DD_hh-mm-ss'))},${firestoreOutputDataBuffer.SI_2_AO.AO_1},${firestoreOutputDataBuffer.SI_2_AO.AO_2},${firestoreOutputDataBuffer.SI_2_AO.AO_3},${firestoreOutputDataBuffer.SI_2_AO.AO_4},${firestoreOutputDataBuffer.SI_2_AO.AO_5},${firestoreOutputDataBuffer.SI_2_AO.AO_6},${firestoreOutputDataBuffer.SI_2_AO.AO_7},${firestoreOutputDataBuffer.SI_2_AO.AO_8}`,
        function (err) { if (err) throw err; }
    );
}

/*************************** Main Loop ******************************/
SetupFunc();
setInterval(MainLoop, 1000);
