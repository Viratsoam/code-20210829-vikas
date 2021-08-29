/*
Author: Vikas Soam
Contact: soamvikas000@gmail.com
Developer Note: 
1.) I have make this project as per the my understanding, so that anyone can use it on their local system, without any
extra configuration.
2.) We can use MongoDB as well, But i don't suggest to store huge amount of data with mongoDB.
3.) We should use S3-Bucket to store this type of data to analayzed json data.
4.) We can convert it as an API as well, by using express, but for now i'm not using any framework.
5.) Any suggestions will be highly appreciated.
*/
const bmiMethods = require("./BMI-Controller/CalculateBmi");
const streamArray = require("stream-json/streamers/StreamArray");
const batch = require("stream-json/utils/Batch");
const { chain } = require("stream-chain");
const fs = require("fs");

// response after done all the process
let response = {
  overWeightPeople: 0,
  overWeightPeoples: [],
	bMIResult: []
};
// making a chain, and set the batchsize, as per my opinion suggested batch size should be in range 1000-2000, when we work with the api so it helps us in pagination as well and also browser work smoothly. 
const pipeline = chain([
  fs.createReadStream("./BMI-Model/DummyData.json"),
  streamArray.withParser(),
  new batch({ batchSize: 2000 }),
]);

// work with the json data, when making a data pipeline
pipeline.on("data", (data) => {
  console.log("Batch size:", data.length);
  const result = bmiMethods.calculateBmi(data);
  response.overWeightPeople = response.overWeightPeople + result.overWeightPeople;
	// For overWeightPeoples 
  for (let index = 0; index < result.overWeightPeoples.length; index++) {
      response.overWeightPeoples.push(result.overWeightPeoples[index]);
  }
	// Bmi Result For Every Person, more clear data
	for (let index = 0; index < result.bMIResult.length; index++) {
      response.bMIResult.push(result.bMIResult[index]);
  }
});

// end the pipeline process
pipeline.on("end",()=>{
let writeStream = fs.createWriteStream("./BMI-Model/responseJsonData.json");
writeStream.write(JSON.stringify(response));
writeStream.end();
})




