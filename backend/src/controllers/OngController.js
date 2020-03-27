const connection    =   require('../database/connection')
const crypto        =   require('crypto')

module.exports = {

    async listOngs(req, res){

        const ongs = await connection('ongs').select('*')
    
        return res.json(ongs)
    },

    async createOng(req, res) {
        const {name, email, whatsapp, city, uf} = req.body
        const id = crypto.randomBytes(4).toString('HEX')
        
        console.log(req.body)
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf, 
        }).then(function(){
            return res.json({id})
          })
    }
}