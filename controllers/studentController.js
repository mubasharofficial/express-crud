import StudentModel from "../models/Student.js";
class StudentController {
    static createDoc = async(req,res)=>{
        // console.log(req.body);
        try{
                const {name, age, fee} = req.body;
                const doc = new StudentModel({
                    name:name,
                    age:age,
                    fess:fee
                });
                const result = await doc.save();
                console.log("New Created Document",result);
                res.redirect("/student");
        }
        catch(error){
            console.log("Could Not Create New Document",error)
        }
       
    }

    static getAllDoc = async(req,res) =>{
        try{
            const all_student = await StudentModel.find();
            res.render("index",{data:all_student});
        }
        catch(err)
        {
            console.log("could not get documents due to:",err);
        }
    }

    static editDoc = async(req,res) =>{

        try{
            // console.log(req.params.id)
            const student_id = req.params.id;
            const result = await StudentModel.findById(student_id);
            // console.log(result)
            res.render("edit",{data:result}); 
        }
        catch(error){
            console.log("Could Not fetch Record Due to :",error)
        }

    }

    static updateDocById = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const student_id = req.params.id;
            const {name,age,fee} = req.body
            const result = await StudentModel.findByIdAndUpdate(student_id,{name:name,age:age,fess:fee});
            // console.log(result)
        res.redirect("/student");
        }
        catch(error){
                console.log("Could Not Update Due to :",error)
        }
    }
    static DeleteDocById = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const student_id = req.params.id;
            const result = await StudentModel.findByIdAndDelete(student_id);
            // console.log(result)
            res.redirect("/student");
        }
        catch(error){
            console.log("Could Not fetch Record Due to :",error)
        }
        
    }
}
export default StudentController;