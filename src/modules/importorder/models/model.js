'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImportorderSchema = new Schema({
    
    consignment_no: {
        type: String
    },
    customerref_no: {
        type: String
    },
    sender_code: {
        type: String
    },
    recipient_code: {
        type: String
    },
    recipient_name: {
        type: String,
        required: 'Please fill a Importorder Recipient Name',
    },
    address: {
        type: String
    },
    postcode: {
        type: String
    },
    mobile: {
        type: String,
        required: 'Please fill a Importorder Mobile',
    },
    contact_person: {
        type: String
    },
    phone_no: {
        type: String,
        required: 'Please fill a Importorder Phone No',
    },
    email: {
        type: String
    },
    declare_value: {
        type: String,
    },
    cod_amount: {
        type: String
    },
    remark: {
        type: String
    },
    total_box: {
        type: String
    },
    sat_del: {
        type: String
    },
    hcr: {
        type: String
    },
    invr: {
        type: String
    },
    service_code: {
        type: String
    },
    mini01: {
        type: String
    },
    mini02: {
        type: String
    },
    mini03: {
        type: String
    },
    mini04: {
        type: String
    },
    mini05: {
        type: String
    },
    mini06: {
        type: String
    },
    mini07: {
        type: String
    },
    mini08: {
        type: String
    },
    mini09: {
        type: String
    },
    mini10: {
        type: String
    },
    mini11: {
        type: String
    },
    mini12: {
        type: String
    },
    large01: {
        type: String
    },
    large02: {
        type: String
    },
    large03: {
        type: String
    },
    large04: {
        type: String
    },
    large05: {
        type: String
    },
    large06: {
        type: String
    },
    large07: {
        type: String
    },
    large08: {
        type: String
    },
    large09: {
        type: String
    },
    large10: {
        type: String
    },
    large11: {
        type: String
    },
    large12: {
        type: String
    },
    pub01: {
        type: String
    },
    pub02: {
        type: String
    },
    pub03: {
        type: String
    },
    pb01: {
        type: String
    },
    pb02: {
        type: String
    },
    pb03: {
        type: String
    },
    soap_pink: {
        type: String
    },
    soap_orange: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Importorder", ImportorderSchema);