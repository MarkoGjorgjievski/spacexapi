import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
    mission_date: string;
    mission_name: string;
    mission_site: string;
}

export default function OutlinedCard({mission_date, mission_name, mission_site}: Props) {
  return (
      <CardActions>
        <Box sx={{ width: 350 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Mission
                    </Typography>
                    <Typography variant="h5" component="div">
                        {mission_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {new Date(mission_date).toLocaleString('en-GB')}
                    </Typography>
                    <Typography variant="body2">
                        {mission_site}
                    </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    </CardActions>
  );
}