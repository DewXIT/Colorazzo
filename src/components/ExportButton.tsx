import React from 'react'
import { Button } from '@mui/material'

interface ExportButtonProps {
  palette: {
    shade: string
    color: string
  }[]
}

const ExportButton = ({ palette }: ExportButtonProps) => {
  const handleExport = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(palette, null, 2),
    )}`
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute('download', 'palette.json')
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <Button onClick={handleExport} variant="contained" color="success">
      Export Palette
    </Button>
  )
}

export default ExportButton
