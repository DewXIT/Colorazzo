import React from 'react'

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
    <button
      onClick={handleExport}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-400/20"
    >
      Export Palette
    </button>
  )
}

export default ExportButton
