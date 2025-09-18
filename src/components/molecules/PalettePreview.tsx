import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

interface PalettePreviewProps {
  palette: {
    shade: string
    color: string
  }[]
}

const PalettePreview = ({ palette }: PalettePreviewProps) => {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (shade: string, color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(shade)
      setTimeout(() => setCopied(null), 1000)
    } catch {}
  }

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }} style={{ marginTop: '0.5rem' }}>
      {palette.map(({ shade, color }) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={shade}>
          <button
            type="button"
            onClick={() => handleCopy(shade, color)}
            className="group w-full text-left"
            aria-label={`Copy ${color} for shade ${shade}`}
          >
            <Paper
              elevation={0}
              className="rounded-[14px] border border-white/15 overflow-hidden aspect-[5/6] transition-transform duration-150 group-hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-400/20"
              style={{
                backgroundColor: color,
                backgroundImage:
                  'radial-gradient(ellipse at top, rgba(255,255,255,0.2), transparent 60%)',
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <Typography variant="caption" className="text-gray-200 font-medium tracking-wide">
                {shade}
              </Typography>
              <Typography
                variant="caption"
                className={`font-mono ${copied === shade ? 'text-emerald-400' : 'text-gray-400'}`}
              >
                {copied === shade ? 'Copied' : color}
              </Typography>
            </div>
          </button>
        </Grid>
      ))}
    </Grid>
  )
}
export default PalettePreview
