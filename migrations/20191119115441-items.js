'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('products', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: {type: 'string', notNull: true},
    price: {type: 'int', notNull: true},
    description: {type: 'string', notNull: true},
    rating: {type: 'int', notNull: true},
    quantity: {type: 'string', notNull: true},
    category_id: {type: 'string'},
    
  });
  db.createTable('categories', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: {type: 'string', notNull: true},
    description: {type: 'string', notNull: true},
    category_id: {type: 'string'},
    
  });
  db.createTable('user', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    first_name: {type: 'string', notNull: true},
    last_name: {type: 'string', notNull: true},
    phone_number: {type: 'string', notNull: true}, 
  });
  db.createTable('Address', {
    country: {type: 'string', notNull: true},
    state: {type: 'string', notNull: true},
    region: {type: 'string', notNull: true},
    street: {type: 'int', notNull: true},
    street_number: {type: 'int', notNull: true},
    zip_code: {type: 'int', notNull: true},
  });
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
