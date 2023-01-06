import React from 'react';
import { setVisits, setProjectData } from '../../ReduxSlices/ProjectSlice';
import { setUserData } from '../../ReduxSlices/UserSlice';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className='main-area'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Project
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>navigate('/projects')} size="small">Open</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Model
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>navigate('/models')} size="small">Open</Button>
                    </CardActions>
                </Card>

            </div>
        </div>
    )

}
export default Dashboard;