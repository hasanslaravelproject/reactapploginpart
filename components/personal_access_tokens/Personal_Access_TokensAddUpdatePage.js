import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import { Switch } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PageTemplate from "../templates/Template";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import history from '../../history';
import { Loading } from "../templates/Loading";
import {addPersonal_Access_Tokens, getPersonal_Access_Tokens,getOnePersonal_Access_Tokens, updatePersonal_Access_Tokens} from "../../repo/personal_access_tokensRepo";





function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Personal_Access_TokensAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [personal_access_tokens,setPersonal_Access_Tokens] = useState(undefined);
    const [loading, setLoading] = useState(false);
    

    const checkErrors = () => {
        let errorList = {}
        if(personal_access_tokens.tokenable_type === "" || personal_access_tokens.tokenable_type === undefined)
{
   errorList = { ...errorList,tokenable_type: "Required field!"}
}
if(personal_access_tokens.tokenable_id === "" || personal_access_tokens.tokenable_id === undefined)
{
   errorList = { ...errorList,tokenable_id: "Required field!"}
}
if(personal_access_tokens.name === "" || personal_access_tokens.name === undefined)
{
   errorList = { ...errorList,name: "Required field!"}
}
if(personal_access_tokens.token === "" || personal_access_tokens.token === undefined)
{
   errorList = { ...errorList,token: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    
      
        if(props.match.params.id) {
            setLoading(true);
            getOnePersonal_Access_Tokens(props.match.params.id).then((res) => {
                setPersonal_Access_Tokens(res.data.data);
                setLoading(false);
            })
        }else{
            setPersonal_Access_Tokens({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (personal_access_tokens.id) {
            setLoading(true);
               var updateResponse =  await updatePersonal_Access_Tokens(personal_access_tokens.id,personal_access_tokens);
               setLoading(false);
               if(updateResponse && updateResponse.data){
                   if(updateResponse.data.code===1){
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Updated Successfully.",severity:"success"});
                     }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
                }
               }else{
                setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
            }
                //props.history.push("/");
            } else {
            setLoading(true);
                var addResponse = await addPersonal_Access_Tokens(personal_access_tokens);
                setLoading(false);
                if(addResponse && addResponse.data){
                    if(addResponse.data.code===1){
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Added Successfully.",severity:"success"});
                          }else{
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    }
                }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    
                }
                //props.history.push("/");
            }
        }else{
            setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
                   
        } 
    }catch (e) {
        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
            
    }

    }
   
    const hideAlert = () => {
        setAlertstate({ ...alertState, open: false });
      };
    return(
        <PageTemplate title="Add/Update Personal_Access_Tokens">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(personal_access_tokens!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.tokenable_type}
type ={"text"}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,tokenable_type:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.tokenable_type}
error ={(errorMessages.tokenable_type)?true:false}
label ={"tokenable_type"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.tokenable_id}
type ={"number"}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,tokenable_id:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.tokenable_id}
error ={(errorMessages.tokenable_id)?true:false}
label ={"tokenable_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.name}
type ={"text"}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,name:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.name}
error ={(errorMessages.name)?true:false}
label ={"name"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.token}
type ={"text"}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,token:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.token}
error ={(errorMessages.token)?true:false}
label ={"token"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.abilities}
type ={"text"}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,abilities:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.abilities}
error ={(errorMessages.abilities)?true:false}
label ={"abilities"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.last_used_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,last_used_at:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.last_used_at}
error ={(errorMessages.last_used_at)?true:false}
label ={"last_used_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.created_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,created_at:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.created_at}
error ={(errorMessages.created_at)?true:false}
label ={"created_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.updated_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setPersonal_Access_Tokens({...personal_access_tokens,updated_at:e.target.value});checkErrors()}}
defaultValue ={personal_access_tokens.updated_at}
error ={(errorMessages.updated_at)?true:false}
label ={"updated_at"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"8"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/personal_access_tokens')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"9"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button variant={"contained"} color="primary"  type={"Sumbit"}>Save</Button>
</Grid>
</Grid>

                        </Grid>
                        :null}
                </form>
                
               
                </CardContent>
                </Card>
                <Snackbar autoHideDuration={6000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={hideAlert}
                    key={vertical + horizontal}>
                       <Alert onClose={hideAlert}  severity={severity}>
                       {message}
                    </Alert>
                </Snackbar>
        </PageTemplate>
    )
}

export default withRouter(Personal_Access_TokensAddUpdatePage)
