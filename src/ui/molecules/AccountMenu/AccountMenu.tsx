import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { MouseEvent, useState } from 'react';
import { useAuthState } from '@/contexts/auth';
import { UserLoggedMenu } from './UserLoggedMenu';
import { UserNotLoggedMenu } from './UserNotLoggedMenu';
import { useAuthModal } from '@/contexts/authModal';

export const AccountMenu = () => {
    const { user } = useAuthState();
    const { openAuthModal, setIsSignIn } = useAuthModal();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSignIn = () => {
        setIsSignIn(true);
        openAuthModal();
    };

    const onSignUp = () => {
        setIsSignIn(false);
        openAuthModal();
    };

    const paperProps = {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
            }
        }
    };

    return (
        <>
            <Box>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={paperProps}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    user
                        ? <UserLoggedMenu />
                        : <UserNotLoggedMenu onSignIn={onSignIn} onSignUp={onSignUp} />
                }

            </Menu>
        </ >
    );
};
