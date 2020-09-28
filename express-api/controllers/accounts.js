const { body, validationResult } = require('express-validator/check');
const fs = require('fs');

const savingResultsInTextFile = (line) => {
    let path = 'result-requests.txt';
    // let buffer = new Buffer('RUT: XXX | Renta: XXX | Celular: XXX | E-mail: XXX\n');
    let buffer = new Buffer(line + '\n');

    // open the file in writing mode, adding a callback function where we do the actual writing
    fs.open(path, 'a', function(err, fd) {
        if (err) {
            throw 'could not open file: ' + err;
        }

        // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
            if (err) throw 'error writing file: ' + err;
            fs.close(fd, function() {
                console.log('wrote the file successfully');
            });
        });
    });
}

exports.validate = (method) => {
    switch (method) {
        case 'requestAccount': {
            return [ 
                body("rut", "RUT no existe").exists(),
                body("phone", "Celular no existe").exists(),
                body("email", "Correo electrónico no existe").exists(),
                body("rent", "Renta no existe").exists()
            ]   
        }
    }
}

exports.requestAccount = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rut, email, phone, rent } = req.body;

    res.json({message: 'operación exitosa'});

    savingResultsInTextFile(`RUT: ${rut} | Renta: ${rent} | Celular: ${phone} | E-mail: ${email}`);
}