import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

interface PalettePreviewProps {
  palette: {
    shade: string
    color: string
  }[]
}

const PalettePreview = ({ palette }: PalettePreviewProps) => {
  return (
    <Grid container spacing={3} style={{ marginTop: '1.5rem' }}>
      {palette.map(({ shade, color }) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={shade}>
          <div className="flex flex-row mb-2 gap-4">
            <Typography
              variant="body2"
              style={{
                fontWeight: 'bold',
                color: '#bb86fc',
              }}
            >
              {shade}
            </Typography>
            <Typography variant="body2" className="font-mono text-white">
              {color}
            </Typography>
          </div>
          <Paper
            elevation={3}
            style={{
              backgroundColor: color,
              textAlign: 'center',
              borderRadius: '8px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
export default PalettePreview
