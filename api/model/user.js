const db = require("../config") //this imprt the db con from config

class User{
    fetchUsers(req, res){ //to fetch all users
        const query = ` 
        SELECT userID, firstName,lastName,emailAdd, profileUrl
        FROM users
        ` //doing the query  above
        db.query(query, (err, results) =>{
            // to run the query 
            if(err) throw err
            res.json( { //sending a res back to user  
            status:res.statusCode,
            results:results
            })         
        })
    }
    fetchUser(req, res){
        const query =  ` 
        SELECT userID, firstName,lastName, gender, userDOB,emailAdd, profileUrl
        FROM users
        WHERE userID =?;
        `
        db.query(query, (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    login(req, res){

    }
    register(req, res){

    }
    updateUser(req, res){
        const query = `
        UPDATE FROM users
        SET ? 
        WHERE userID = ?
        `
        db.query(query,
            [req.body, res.params.id],
            (err) => {
                if(err) throw err
                res.json({
                status: res.statusCode,
                msg: "THE USER RECORD WAS UPDATED"
                })
            }
        )
            
    }
    deleteUser(req, res){
        const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err) =>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}

module.exports = {User} 