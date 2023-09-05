import React, { useState } from 'react'
import { AppBar,Typography,Toolbar,Tabs,Tab } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
      <AppBar position='sticky' sx={{backgroundColor:"#0a1542"}}>
        <Toolbar>
        <Typography><LibraryBooksIcon/></Typography>
        <Tabs textColor='inherit' sx={{ml:"auto"}} indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to="/addbook" label="Add Book"/>
          <Tab LinkComponent={NavLink} to="/home" label="Books"/>
          <Tab LinkComponent={NavLink} to='/about' label="About US"/>
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}
