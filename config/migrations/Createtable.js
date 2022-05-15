
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//JSON_SEARCH(tags, 'one', 'JavaScript') IS NOT NULL;
 exports.up=(knex)=>{
    return knex.schema
    .createTable("User",function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.specificType('Email','CHAR(100)').checkRegex('/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g').notNullable();
        table.specificType('Password','CHAR(100)').checkRegex('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$').notNullable();//ít nhất là 8 kí tự tối thiểu 1 chữ số và 1 chữ cái
        table.string('UserName',255).notNullable();
        table.specificType('PhoneNumber','CHAR(10)').checkRegex('/(84|0[3|5|7|8|9])+([0-9]{8})\b/g').notNullable();
        table.specificType('Identitycard','CHAR(12)').checkRegex('/[0-9]{12}/g').notNullable();
        table.string('Address',255).notNullable();
        table.text('Avatar').notNullable().defaultTo("User.png");
        table.specificType('AccountRights','CHAR(10)').checkIn(['Root','Admin','User']).notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('ToKen', function (table) {
       table.specificType('Id','CHAR(100)').notNullable().primary();
       table.specificType('IdUser','CHAR(100)').notNullable();
       table.text('Token').notNullable();
       table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
       table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
       table.foreign("IdUser").references("Id").inTable("User");
    })
    .createTable('Gmail', function (table) {
       table.specificType('Id','CHAR(100)').notNullable().primary();
       table.specificType('Email','CHAR(100)').checkRegex('/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g').notNullable();
       table.integer('NumberCheck').notNullable();
       table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
       table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('Bigproductcategory',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.string('CategoryName',255).notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('Productcategory',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.string('CategoryName',255).notNullable();
        table.json('Image').notNullable();
        table.specificType('IdBigproductcategory','CHAR(100)').notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign('IdBigproductcategory').references('Id').inTable('Bigproductcategory');
    })
    .createTable('Currencyunit',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.string('CurrencyName',255).notNullable();
        table.specificType('Symbol','CHAR(10)').notNullable();
        table.integer('Price').notNullable().defaultTo(0);
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('Product',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.string('ProductName',255).notNullable();
        table.text('DescribeProduct').notNullable();
        table.text('Avatar').notNullable();
        table.specificType('IdCurrencyunit','CHAR(100)').notNullable();
        table.json("IdProductcategory").notNullable();
        table.json("DetailsProduct").notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
    .createTable('Shoppingcart',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.specificType('IdUser','CHAR(100)').notNullable();
        table.specificType('Status','CHAR(100)').checkIn(["Cancel","Wait","Transport","Confirm","Success"]).notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign("IdUser").references("Id").inTable("User")

    })
    .createTable('OrderProduct',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.specificType('IdProduct','CHAR(100)').notNullable();
        table.integer('NumberProduct').notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign("IdProduct").references("Id").inTable("Product")
    })
    .createTable('ProductReviews',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary()
        table.specificType('IdProduct','CHAR(100)').notNullable();
        table.integer('NumberStar').checkBetween([1,10]).notNullable();
        table.integer('NumberView').notNullable().defaultTo(0);
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign("IdProduct").references("Id").inTable("Product")
    })
    .createTable('ImageReviews',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary()
        table.specificType('IdProductReviews','CHAR(100)').notNullable();
        table.json('Image').notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign("IdProductReviews").references("Id").inTable("ProductReviews")
    })
    .createTable('ProductComment',function(table){
        table.specificType('Id','CHAR(100)').notNullable().primary();
        table.specificType('IdProduct','CHAR(100)').notNullable();
        table.text('Comment').notNullable();
        table.timestamp('CreateDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('UpDate',{  precision: 6  }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table.foreign("IdProduct").references("Id").inTable("Product")
    })
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.down=(knex)=>{
      return knex.schema
      .dropTable("ProductComment")
      .dropTable("ImageReviews")
      .dropTable("ProductReviews")
      .dropTable("OrderProduct")
      .dropTable("Shoppingcart")
      .dropTable("Product")
      .dropTable("Currencyunit")
      .dropTable("Productcategory")
      .dropTable("Bigproductcategory")
      .dropTable("Gmail")
      .dropTable("ToKen")
      .dropTable("User")
    };