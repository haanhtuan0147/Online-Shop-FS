
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//JSON_SEARCH(tags, 'one', 'JavaScript') IS NOT NULL;
 exports.up=(knex)=>{
    return knex.schema
    .createTable("User",function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('Email','CHAR(100)').checkRegex('^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$').notNullable();
        table.specificType('Password','CHAR(100)').checkRegex('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$').notNullable();//ít nhất là 8 kí tự tối thiểu 1 chữ số và 1 chữ cái
        table.string('UserName',255).checkLength('>', 0).notNullable();
        table.specificType('PhoneNumber','CHAR(10)').checkRegex('(84|0[3|5|7|8|9])+([0-9]{8})').notNullable();
        table.specificType('Identitycard','CHAR(12)').checkRegex('[0-9]{12}').notNullable();
        table.string('Address',255).checkLength('>', 0).notNullable();
        table.text('Avatar').notNullable().defaultTo("1653388616406-306847562-ei.png");
        table.specificType('AccountRights','CHAR(10)').checkIn(['Root','Admin','User']).notNullable();
        table.integer('isDelete').checkIn([0,1]).notNullable().defaultTo(0);
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
    })
    .alterTable("User",function(table){
        table.unique("Email")
    })
    .createTable('ToKen', function (table) {
       table.specificType('id','CHAR(100)').notNullable().primary();
       table.specificType('userId','CHAR(100)').notNullable();
       table.text('Token').notNullable();
       table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
       table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
       table.check('??>=??',['updatedDate','createdDate']);
       table.foreign("userId").references("Id").inTable("User");
    })
    .createTable('Register_Token', function (table) {
       table.specificType('id','CHAR(100)').notNullable().primary();
       table.specificType('Email','CHAR(100)').checkRegex('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$').notNullable();
       table.integer('numberCheck').notNullable();
       table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
       table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
       table.check('??>=??',['updatedDate','createdDate']);
    })
    .createTable('Field',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.string('FieldName',255).checkLength('>', 0).notNullable();
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
    })
    .createTable('Product_Category',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.string('CategoryName',255).checkLength('>', 0).notNullable();
        table.specificType('fieldId','CHAR(100)').notNullable();
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.foreign('fieldId').references('id').inTable('Field');
    })
    /*.createTable('Currencyunit',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.string('CurrencyName',255).notNullable();
        table.specificType('Symbol','CHAR(10)').notNullable();
        table.integer('Price').notNullable().defaultTo(0);
        table.check('??>=??',['updatedDate','createdDate']);
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
    })*/
    .createTable('Product',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.string('ProductName',255).checkLength('>', 0).notNullable();
        table.text('DescribeProduct').notNullable();
        table.json('Image').notNullable().defaultTo(`["ImageProduct01.png"]`);
        table.integer('Money').notNullable().defaultTo(0)
        table.specificType('Currencyunit','CHAR(10)').notNullable().defaultTo("VND").checkIn(["VND"]);
        table.json("categoryId").notNullable();
        table.json("DetailsProduct").notNullable();
        table.integer('Quantity').notNullable().defaultTo(1000);
        table.integer('isDelete').checkIn([0,1]).notNullable().defaultTo(0);
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.check('??>=??',['Quantity',0])
    })
    .createTable('Shopping_Cart',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('userId','CHAR(100)').notNullable();
        table.specificType('Status','CHAR(100)').checkIn(["Cancel","Wait","Transport","Confirm","Success"]).notNullable();
        table.string('Address',255).checkLength('>', 0).notNullable();
        table.date('IntendTime').notNullable();
        table.date('CompletionTime');
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.foreign("userId").references("Id").inTable("User");
    })
    .createTable('Order_Product',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('shoppingcartId','CHAR(100)').notNullable();
        table.specificType('productId','CHAR(100)').notNullable();
        table.integer('Money').notNullable()
        table.integer('numberProduct').notNullable();
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.check('??>=??',['Money',1000])
        table.check('??>=??',['numberProduct',1])
        table.foreign("productId").references("Id").inTable("Product")
        table.foreign("shoppingcartId").references("Id").inTable("Shopping_Cart")
    })
    .createTable('Product_Reviews',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('userId','CHAR(100)').notNullable();
        table.specificType('productId','CHAR(100)').notNullable();
        table.integer('NumberStar').checkBetween([1,10]).notNullable();
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.foreign("productId").references("Id").inTable("Product");
        table.foreign("userId").references("Id").inTable("User")

    })
    .createTable('Image_Reviews',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('productReviewsId','CHAR(100)').notNullable();
        table.json('Image').notNullable();
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.check('??>=??',['updatedDate','createdDate']);
        table.foreign("productReviewsId").references("Id").inTable("Product_Reviews");

    })
    /*.createTable('ProductComment',function(table){
        table.specificType('id','CHAR(100)').notNullable().primary();
        table.specificType('userId','CHAR(100)').notNullable();
        table.specificType('IdProduct','CHAR(100)').notNullable();
        table.text('Comment').notNullable();
    table.check('??>=??',['updatedDate','createdDate']);
        table.timestamp('createdDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP '));
        table.timestamp('updatedDate',{ useTz: true, precision: 2 }).defaultTo(knex.raw('CURRENT_TIMESTAMP ON UpDate CURRENT_TIMESTAMP'));
        table.foreign("IdProduct").references("Id").inTable("Product");
        table.foreign("userId").references("Id").inTable("User")
    })*/
    };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.down=(knex)=>{
      return knex.schema
      .dropTable("Image_Reviews")
      .dropTable("Product_Reviews")
      .dropTable("Order_Product")
      .dropTable("Shopping_Cart")
      .dropTable("Product")
      .dropTable("Product_category")
      .dropTable("Field")
      .dropTable("Register_Token")
      .dropTable("ToKen")
      .dropTable("User")
    };