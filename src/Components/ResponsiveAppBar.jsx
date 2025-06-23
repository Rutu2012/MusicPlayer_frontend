import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Music', 'Podcast', 'Live'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// Update searchBarStyles for reduced height and centering
const searchBarStyles = {
  position: 'relative',
  borderRadius: '999px',
  backgroundColor: 'rgba(255,255,255,0.15)',
  boxShadow: '0 2px 8px 0 rgba(60,60,60,0.10)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.22)',
    boxShadow: '0 4px 16px 0 rgba(60,60,60,0.15)',
  },
  marginLeft: 2,
  width: { xs: '100%', md: '480px' },
  height: 36, // Reduced height
  display: 'flex',
  alignItems: 'center',
  px: 2,
};

const searchIconStyles = {
  color: '#fff',
  mr: 1,
  fontSize: 26,
  opacity: 0.85,
};

const inputStyles = {
  color: 'inherit',
  width: '100%',
  fontWeight: 500,
  letterSpacing: 0.5,
  '& .MuiInputBase-input': {
    p: 0,
    height: 28, // Thinner input
    fontSize: 16,
    transition: 'width 0.3s',
    '&:focus': {
      width: '100%',
    },
  },
};

function ResponsiveAppBar({ sx }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#424242',
        color: '#fff',
        ...sx
      }}
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* LEFT: Nav buttons */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              minWidth: 220,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* CENTER: Search bar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={searchBarStyles}>
              <SearchIcon sx={searchIconStyles} />
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={inputStyles}
              />
            </Box>
          </Box>

          {/* RIGHT: Avatar/settings */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXGBgVFxcXFxcWFxYYFxgXGBgXFxcYHSggGBolGxcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tMC0tLS0uLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS8tLS0vLS0tLS0tLS0tLS0tLf/AABEIASIArgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBAAj/xABEEAACAQIDBAcECQMCBgEFAAABAgMAEQQSIQUxQVEGEyJhcYGRMqGxwQcUI0JSYnKC8JLR4TOiJDRDssLxYxYlU4Oz/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAuEQACAgICAQIDBwUBAAAAAAAAAQIRAyExQRIEYSIyURNCcaHB0fCBkbHh8RX/2gAMAwEAAhEDEQA/ACLAYf7xqeIs3hSo4tO6pCLXQ2IyFiNjRye0D61HTZCRnsmpONx4ByLv41S7Z6RJCMq9qTly7zRuXBwZ2pPwirZa43GJCuZ2AH83c6D9q9Lne6xDKOfE/wBqpMbi3lbM7XPuHgKiMKZQrkpj9LGO5cklpGY3YknvN6Se6mlavEd5+FPZ1JCJe9vfrTDW7/fTzJ5UhyBu9aFjIZU1Z4SPkL+e6q1hx86scJId+42393fRi1ewj2Qm4K+hqALbjv4fzjVicRc6aNz4f5pM2DFhxv8Ay9U+weSLkuF+pk6dEI4jq+1mK99HfRiB2hGIZrgk6flBtcDib0B4/BN1bLv0NuYO8eNaT0NT/gsGPuvCbnxci/qVPlUsili01RH1E3CNoK8HFGygqbhtxvVjs/DZWud3Cgt5ZMKetUEx5ssqfgbmOQP+OVGmy8fHMgdTcEcOHd41Ju+A45WlI5j5VUsKpWF6n7RwpbtDfVcG8jyNU+6UuyJIuU9xqQi6U1iLswFqmBKVhOZa44NjbfT2WqzpDtVcNC0jb9yjmeAqYKBbpLtdMMCikNO287wl/nQZnJN2NydSTUPFTtI7Od7G/rT5ewvVo6NGCjwPPJbx5VxV4nf7hTcY4neaXmotho4BrrXmmtuFeJpt6U1Cmk0uaZ9o24DU0466eFJiXs356+XCsGh3Nf0NSMLPEjDrlcxmwZoyMyfmCkHMOY7vWOsVSI03eApgNWqDaHofhpYllhxTlWF1cIJgbb7BMracRa4402nQ5zrFPFMOXajbyDae+ofQ9HjkbqwTG5vJEDYMRudD9yUcGFr7j3a3syOOWMOrZwdM1rOCNCG/MNxBpZfaQqXRCazxfw7RjU2EaNikiMrciLf+x3ij7onggcBhhuKmWPy6xx8LGrTbWyIpmjVybElAy2urMLre43dki3M1I2Psw4eIxFg3bZ0IFrgjUWubMNT/AA2f1OWWaKTf+hJzWXC9b/YUuzAzNnHZlWzjv3H3/GgTZE74HGtCxOQMQw4Efdbu0tWgbPxHXF2+4pMa2+849t/AE2HeCeVg3pnEWxSMq3Z4kJA1Oa7j4KPSoYse6Kem8VpvnZoywowBG4i4PcaqtobOW+6u9HmeKFVnIU8Be5A5G1MbW2uoOhNhyFBvwm1eg5cuOD3JEYYQLurhWo6bRDG1m89KesTuvTXZoZYz4HCKyTp5tUzzlAexHp4nifl5Vo/SvaXUYd3+8eyvid39/KsZkN9TrxoQXZZDcS2+VdjXOJG+6gAB5sSL+grkhsO86D515YTYA7hqBwB5+PfVLCO9Zu768pvrSMJYNdtwOvfbUj5edOL2nsugZtAeFzoKFmO1y2tdxS5Xy3vltfgLnX3C1cjNxfnr/b3UQnJNxHPT1p5BTTIVyE7nXOPC5HyHrU+PAOYWnA+zVgp5m+hI7gbDz7qwGNKKvsHsQsuYcqqNnYKSdskSFjvPAAc2J0Ud5rUtg4IRIqkRyuBqXdBGvMKhN28WA7hVYZMcL81ZLJmhi+Yp+iENiRlJPcCfhRA2AxUOIWbCiwcgTxuCqOB9/W2VwNLjuveiGGYgAGRQfwoLgelSGl01c+lIvU2qS1wD/wBBPH41+a/crNrbMeZDlZYybEEMTZgbgggDiKkjPbLIwzaahDlJ/EpzaG/D3WphdnBiWieRTftMCApPHsbmPj61MMSqpLsWA3lra92VQAT5VKWuDmxxVeVVe+fzImAUQxrHxBOg3sWctcbt/u42pUWC1LezIQAzIO0Qo0GZty+lcOVQjkBQ2bKfwtIc1mJ01FhyvSGwchuJJ3MZ3gKi2HJioBK/zSm44Gaa5fJJjwSNuZm8ba997bu+om0sOAbKna8KsYwkSkgFuNha57he1VWwtvjFSyIYmjaO3Zf2iDfU1OWNyTlHhdk1gWSPSftsRg9lW7Tatz5eFSmitpVqUqJMlBM6scFBUjJPpL2lmmWEHRBmP6ju93xoNcaU/tLFmaeSQ/eYny4D0pm+7kLmqLSLoZ3t4afz+cKcLV6FOPM/GlFdaJhoi7W5Us6ajeNfTWuRDeas+jeBEs6h/wDTQGWT9CC5B8dB50G6CkVmNgZc2f2zYnuLgG3iL+40qT2Tw0qygwpxBnme/ZV5z+tjZR/U9/21BgXMSO5j/Spb5UEw0dx+I61lCjKka5F52uup/p3cKupdv3wa4dV7eXJIbdkINLr3sPTXuqgT2j4D50vrKcVpMnYHbeJw65Ipcq3LFSkbgnmc6mr/AGZ0wmvmkhwz94i6tj45TlP9NUGy4OsnjT8ZEf8AX2fnXMKui8zbTedeFB41JiyxQl8yTNB/+tMgW2DUkqG/1yu8kW1jPKo+I6f4rOpfDLDADd3jIxEmXkufKATuuRYXqix6/Y4aTgUZfNJXv7mWpeA2d9akjgJNpGF7G1kHafw7Kmx5kU+NY43oWPp8cflSRo+wNqy4mISJD9XhPsZ+3I688o0W+u8tffUnEQEgK12LGxLcBu0A0HkOAqfHGosqABVAAA3ADTSuYiQAMx3KC1+QAJqKlT0jlyp5NJ+wwsQMADAEZbEHmq2PoVqJDh3iJMUhK7uqk7a6bwje0p7rkabqR0b2gMTgophb7SLtDflkAyuPUH+Gpk+FDKVa+VxY2NiCNzKR7LDQg0be02Nkk4NJf8H4AGFiLE8L3A7gbDTyFMY2FIvtbarpmG+3Ed47qC36U4vBO0OJi+sBD2ZFskjL91jYWbS3Aa3uTSB9JWFkUh0xaHiBGhHnZjes4zT0aeKcdpb6aD3CYxJBdWBp4xC+tUGycMssaTwhsrgMDYKfMA2v5VaLM50ZTpx50jWrKQlJr41TPm9TrSs1w3pSWri+z51Q6B1DpXnfQ/z+amuA8K8w0NZhOwnQiiTZyiHZ+ImPtTMIF/SNX9Rm/pFDkK0dbO2d174HC27Ecf1iUcC0hzBT7vJzSSY0RrAbJKYHHsRZgsKtffcKklu6wlF/ChjZGHzS5fxRzgeJgmt77VrU2BzRbTi/Ebjmb4WKx9VNZp0YjAxUJO4vl/rBX/ypYu0wvlFIqXN/5/N9caLf3afH+xqzXBFRKnGOx/ofqz/338qhEG1uf96rYKJexZMuIgblLEx8nUmp+3IPq2KkXLfJJnUfkJDqPQ2qjBI147xWg/SDs/rYIcanIJJb8LgMjeAJI/ctBypm6GZ9n5tnSAanC4lwOZjbKCf9yN4Cnvo9mGbEykf6EIQH80rEnzsi+tWH0byrKJYXFxJEgYHjlVoW9VSM/urnQbBLgxtFcSwVY8QgLNuIVFeMgcScymw52pIurI5r8Wl2GeFlOkY1c6v+UHcDQl9IHSRSjYPDtq11mkHBeManix3E8Bcb91Ht3pk8uaOANDAb5je00xP3nYewv5Rrbfb2aHsKvbW3AEDlprb3Girv3JemweHP9Pb+dl10G6SfUZ/q83Zws5GRydIZTpr+RtBfgQO+tLmxBD9U+hb2DwJG713eYrGNoxLIyqR2S1ip3WJtb0q12R0qGGy4THMzYYG0GJBJkw54JJ+JBz3gDjbTZYOe4m9VhlkXlHn/ACGPT9BJhknA1VurfwN7X8Db+qs6wkFyRx+VaX0jwzHA4ghldHSOcOmqko6s7C2gDKA3may5ZslmB7qt6VryTl0U9NKTgvPlGsfRlP8A8M0ROsTkftbtD35vSil4yayr6Ldsf8a8ZOksf+5Dce4tWsTPapZ/H7R+PA8krPmA14DsilMNRSnGlEI2dKekHZHefkabddKINl7PD4bESEXKCID90na9wFBuhkrIWA2eXikkG5CgP78wv6getan0K2OUiM0gtJNlawJGWMKBGlxa9l+NVf0ebIWTCzo+52Zb/sUAjvBJPlVzsnbcMQTDYieNJUXLYvGAwXsggk8sp/dzBAjOV6KJJEplkTEtlIYSxDsvoCYmIIzqOySsq7wxOU8qzRYeqmsVKvE98p3nq2uLHc24bq1ueMOoMb3YHMmq2JAIIvbiCwvra9C/SfY+aUSFTaVeVmEiAdk2+8UXS3FO+hF0GkV21tmKuOF/9PErvHKRere3MhyrfuWhfF7JZHZGHaRip8QbXHcd47iK0rD7N+s4GIE/aRghG49klRc/mUDzseFR9tbO69VxKrqVyzLbUMvZJt3EFT3BeRpoyoKSujOMLszM4S2rXC/qI7Pq1h51onQV1xGDfDSi4UZCOORr5T3Ebh+mqX6gN49RV5gfsmGMQaG6YlRwOhLgctzf+zZpOwyhSKHothXwW01ic6HNFfgwcAxsP1FVHibcKsfpW2ev2c/WWNyjIXsoJHZcJe1+yRffqBVl0i2G+KHWNIFdf9NUOUW32aT2mbiCMoB4byVYOCCbCyxrCsctssihLESDtKW0ubkA6ml8t2TcDL0QE8fIH40lgVbluI+Bolx+EA6tlI7cSMe42ykHkbrfzqvGELCTS5C5x+0gEeGVmb9tXUlRvEqnUs3Z36H0qPt/DE3R9zAHwPAjvqW4MdiOIuPUj4g0vFxNMQxNtK6cWJZINRvy/Qm9EfoN0lmwcP1aW74dy8TpyElxnjvu9rduPcdaaaVOrsfa0qBioyAwO8WPoa9Kd1RjJ429ewETuju0OoxcMt7BXF/0nRvcTX0E73sb76+aJTatm6HdIetwseY9pQFPiotfzFj51GUbAzHyKVKNPT416uyeyaYYQ9aB0KgQ4DGNIwVcpBY8CI7g+poBAvV/sbBzzrHhlkZIZJgZDplzZVAGmpOh0JtoNKWe0PBbJnRzD47FxZI5RDhszXIGrEgX0Bu58SFHeabwvRvByytHApxTwXMkjzpCkeUg6W13nfa2h10NFmK2S+Ew2JQMY1OsRRMwBkATLbMLWI8ge6s2m2EzsAUTVCpOtxqN26+/j3UceNS2TnJ9FlsrGXYz4WSbDnKHdW+2wpXQAz5VvGL27drDfcb61To1tNsRGVlQq6nLIjalG3hlb76HQg792/eciwsOJWYSrI2Zkyho8qdkBVtZLArly8Nba860joFITHHofsy0JvfMqixQPoNRcAdzd9HPCKVpDYpPiQaxxgbgBc3Nha55nvrqxgXIFrm57zuv46Cu16uUoNTYVH9pFbxAJ9abgwEaZsi2zCx1JBtfgT3n1qTXDWMVRnjw0d20C7ySAqD8OZiAAOXpQ230g4YvmhgmxLjs5sPGxW3IyNlzDyIqJ05xEeUyTBZMpyQQtcxl9byOv3lFjpxt3iwKu3WeM4edIQXkynFFpG6pVCn7OBPZBAA7Fl7e6rQwuSsXJNJ0Fu2ulEfVwxy4OWJwAI2cfZjUAq5IBAOm4E6aX42OzsIoeGS4kikOTMu7tgo6NfUEZjv4AHmAHdE9r3V87sQMv2DjrIpVPtoNCUkAsV+6dx33F3tjZYwDHERSSDBy5RLGpJCNp1cg0J04W10y3sRY5Mbg9Gx5PJFbtvBGNXRvajkZD35gQD4fZE/uqtGLKi1HPTbAAgzLqkqRPe+YFwwW+bj2GFvA0A4oU+HNODuLoMlaK/HPfMeYpAG6l4odk+BpEZ0HhWbbdsmMzDfV70a2p1Vwb5SAfP8Anwqkk30vDtpTQdMWQqlR7qQw76XBvpB0KjXWtA+jdBmkib76iVD+Fo3INu/t+lAUftkef9/l60b9EyQpdATJh363KNS8TjJMijiQFUgc7c6WfA8UaTtrDGfDsgtm7J5aqytv77H1oNwmyVZ75lAU5cygMGGl7cCN2tGcGIDBXRgVYBlI1BBFwR3EVWYnZadpkYx3JYixZb21KgEFedt1+FHHPxVMEsb6BzH7NCPfNcE2U2y2H4fE2vRR0VwXVwEsLNK5ksd4FlRfVUVvOuRbKUkdYxkym+UAqh0tZxc5xY7ibHlVvmvQy5fJUjRi+zter1ernHPVw12kmsYB+n+z8zQx6ZLNIBlF8wIHtWzbm3X40K4bYKdvQA3DNckXXTXf3Ed1artfCdbGcqq0gVgmbhmtmAPAnKLHmBVLDihGuQ3QkAMrAA9977/EXFduGfw0Qmq5AKHYCKHKMyXJYEWPAa6jdcd1HsuxHfBMkhEa9QAV1IBCC2rkneBvPCmtn7J62Q2W0Ia5JBAYAKcqaWYEki43AMNNLlWKs9gdVGtuBPC/OkzTV6HivoZnJA0Gz4YnzBmdzqzWKL7Jyk2U2cbt9uNCWLNGPTvaIfEFAdI1yfuvd/iq+KGgnGP8KWP1Hk7IU57J8D8Kag9mlyHsnwNNQneKckelpMLakV2Y/Ee8VExDlSCOOn9vnWugMsWWuwb6Wy6nw+dLwqC9Hx3RkxDXz3HAAj4H5UZ9G8b1WTEqDZOxMBv6t9zW8R6ovOg/OOtXkQRRz0LUsrtGod4Dlki0+2w8gzWF/vhs1vAA79EyKisGaDhYlAuh7DdsAez2tSV7je9uZvxp6q3Y+DMdupbPhn1VGuHhOuYC+9L70NmU337hbZalZVMStOrSQtLApWBihXC4va+u+1dFNmAZg/EC1KKLpJpRpJomEMaQzHn6i9LIpJFMh9HLniSaq9o7RdiYsMA0m5nP+nCOJY7i/JPM6b7Ro76Gh3aMzYm+FwlhGDkmmA7CD70UdtGfgbbt3HQgYAbWUXvG2aMNkVzvla13k8yV8snfVBiW3+Nh4XvRR01niWVcPCOzh1yE85Hs735kDJc8yaEp+FUXBKQ2+4+Xzpg6N46U8/zA99M4sceWtVS+Emc2g+um61vQ3+dezBwLjcLelJxeoB/mtXMuyguEw06j/UEiv+pJXsfNbD9tT7MRwCXbusPnTqR0/sTBtLYKLs7bv78hv17qv9tdFXhfJHdwUV8xsLk3DWHAXBIHAEVZJyeiXlugPkGt+IFx63+VXfR7bhwmLEwuVvlkA+8hC38xoR3gVWYzDsjFWFjYfOoZe+vP/wBfKs49MomfR0KRvaaM3DgNmU9lwQLEjcdLa7+FOlayL6PunAwxGGxDfYE9hz/0iTqD/wDGT6HXde2vAgi4NwdQRqCOYrknFxdFosTauivV6kGO16om1JGWJiu+2/kLi58hehdJWU5lJzDUG/x53oFIY3JWGdctXlOldrExNq5lpdeo2axifDq4ysAVO8Hce4jiO40P9NekKYDD9i3WsCsKW0B4sQPur8bDjVh0k6QQ4KIySnXciD2pG5KPidwrCOkO2pcXM00p1OgUeyijcq9w95uarjj5fgK5DmFYlMzElmLMxO8kk6nmTUZ2vJ5Eelv708psoHIAe6q7BG7E8wT6kVURslS71/V8iflXJxw7qU28ePyNcmOo8xVYfKxHyRX1jty+Vad0K2emK2YkbD2JX+Z/8qzEfeHn8jWo/Q3NeCZPwuD6gD5VzyCWnQfox1MCGZSJHALj/wDGntdWfzNoG5C450nbm0wcSsTMAyQ52ubWMkhZV8lt60a7RkVVVADfflXfYAk2voLmw151nT9DsZJLNiZWgVpWuF6xjkUWCqSEI0UKN/CujDPxfmci+HL5N9fz+36gl0pxStI2U3tcX4XFhp5j30PkWAHIUay/R9jiCQsT/plXUn9Vu/3UObb6PYrDANPCYwTlBLRtc77DKxvuouflK2XUk9lM5rR/os6QSLHJCWLqhUqhPsq19EPCxG7drwrNGNXfQjHdVi0BPZkBjPidV/3ADzpJpNbKx5N/weNSQXU6jeDow8R891SKCb8QSCNxBsR4Ebqstn9IGAtKCw3ZlGotobqN/lr3GuWUKLpMJKQIVvfKt+dheuYbEJIuZGDDmPgeR7jTlIA7XqTJIqi7EKOZIA99VWM6QRr7ALn+lb+J+QopNgLeqfaG2wvZiszfi+4vp7R7h61VYzHvLox7P4Rovn+Lz0qNaqxxfUlKf0M++kLFs+KAZixWNSSebFja24aW0HOhWT/HrVn0jnz4qZvzkf09j/xqqfh4j43roqkJZMxkuhHdb10+F6ZwI1by+dNzbh36/IfOncFuPj/apjdnceeyP1D4GkiVsgZrWzWB4m2+45d9cxQLFVHE6elvnT00YaVIh7KDX4t8h5mimwMZm0YHnp60d/RLicss633qrf0m3/lWeYqfM5I9knhuA591zb1q66O7RMTlxxW3vB+VJPZj6GR8PvEig2ubvc27w53UqdyV7JW34hYr58BXuJB01Nm8zoe6hHpZ0QjlV5I4l6wdtkA7MttSQo06zy18aKSfLONzjP4OPfj+ew1tz6QocMGSKRcTNusgAiQ/ndfaPcPO1ZJt3bE2KkMk8hduHBVH4VUaKKnbSRDCkiLY3KuN1jfs6cNNPSqGWnSUToxwUVS/cbY1cdGtgPii5SQR9WVsbZjmNyth3W+FUhrTfoRwxZ8S59lOry/rPWXI7wvxoTlSLwq9hLhoJSgLxkNbtaEC/ErcbqYkKqxDHKSb2Y24AaX3jT40XbTxapbNYDiTw0Jv7qVg8MpAcrqRcXGoB3aHcbWrnbZ1KVK2gTQlWzKSrc1Nj58x3G4qfJtmYgDMB3hRc+N7j0AqbjdkZ5D1ZVVsMwtoG36Acxv8uZqpx2HMTBXIBO7Xf4XrINxkNSOWN2JJ5k3PvpGXUd1KNJJqsSUxy9RtqY0QwySH7qkjvO5R5mw86czUIfSDtGypAN7dtvAaKPM3P7aojnkqAtmvqTc7zTfEePyNeJpWHF3HgfiKaTJo9iT2rcgB/PWl4Xd43qPI1yTzJqXhl0WpsdC0cIS51KghfFv4fK9Sm2ZJFhutfsvObID7RTezkcBY/wC5ae2Dsf6zOesNoIh1kxO6wvZb99jfuvUrGyybQxdowQD2UHCOJfvEcN9/EgcqyNQroT0eErMz9pLWbgLch4n4Cqna2zWw0zxm9geyeancf5xBraNg7A6uNY1FlG9iN54m1Uv0ndHM6xSRi7A5D3ggn4j30spWFIcj6TywYiVZiJIHkZgU1aG5sGVb6obXy3uL6cqKcBtAHK6kshtaRO2tj92QDVd+8gW41lez5HlZYUB+2ZbgchqPCygn1ou210amgUS4ORhIo7QU2JP5R95fym/dfdVcsI3pnJm9OpyUk6aB/pvsxcPjXVtIMUOsQjcHPtW7wxv+9az3GRFGKnePfyNGs+0JtpRnDTSjr0YtEJERcxAIeIsoGVvW/wC3UWljaQZHUrMlx2tM1t6n8w/nGgtquzqSKo1s30KYcrg5XP352t4LHGPjmrGGHCtt+iWYHZllbtLLIrWtdSSGG/jlKmp5OB4chTjsL1kiD7qnO3foQFPiTf8AaRxqdJIFUsdwBJ8uXfScJHYaknvOpr2MjzALwuD/AEkEe8CoNl/Y5hEIGu86nxOp8uHgBUdFDuzEAg9kXFxlF+B5kk+lSpxZCASDawI3gnS4769h4QoAHAWrAA3EqFd1G4O6gcgGIApktXp3Ods2jFmbxzMTcd2vlSY3t486qmU8bQt9AWJCgC5J4AbzWR7a2iZ5nl4E9kclGiju095NGHTza2SIQg9qT2u5Bv8AU6eAas/vVIs5svNCiadwh7RPIH+e6o96k4CEuSo0LAKCd12uPTWs2SSF7I2a+IlWKPedWPBFG9m7h791SUX2e4URYp48DE2EwpLzN/zE3HQG6rbdYX/SL8SSKA76AyQ/h8c3Uth4wbySAtbe4AARB+659O+ti6BdFY8LCHIDSuAXblyRfyrc+JueNDf0XdFUaM4uSxLZliH4LdlmP5iQR4X50f7NksrKd6n4/wCQaDfQSxtUHakQZQDz+RqaDTGKGnnSmM++iGEPLLKRuXKh53IzEd47I/ca0nE4MNu0Puqi6I4AYXAwAjtKpLc/tGzMfgfKiFZQRcHQ0ZycnYKAPpZ0QSY5yOrmFssy8xqua2+x47xwNCE0P1pmje0O0IvvA2WfKNDccbWN/loNkxc2UA2ut7N4Vn/0odFw8QxkHZkitnsbXj35geBUm9+RbuoxGAbFYVMX9lKFw2NQ5QxUKk3JZANzbrMN+luVVWAx2N2dKwQlG0zxntK4F7ZlO8b7Ed9jVuNqRYpRFjexKosmJA3d0o4r37uOm+pOJlaILh9oxGSI/wCjiF1YA8Uk++vGx17iLUfxMHnQvp/BjLRPaLEfgJ7L96E/9p1HfvoyIr542xsBowJUImgvdZk+6RuzW1jYHjz79K0LoB04MmXD4g9vcjn74HA/mt6+O+codoonZoci3Fq6K8rg1wtUglXtbZKSJcDtA5geIP8Ab+9BGO2gkOYOe0t8yrqRb3AeNq0kvoaxP6QMcrTSIv3m7XgoC+9lPp31SG2N9o4oD9qY9p5Xkbex0HJRoqjwHzplISd+n85VLw8DMwSNCzMbBVFyTyAG+iqPozDhQJNpSZSRdcLEQ0z/AKyDaNe+/mDVtI5mD+xNhtiGISwC6vI5siDme/u+G+u7SaJSVhJIW46w6ZjrZhyGlXmz8JLtCR0hyYXDC7ML2iRARvOnWEHXlfXTfVBtYQrZIiWyk5nP39QLjuAv/Na1mL3HGLCRnDqRJiJABM49mNfayL3m3zPAChJ+Bp99kMkEU8h1k1Vd/Zy3LE8zcetRidfKgY2/6NNNnQ+L/wD9Gq0xbZZTyYD3E1SfR3J/9viH5mH+9jV3tT208D8qXsJYYZ7ik4trDzpOC3UxtiXKo8fkaBiwYAi3Ai3lTGCQqtjzNvCnM1dvRCKYXFjuqMkYs0bC6kEWO4qdCDT16bmW40NjvB7/AO1YwBYXonFKJsHKO1DIerkGjrHIA6EH728gg3FweVDWNXE7KY4adFxODk3K9+rbvQ6mGQcu++u+tJScGeOYaFgYJV4hluyX7gDLr3irDbOy48TC0Moureqngy8iKZu3sxk+zMN2jLsqe7HV8HNl6wjioDdmdfPMBxvS9jjDTYuMrG2ExSP9pBlYxvYEnIDrC1u0UbS27nUfafQh42Ko4zoRoeyG4q6H7t9CORuOFW/0fYnETzN15zjDqVV3UNIrMSuQS+0RYMSDzFCSrY0VtBzBOy6cKlrODxplor0w0ZFSo6KTG9vbV6qJsty7dlQNSWO6w4nu47qymXYBzGXHTphgderv1s5HALGp0FtMzHxFEPS13nxSYeOZISiF2d5OqAzaWBGpOUX0HKqxcLsrC3Msj42XfljukV+Za/a7zc+FPFUQyc0K2VtKQkw7IwjKdz4h7PMR+Zz2IgeXpauy7MweDYyY+X63iibmBGJUN/8AM51PgbafdNQcf0txU6dVh0EEA0EcAyjwLjU+At4VXYTo/IzpHkJdzZV03cSRyHM6VRRZMXi8ViMdKSiZVc2WOO+QbrKFHt2sO7ThUjDbJWNos3GRVe/4W7Jv60d7O2GMDiMN2rlwVY8L7rL3doVR7Uwpd50G+0hX9S3K+8CjqgArtHEnJFA3twdZGw5HrCPgoqssc2vLTwq+6VsjziZBbrY45W/UyC593reqzGQZWTvQeo30qWgmofRpPfCKv4ZG+R+dFW0NZE8D8qA/oonuHTkwb10+VHmJ1m8F+J/xSmJuG0FD3TjH9XGne3yNEK7qEunOC68IgOoOb3W+dAwVPiADY8eNOZqhy2YWqPDiypytupqCWt69emUkB1BpQagYo+kWEZbzx30ys6jiUIZT7gD/AO6IIpAwDKbggEHmDqDSL1QHESQS/VgLxuCYm3GNR7Sg8cvDlmWjVhKj6RcZ1RWaM5mUdXKq8EJBUk7lYXa3693ED/0fbTWDEyYZmukrXjY/eO9D+9CPMKONEHTWPq1hlI/4btQYhQBos1gJPIgeo50CYvZz3+rn/XhF4WH/AF4dWCqRvYalbfmG8Cj0MtGz2rhFB3Qvpos4EM7BZhYBjoJOXg/dx4cgU7UxQihkkP3EZv6QT8qnRVOzD+leJ63FzvzkKjwTsD3KKm9G4YJRkaO8w4sSVy88t7XHh87D7tzOvxq86H7PkebMgNwNLC51BHzJ8hVkiPLC9wkVgB3IijUndYAUY9GdiCEGVxeaQDN+ReEa9w4nibmo3R3o4sLdbJ2pTxJvaiTPQnK9CsoumMJMaSDejA+v+QKHtlL1mJY29vOfUEijPakWeJ15g+vChDY4yyqe/wDxRjwwGebVwzLO0JOiMUXuUkst/JvS1O7Vw7KCj+3CxRu9ToGHcbD31ZdPwPrjMo4AH9QF7+NiPQVcdIIUkeOcC6yorjzAzD4VoroDK76LsVlxmQnR1I8xqPcDWs2BYtWIr/wmNVh7IcOO9G/wbeRrcISCoI460jCLNZr0o6QGPHMBqFS1u+4NaRK1gawfbmIb65MWFySfQ2I91qAGa7FiSN9dxDg6iqmJ2UABiR+bX376d+ttxjB8LfOqUaybHi8h3geJqwi2ihFwb/pBb/tBqkXairviI8FPxVbU5/8AUcQ3lR4sB7jW8W+g2XDY1vuxnxY2HiALnyNqYhdpDma2hIWwt4nUk7xby76Rg8f1gL6BF10N72Fz5Cu7LmDxowFgVBtyvStUMidicKksbROLo6lWHMGsgx32chwOJcjqmthsTxjsezmtr1egv+EjkNNiRqHNu9GIcSSklxmYurrYMpNrgE87bj3UEEziWBHJ+tEwykn7QIXimA0zWXW5IJzKCDfUCn5WVlKSbSZ1ItkUTyBh+Eh8qkd1EknRjGQ2hgxYaO1wkiggDXQBgw4cLUwmx9pjRZogPyhU9yxCsYHcLs2MkdVh55fELGvnlDf9wo3+j2MRQyAookaQk2OYBbBQM1zexU3131Aj6LYt/wDmMY9jvVWdgfWw91EGx8EsTrGgsqox9Su/vJ18qLAXyseNKBrlcLUDHWahXFx5HPDW489aJWehrpi2WIsN57Hmdx+PpTR5AwV2/F12HlxAH/WzD9JGUf8AcvpSujTNJh1w7aspMkJ/Ehazp4q3xFX2Gw6Ng+qJAzKV/c263M3Iqo6FYYyIyA5Z4JM6E8L6MjW3qSpB8QeAovTsBP6ZdFycKsq6yRDtd6bzb9O/wvRB0A2p1+ES57Uf2bft3H0t76vMJKHQEqRfRlO9TxB/ljvGlBK4c7MxmYf8rObd0b8AeQ3+R7qS7MGG1J8qnwvWT9PMIIsX+qNT5js/IUc9KccVgkcHW1h4k2+dZXtjF9cyszsWym+bhrwPEa1vHsDCPop0jEjGBz2wLqeY5eI+FE6luYNYlHi2inEqnVWv/j0rYdj41MREsigajzB4inTFRZRk8bV76orEXAJ/nKmJSV3HyOtWez1NszCx5cqbjYw/iFVIsigAHs2tpr7WnhemejxsjR/gcqPA2ce5reVPYkhkJBvbX0qPsmTtN3qCPIm/xFJ0Eu1auSrcd41HiKZjkuL04GpaDYzK/wBsnIg+ov8A3FcnbI4P3W39x/z8jXcShIuN4OYf2peJjDLY6cawbESHW3pTGy5lZ5LHtAhfIf5zelN7RxHVxtJxAso4k8BQrszGlSrqbkf7gfaB8fjamjGxW6D1nppnqPDildQym4P8seRrkkoAuTYDeaFDDrPQbtvENi5BFELohNzwLbib8hqPWrzFEyiwYpH95tzMOS8h3+nOuRZI1yxqAB/POnjrYHsa2PshYRvzNzPDuXkKqSv1TaavujxAI7sxtf8A3ZT++iTDRn2m3/Co/SbY5xOHYJ/qR/aIeOYcB4i/nalbvkAUQjTWqnbaJMrRMLqdD/OdJ2LtoT4WOT75FmHJl0b36+YpDb70qRgE6WYp4YBh5CT2hkf8aAE6/mByg+RoBx7ai3KjX6UZ7yRRX3KX/qNh59k0Bm5ax4D5/wDum6oR8jGKGreNF/0YSHPItzbLe19L87V6vUOwGhYXVlvVzbSvV6nkMiPgfveXzqs2AftXHAGQDuGZdBXq9Q6CXuG4/qNPivV6lCKFcevV6gErtq+3EOGYfz3D0rP9maSyAbr7uG816vVTHyLMMNgHST9f/itV+0pWONhQk5bE5bnLcA2Nt169Xq33jfdLec0mPePGvV6t0MWC1a4H2POvV6kZmB3R8WnxoGgGIewG4b9wq9Fer1YxlX0lf87/APrT4GhlB8B869XqZEnyf//Z" // <-- Add your image URL here
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* MOBILE: Hamburger menu and search bar */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
              {/* Search bar in mobile menu */}
              <MenuItem disableRipple disableTouchRipple>
                <Box sx={{ width: '100%' }}>
                  <Box sx={searchBarStyles}>
                    <SearchIcon sx={searchIconStyles} />
                    <InputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      sx={inputStyles}
                    />
                  </Box>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;