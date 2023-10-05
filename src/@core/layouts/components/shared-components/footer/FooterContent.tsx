// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  // const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2, fontSize: '12px' }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link target='_blank' href='https://www.linkedin.com/in/dmarroqu%C3%ADn-72724a208/' sx={{ fontSize: '12px' }}>
          Daniel Marroquin
        </Link>
      </Typography>
    </Box>
  )
}

export default FooterContent
