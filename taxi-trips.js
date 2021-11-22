module.exports = function (pool) {

    
async function totalTripCount(){
    let count =  await pool.query('SELECT COUNT(*) FROM trip');
    return count;
    
}

async function findAllRegions(){
//find all the regions
let region = await pool.query('SELECT * FROM region');
region = region.rows;
let regions =region.map(function (obj) {
    return  obj.name;
  });

return regions;
}


async function findTaxisForRegion(region){
//find all the taxis for a given region - use region name as look up

let regID = await pool.query('SELECT id FROM region WHERE name = $1',[region]);
regID = regID.rows[0].id;
let find = await pool.query('SELECT * FROM trip WHERE reg_id = $1',[regID]);
find = find.rows;
let found;
for (const i of find){
    found = await pool.query('SELECT * FROM taxi WHERE id=$1',[i]) ;
    return found.rows;
}
console.log(find);


}

async function findTripsByRegNumber(){
//Find all the trips made by a given taxi - use reg number as look up
}

async function findTripsByRegion(){
//Find all the trips made for a given region - use the region name as lookup
}

async function findIncomeByRegNumber(){
    //List the income for each taxi - use reg number in this query

}

async function findTotalIncomePerTaxi(){
//find the total income per taxi
}

async function findTotalIncome(){
//Find the total amount received in income for all the taxis
}

async function findTotalIncomeByRegion(){
//Find the total amount received for all the regions
}

return{
    totalTripCount,
    findAllRegions,
    findTaxisForRegion,
    findTripsByRegNumber,
    findTripsByRegion,
    findIncomeByRegNumber,
    findTotalIncomePerTaxi,
    findTotalIncome,
    findTotalIncomeByRegion

}
	
}