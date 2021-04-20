import { Router } from 'express';
import { deleteUser, getParticularUser, storeUser, updateUser,getAllUsers} from '../../controllers/UserController';
import { userLoginValidator } from '../../validators/UserLoginValidator';
import {adminLogin} from '../../controllers/AdminLoginController';
import { AdminAuthCheck } from '../../MiddleWares/AdminAuthCheck';
import { getAllTeams, getParticularTeam, storeTeam,updateTeam,deleteTeam} from '../../controllers/TeamController';
import { deleteDesignation, getAllDesignation, getParticularDesignation, storeDesignation, updateDesignation } from '../../controllers/DesignationController';
import { userLogin } from '../../controllers/UserLoginController';
import { setPassword, userForgotPassword, verifyOtp } from '../../password/UserForgotPassword';



const v1Routes = Router();

v1Routes.get('/', (req, res) => {
    res.send('API works...')
});
// admin login 
v1Routes.post('/admin-login',adminLogin);
// user login
v1Routes.post('/user-login',[userLoginValidator],userLogin);
//User Routes
v1Routes.post('/user', [AdminAuthCheck],storeUser);
v1Routes.get('/users', getAllUsers);
v1Routes.get('/user/:id',getParticularUser);
v1Routes.put('/user/:id',updateUser);
v1Routes.delete('/user/:id',deleteUser);
//Team routes
v1Routes.post('/team',storeTeam);
v1Routes.get('/teams',getAllTeams);
v1Routes.get('/team/:id',getParticularTeam);
v1Routes.put('/team/:id',updateTeam);
v1Routes.delete('/team/:id',deleteTeam);
//designation routes
v1Routes.post('/designation',storeDesignation);
v1Routes.get('/designations',getAllDesignation);
v1Routes.get('/designation/:id',getParticularDesignation);
v1Routes.put('/designation/:id',updateDesignation);
v1Routes.delete('/designation/:id',deleteDesignation);
//userforgot password
v1Routes.get('/user-forgot-password/:email',userForgotPassword);
//verify otp
v1Routes.put('/verify-otp/:id',verifyOtp);
//set password link 
v1Routes.put('/reset-password/:id',setPassword);

module.exports = v1Routes;