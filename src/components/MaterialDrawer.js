import { useState } from "react";
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import {
    Button, Box, Drawer, List, ListItem,
    ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";

const menu = [
    { title: 'ホーム', href: 'home.html', icon: Home },
    { title: '問い合わせ', href: 'contact.html', icon: Mail },
    { title: '会社概要', href: 'company.html', icon: Info },
    { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree },
];

export default function MaterialDrawer() {
    const [show, setShow] = useState(false);
    const handleDraw = () => setShow(s => !s);

    return (
        <>
            <Button variant="contained" onClick={handleDraw}>引き出し</Button>
            <Drawer anchor="left" open={show}>
                <Box sx={{ height: '100vh' }} onClick={handleDraw}>
                    <List>
                        {menu.map(obj => {
                            const Icon = obj.icon;
                            return (
                                <ListItem key={obj.icon}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={obj.title} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
