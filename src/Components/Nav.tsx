import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import IconDropdown from './IconDropdown'
import { NavLink } from 'react-router-dom'
import { Menu } from '@mui/icons-material'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'].map((label) => ({ label, id: label }))

//for tutorial reference : https://mui.com/material-ui/react-app-bar/
function ResponsiveAppBar() {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar
                    disableGutters
                    sx={{
                        // sx is how we style component in mui
                        // just like you would have a css file you can add css to a component in mui using the sx prop
                        // here we are using the gap property to add space between the children of the toolbar
                        // and using flex-box properties to align the children
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 4,
                    }}
                >
                    <Box>
                        {pages.map((page) => (
                            <NavLink to={page}>
                                <Button
                                    sx={{
                                        color: 'white',
                                    }}
                                    key={page}
                                >
                                    {page}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                    <IconDropdown
                        icon={<Menu sx={{ color: 'white' }} />}
                        options={settings}
                        onSelect={(option) => console.log(option)}
                        renderItem={(option) => option.label}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
