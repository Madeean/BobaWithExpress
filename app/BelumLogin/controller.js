const Facility = require('../Facility/model')
module.exports={
    index: async(req,res)=>{
        try {
            const facility = await Facility.find()
            console.log(facility);
            res.render('index',{
                session:req.session.user,
                facility
            })
        } catch (err) {
            console.log(err);
        }
    }
}