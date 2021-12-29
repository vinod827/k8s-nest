const AWS = require("aws-sdk");

//All Cold Start Code of Lambda goes here
const dynamodb = new AWS.DynamoDB.DocumentClient();
const ddbTable = process.env.RUNTIME_DDB_TABLE_NAME;

//All Warm Start Code of Lambda goes withing LambdaHandler
exports.lambdaHandler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
      'Content-Type': 'application/json',     
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    };

    try {
        // Adding random data to DynamoDB table - Adding static data just for this Sample App otherwise data will be populated based on parsing the Request
        await dynamodb
          .put({
            TableName: ddbTable,
            Item: {
              'id': 'E1001',             
              'name': 'Vinod Kumar',
              'company': 'My Company',
              'email': 'vinod827@yahoo.com'
            }
          })
          .promise();

        // Retrieving data from DynamoDB table - Just from demo purpose only otherwise data will be fetched based on given employee id sent dynamically through headers
        body = await dynamodb.get({ TableName: ddbTable, Key: { id: 'E1001' }}).promise(); // To retrive 1 item
       
    } catch (err) {
        console.log(err);
        statusCode = 400;
        body = err.message;
        return err;

    } finally {
        body = JSON.stringify(body);
    
    }

    //return response
    return {
        statusCode,
        body,
        headers
    };

};