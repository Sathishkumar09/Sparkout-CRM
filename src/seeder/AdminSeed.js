import { Admin } from '../schemas/AdminSchema'

//admin details statically inserted
export const storeAdminDetail = () => {
    const adminData = {
        admin_name: "Admin",
        email: "admin@gmail.com",
        password: "12345678",
        token: 'dfd8ufejh8bh8idsfsdiduf',
        profile_picture: "admin.png"
    }
    /* whenever you run index file,for all the times it will create a record for admin so to avoid 
    this conflict we are using this function*/
    Admin.findOne({ email: 'admin@gmail.com' }).exec((error, result) => {
        if (!result) {
            const admin = new Admin(adminData);
            admin.save();
        }
    })
}