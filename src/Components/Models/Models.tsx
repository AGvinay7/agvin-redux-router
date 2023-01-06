import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Model } from "../../Models/ProjectInfo";
import { setProjectData } from "../../ReduxSlices/ProjectSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";


const Models = (props:any) => {
    const dispatch = useAppDispatch();
    const reduxState = useAppSelector((state) => state.projectInfo);
    const {createdByProp} = props;
    const [projectName, setProejctName] = useState('');
    const [models, setModels] = useState<Model[]>();
    const [createdBy, setCreatedBy] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [modelName, setMdlName] = useState('');

    const saveInRedux = () => {
        dispatch(setProjectData({
            projectName,
            models : {modelName, modelId :Math.random().toFixed(8)},
            creationDate:new Date().toISOString(),
            createdBy: createdByProp,
        }))
    }

    return (<div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ margin:'1.3em' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Project Name"
                    defaultValue="Project name"
                    onChange={(e)=>setProejctName(e.target.value)}
                />   
                 <TextField
                    required
                    id="outlined-required"
                    label="Model Name"
                    defaultValue="Model Name"
                    onChange={(e)=>setMdlName(e.target.value)}
                />          
                                  
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    disabled
                    defaultValue={createdByProp}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="creation Date"
                    disabled
                    defaultValue={new Date()}
                />              

            </div>
            <Button style={{margin:'1.3em'}} variant="contained" onClick={() => saveInRedux()}>Save</Button>
        </Box>
    </div>);
}

export default Models;