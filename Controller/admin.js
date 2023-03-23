const AdminService = require('../Services/Admin');

const createAdmin =  (req, res) => {
    const newAdmin =  AdminService.createAdmin(req.body.firstName,req.body.lastName,req.body.email,req.body.password,req.body.privileges);
    return newAdmin;
};

const createAdmin1Privilage = (req,res)=>{
  const newAdmin =  AdminService.createAdmin(req.body.firstName,req.body.lastName,req.body.email,req.body.password,1);
  return newAdmin;
};

const getAdmins =  () => { 
    const Admins =  AdminService.getAdmins({});
    return Admins;
};


function getAdminsByFilter(filter){
    const Admins = AdminService.getAdmins(filter);
    return Admins;
}

const getAdminById = (req, res) => { 
    var Admin =  AdminService.getAdminById(req.params.id);

    if(!Admin){
     Admin = null;
    }

    return Admin;
};

//Update the Admin according to the change attribute with Proxy Design Pattern


const updateAll =  (req,res) =>{


  if(req.body.firstName && req.body.lastName)
       updateAdminName(req,res);
  if(req.body.mail)
       updateAdminMail(req,res);
  if(req.body.password)
       updateAdminPassword(req,res);
  if(req.body.privileges)
       updateAdminPrivileges(req,res);
  
}

const updateAdminName = async (req, res) => { 

    AdminService.updateAdminName(req.params.id,req.body.firstName,req.body.lastName);

};


const updateAdminMail = async (req, res) => { 

    AdminService.updateAdminMail(req.params.id,req.body.mail);
    

};

const updateAdminPassword = async (req, res) => { 

    AdminService.updateAdminPassword(req.params.id,req.body.password);
     

};

const updateAdminPrivileges = async (req, res) => { 
    AdminService.updateAdminPrivileges(req.params.id,req.body.privileges);
};
  



  const getCount = (req,res) => {
    return AdminService.getCount();
  }
  

  const deleteAllAdmins = (req,res)=>{
     AdminService.deleteAll();
  }
  

  const deleteAdmin = (req, res) => {
    const Admin = AdminService.deleteAdmin(req.params.id);
    if (!Admin) {
      return res.status(404).json({ errors: ['Admin not found'] });
    }
  
  };

  const deleteAdminByEmail = (req, res) => {
    const Admin = AdminService.deleteAdminsByEmail(req.params.email);
    if (!Admin) {
      return res.status(404).json({ errors: ['Admin not found'] });
    }
  
  };

  module.exports = {
    createAdmin,
    getAdmins,
    getAdminById,
    updateAdminName,
    updateAdminMail,
    updateAdminPassword,
    updateAdminPrivileges,
    deleteAdmin,
    getCount,
    deleteAllAdmins,
    updateAll,
    getAdminsByFilter,
    deleteAdminByEmail,
    createAdmin1Privilage
  };