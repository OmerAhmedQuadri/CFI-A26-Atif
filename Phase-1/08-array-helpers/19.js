const roles=['admin','customer','manager']

const userRole1='editor'
const userRole2='manager'
if(roles.includes(userRole2)){
    console.log('Access Granted!');
}else{
    console.log('Failed to auth');
}