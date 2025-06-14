import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Avatar, Box, Divider, ListItemIcon, ListItemText } from '@mui/material';
import { useAccount } from '../../lib/hooks/useAccount';
import { Link } from 'react-router';
import { AccountBox, Add, Logout } from '@mui/icons-material';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {currentUser, logout} = useAccount();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <> 
      <Button
        onClick={handleClick}
        color='inherit'
        size='large'
        sx={{fontSize: '1.1 rem'}}
      >
        <Box display='flex' alignItems='center' gap={2}></Box>
            <Avatar />
            {currentUser?.displayName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem component={Link} to='/createActivity' onClick={handleClose}>
            <ListItemIcon>
                <Add/>
            </ListItemIcon>
            <ListItemText>Create Activity</ListItemText>
        </MenuItem>
        <Divider/>
         <MenuItem component={Link} to='/profile' onClick={handleClose}>
            <ListItemIcon>
                <AccountBox/>
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={() => {
            logout.mutate();
            handleClose();
            }}>
            <ListItemIcon>
                <Logout/>
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
