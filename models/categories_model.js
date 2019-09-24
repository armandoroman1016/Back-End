const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById
}

function find(){
    return db('produce_category')
}

function findById(id){
    return db('produce_item as pi')
        .where({'pi.category_id': id})
        .join('farm as f', 'f.id', 'pi.farm_id')
        .select('pi.id', 'pi.name', 'pi.quantity', 'pi.price', 'pi.category_id', 'f.id as farm_id', 'f.name as farm_name')
}
