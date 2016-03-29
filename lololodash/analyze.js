'use strict';

var _ = require('lodash');

var worker = function(incomes) {
    var totalIncome = 0;
    
    _.forEach(incomes, function(income){
        totalIncome += income.income;
    });
    
    var avgIncome = totalIncome / incomes.length; 
    return {
        average: avgIncome,
        underperform: _.sortBy(_.filter(incomes, function(income){
            return income.income <= avgIncome;
        }),'income'),
        overperform: _.sortBy(_.filter(incomes, function(income){
            return income.income > avgIncome;
        }),'income')
    }; 
};

module.exports = worker;