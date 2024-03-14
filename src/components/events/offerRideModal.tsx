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
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import dayjs from "dayjs"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  statusIn: UserEventStatus | null
  onSubmit: (statusOut: UserEventStatus | null) => void
}

export default function OfferRideModal({
  open,
  setOpen,
  statusIn,
  onSubmit,
}: Props) {
  const theme = useTheme()
  //   const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const [lookingForRide, setLookingForRide] = React.useState(
    statusIn?.lookingForRide || false
  )
  const [lookingForPartner, setLookingForPartner] = React.useState(
    statusIn?.lookingForPartner || false
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
          {"Ponudi prevoz na dogodek"}
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormGroup>
              <DatePicker
                defaultValue={dayjs("2024-03-12T20:00")}
                disabled
                views={["year", "month", "day"]}
              />
            </FormGroup>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          {isSignedUp && (
            <Button sx={{ me: 2 }} onClick={handleSignOut}>
              Izbriši
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
