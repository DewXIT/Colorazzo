import { Button } from '@mui/material'

interface IGeneratePaletteButtonProps {
  onClick: () => void
}
const GeneratePaletteButton: React.FC<IGeneratePaletteButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className="mt-6 bg-purple-500 text-black hover:bg-purple-600"
      fullWidth
    >
      Generate Palette
    </Button>
  )
}

export default GeneratePaletteButton
