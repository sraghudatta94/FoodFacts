var readline  =require('readline');
var fs =require('fs');
var fooddetailsJSON1 =[];
var regiondetailsJSON=[];
var myarray=[];
var country=["Netherlands","Canada","UK/USA","Austrailia","France","Germany","Spain","South Africa"];
var region=["North Europe","Central Europe","South Europe"];

var sugar=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
var salt=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
var fat=[0.0,0.0,0.0];
var protein=[0.0,0.0,0.0];
var carbohydrate=[0.0,0.0,0.0];
var lineReader = readline.createInterface({
  input: fs.createReadStream('../../FoodFacts.csv')
});

lineReader.on('line', function (line) {
myarray=line.split(new RegExp(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
if(myarray[33].includes("Netherlands")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[0]=sugar[0]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[0]=salt[0]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[0]+" Salt is "+salt[0]);

}
if(myarray[33].includes("Canada")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[1]=sugar[1]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[1]=salt[1]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[1]+" Salt is "+salt[1]);

}
if((myarray[33].includes("United States"))||(myarray[33].includes("United Kingdom"))){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[2]=sugar[2]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[2]=salt[2]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[2]+" Salt is "+salt[2]);

}
if(myarray[33].includes("Australia")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[3]=sugar[3]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[3]=salt[3]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[3]+" Salt is "+salt[3]);

}
if(myarray[33].includes("France")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[4]=sugar[4]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[4]=salt[4]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[4]+" Salt is "+salt[4]);

}
if(myarray[33].includes("Germany")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[5]=sugar[5]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[5]=salt[5]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[5]+" Salt is "+salt[5]);

}
if(myarray[33].includes("Spain")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[6]=sugar[6]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[6]=salt[6]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[6]+" Salt is "+salt[6]);

}
if(myarray[33].includes("South Africa")){
	var tempSugar=parseFloat(myarray[102]);
	var tempSalt=parseFloat(myarray[116]);

	if(isNaN(tempSugar)){
}
else{

	sugar[7]=sugar[7]+tempSugar;
}
if(isNaN(tempSalt)){
}
else{

	salt[7]=salt[7]+tempSalt;
}
  //console.log("Country is "+myarray[33]+" Sugar is "+sugar[7]+" Salt is "+salt[7]);

}
if((myarray[33].includes("United Kingdom"))||(myarray[33].includes("Denmark"))||(myarray[33].includes("Sweden"))||(myarray[33].includes("Norway"))){

	var tempFat=parseFloat(myarray[65]);
	var tempProtein=parseFloat(myarray[112]);
	var tempCarbohydrate=parseFloat(myarray[101]);
	if(isNaN(tempFat)){

	}
	else{
		fat[0]=fat[0]+tempFat;
	}
	if(isNaN(tempProtein)){

	}
	else{
		protein[0]=protein[0]+tempProtein;
	}
	if(isNaN(tempCarbohydrate)){

	}
	else{
		carbohydrate[0]=carbohydrate[0]+tempCarbohydrate;
	}
}
if((myarray[33].includes("France"))||(myarray[33].includes("Belgium"))||(myarray[33].includes("Germany"))||(myarray[33].includes("Switzerland"))||(myarray[33].includes("Netherlands"))){

	var tempFat=parseFloat(myarray[65]);
	var tempProtein=parseFloat(myarray[112]);
	var tempCarbohydrate=parseFloat(myarray[101]);
	if(isNaN(tempFat)){

	}
	else{
		fat[1]=fat[1]+tempFat;
	}
	if(isNaN(tempProtein)){

	}
	else{
		protein[1]=protein[1]+tempProtein;
	}
	if(isNaN(tempCarbohydrate)){

	}
	else{
		carbohydrate[1]=carbohydrate[1]+tempCarbohydrate;
	}

}
if((myarray[33].includes("Portugal"))||(myarray[33].includes("Greece"))||(myarray[33].includes("Italy"))||(myarray[33].includes("Spain"))||(myarray[33].includes("Croatia"))||(myarray[33].includes("Albania")))
{

	var tempFat=parseFloat(myarray[65]);
	var tempProtein=parseFloat(myarray[112]);
	var tempCarbohydrate=parseFloat(myarray[101]);
	if(isNaN(tempFat)){

	}
	else{
		fat[2]=fat[2]+tempFat;
	}
	if(isNaN(tempProtein)){

	}
	else{
		protein[2]=protein[2]+tempProtein;
	}
	if(isNaN(tempCarbohydrate)){

	}
	else{
		carbohydrate[2]=carbohydrate[2]+tempCarbohydrate;
	}
	console.log(fat[2]+protein[2]+carbohydrate[2]);
}
  //console.log(myarray[33]);
});


lineReader.on('close',function(){

	for(let i=0;i<8;i++){

		let tempobj={};
		tempobj.country= country[i];
		tempobj.sugar=sugar[i];
		tempobj.salt=salt[i];
		fooddetailsJSON1.push(tempobj);
}
for(let i=0;i<3;i++){

	let tempobj2={};
	tempobj2.region=region[i];
	tempobj2.fat=fat[i];
	tempobj2.protein=protein[i];
	tempobj2.carbohydrate=carbohydrate[i];
	regiondetailsJSON.push(tempobj2);
}

//myJsonobj1=JSON.parse(fooddetailsJSON1);
createMyJsonObj1();
createMyJsonObj2();
});
function createMyJsonObj1(){
var myJsonobj1;//=JSON.parse(fooddetailsJSON1);
fs.writeFile('json1.json',JSON.stringify(fooddetailsJSON1), function (err) {
        if (err) throw err;
        console.log('Json 1 file created.........');
    });

}
function createMyJsonObj2(){
var myJsonobj2;//=JSON.parse(fooddetailsJSON1);
fs.writeFile('data.json',JSON.stringify(regiondetailsJSON), function (err) {
        if (err) throw err;
        console.log('Json 2 file created.........');
    });

}


