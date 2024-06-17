import GlobalStyle from './styles/global';

import { Main } from './components/Main';
import { Box } from './components/Box';
import { Card } from './components/Card';
import { Description } from './components/Description';
import { InfoBox } from './components/InfoBox';
import { ContentCopy } from '@mui/icons-material';
import { RowView } from './components/RowView';
import { Button, Divider } from '@mui/material';
import { Title } from './components/Title';
import { Center } from './components/Center';
import { DetailView } from './components/DetailView';
import Logo from './assets/LogoClient.png';
import LogoDB from './assets/LogoDB.png'
import { Box as Image } from '@mui/material'
import { BackgroundView } from './components/BackgroundView';
import { ViewBanner } from './components/ViewBanner';

function App() {
  return (
    <BackgroundView>
      <ViewBanner>
        <Image
          component="img"
          src={LogoDB}
          alt="Logo Digitalbot"
          sx={{
            height: '100%',
            mt: 10,
            zIndex: 1,
            borderRadius: 6,
            objectFit: 'cover'
          }}
        />
      </ViewBanner>
      <Box>
        <Card>
          <InfoBox>
            <RowView>
              <Description>PEDIDO 01</Description>
              <Image
                component="img"
                src={Logo}
                alt="Logo Digitalbot"
                sx={{
                  width: '35px',
                  height: '15px',
                }}
              />
            </RowView>
            <Divider orientation="horizontal" flexItem color='#DADADA' />
            <DetailView>
              <Title>
                Recarga Riocard Mais PIX
              </Title>
              <Description>Parcelas: 1</Description>
            </DetailView>
            <RowView>
              <Title>
                Total
              </Title>
              <Title>
                R$ 1.000,00
              </Title>
            </RowView>
          </InfoBox>
          <Divider orientation="horizontal" flexItem color='#DADADA' />
          <Center>
            <Button
              variant="text"
              sx={{ margin: 0, textTransform: 'none', color: '#190E44', fontFamily: 'Sora', fontSize: 18 }}
              startIcon={<ContentCopy style={{ fontSize: 26 }} />}
            >
              Copiar código Pix
            </Button>
          </Center>
        </Card>
      </Box>
      <GlobalStyle />
    </BackgroundView>
  );
};

export default App;
