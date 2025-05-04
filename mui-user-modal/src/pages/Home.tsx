import { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Modal, Box, Card, CardContent,
    List, ListItem, ListItemText, Tooltip
} from '@mui/material';

export function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* Navbar  */}
            <AppBar position="static" elevation={0} sx={{ backgroundColor: '#f5f5f5', color: '#333' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 300 }}>
                        Casa Sim
                    </Typography>
                    <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                        Entrar
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Conteúdo principal */}
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>
                    Interface limpa e funcional
                </Typography>

                <Tooltip title="Abrir informações">
                    <Button
                        variant="contained"
                        onClick={handleOpen}
                        sx={{
                            mt: 2,
                            backgroundColor: '#e91e63',
                            color: '#fff',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            padding: '8px 24px',
                            '&:hover': {
                                backgroundColor: '#d81b60',
                            },
                        }}
                    >
                        Abrir Modal
                    </Button>
                </Tooltip>
                
                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 360,
                            bgcolor: '#ffffff',
                            boxShadow: 8,
                            p: 4,
                            borderRadius: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            Modal Simples
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                            Aqui você pode colocar detalhes sobre um item, produto ou aviso.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={handleClose}
                            sx={{
                                mt: 3,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                backgroundColor: '#e91e63',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#d81b60',
                                },
                            }}
                        >
                            Fechar
                        </Button>
                    </Box>
                </Modal>

                <Card sx={{ mt: 4, boxShadow: 'none', border: '1px solid #eee' }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            Card Limpo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Exemplo de cartão sem sombras e com borda sutil.
                        </Typography>
                    </CardContent>
                </Card>

                <List sx={{ mt: 3 }}>
                    <ListItem disableGutters>
                        <ListItemText primary="Item 1" secondary="Descrição simples" />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText primary="Item 2" secondary="Descrição simples" />
                    </ListItem>
                    <ListItem disableGutters>
                        <ListItemText primary="Item 3" secondary="Descrição simples" />
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}
