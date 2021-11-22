module.exports = function (pool) {

    // -- insert into taxi(reg_number) values ('CA-123-678');
    // -- insert into taxi(reg_number) values ('CY-172872');
    // -- insert into taxi(reg_number) values ('NZZ-185-GP');
    // -- insert into taxi(reg_number) values ('RMH-486-GP');
    // -- insert into taxi(reg_number) values ('FX-92-BJ-GP');
    // -- insert into taxi(reg_number) values ('NP 40351');
    // -- insert into taxi(reg_number) values ('NU 102-478');
    // -- insert into taxi(reg_number) values ('KM-786-ZN');
async function totalTripCount(){
    //return the total number of trips made
    
}

async function findAllRegions(){
//find all the regions
let region = await pool.query('SELECT * FROM region');
region = region.rows;
console.log(region)
return region;
}

async function findTaxisForRegion(){
//find all the taxis for a given region - use region name as look up
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