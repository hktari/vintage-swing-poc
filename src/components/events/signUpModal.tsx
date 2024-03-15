import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material"
import { UserEventStatus } from "../../interface/User"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  statusIn: UserEventStatus | null
  onSubmit: (statusOut: UserEventStatus | null) => void
}

export default function SignUpModal({
  open,
  setOpen,
  statusIn,
  onSubmit,
}: Props) {
  const theme = useTheme()
  //   const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const [lookingForRide, setLookingForRide] = React.useState(
    statusIn?.lookingForRide || true
  )
  const [lookingForPartner, setLookingForPartner] = React.useState(
    statusIn?.lookingForPartner || true
  )
  const isSignedUp = !!statusIn

  const handleClose = () => {
    setOpen(false)
  }

  const handleSignOut = () => {
    onSubmit(null)
    handleClose()
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            onSubmit({
              signedUp: true,
              lookingForPartner,
              lookingForRide,
            })
            handleClose()
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Prijava na dogodek"}
        </DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  checked={lookingForRide}
                  onChange={ev => setLookingForRide(ev.target.checked)}
                />
              }
              label="Iščem prevoz"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  checked={lookingForPartner}
                  onChange={ev => setLookingForPartner(ev.target.checked)}
                />
              }
              label="Iščem partnerja"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          {isSignedUp && (
            <Button sx={{ me: 2 }} onClick={handleSignOut}>
              Odjava
            </Button>
          )}
          <Button type="submit" variant="contained">
            Potrdi
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
