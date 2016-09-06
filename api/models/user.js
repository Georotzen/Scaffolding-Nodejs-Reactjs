'use strict';

var mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    provider: {
        type: String
    },
    providerId: {
        type: String
    },
    providerData: {}
});

//virtualprop-fullname
userSchema.virtual('fullName')
.get(function() {
    return (this.firstName || '') + ' ' + (this.lastName || '');
})
.set(function(fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

//middleware-password
userSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

//hash-password
userSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

//authenticate
userSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

//config-scheme
userSchema.set('toJSON', {
    getters: true,
    virtuals: true
});
userSchema.plugin(deepPopulate, {});
mongoose.model('user', userSchema);