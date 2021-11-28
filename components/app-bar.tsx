import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'

interface Props {
  name: string;
}

export default function DenseAppBar({name}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 5 }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h5" color="inherit" component="div">
            Mission {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}