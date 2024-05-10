import { Box, Button, Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: 2
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='64'
        height='64'
        fill='currentColor'
        className='bi bi-exclamation-triangle-fill'
        viewBox='0 0 16 16'
      >
        <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0l-6.7 11.667c-.89 1.55.3 3.467 1.96 3.467h13.4c1.658 0 2.847-1.917 1.96-3.467L8.982 1.566zm-.493 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.707-7a1 1 0 0 1 1.414 0l.647.647.646-.647a1 1 0 0 1 1.414 1.414l-.647.647.647.646a1 1 0 0 1-1.414 1.414l-.646-.647-.647.647a1 1 0 0 1-1.414-1.414l.647-.646-.647-.647a1 1 0 0 1 0-1.414z' />
      </svg>
      <Typography variant='h4' component='div' gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant='body1' component='p' gutterBottom>
        We&apos;re sorry for the inconvenience. Please try again later.
      </Typography>
      <Button variant='contained' color='primary' onClick={() => window.location.reload()}>
        Refresh Page
      </Button>
    </Box>
  )
}
