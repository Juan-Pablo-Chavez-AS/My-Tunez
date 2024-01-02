import { Close } from "@mui/icons-material";
import { Button, ClickAwayListener, IconButton, Stack, Typography } from "@mui/material";

interface FormBaseContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  buttonText: string
  closeModal: () => void
  handleSubmit: (e: React.FormEvent) => void
  canSubmit: boolean
}

export const FormBaseContainer: React.FC<FormBaseContainerProps> = ({ children, buttonText, title, handleSubmit, closeModal, canSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        width={"100%"}
        height={"100vh"}
      >
        <ClickAwayListener onClickAway={closeModal}>
          <Stack
            direction={"row"}
            spacing={1}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
            width={"40%"}
            bgcolor={"#323232"}
            p={2}
            borderRadius={2}
            flexWrap={"wrap"}
            position={"relative"}
            maxHeight={"90vh"}
            overflow={"auto"}
            sx={{
              overflowX: "hidden"
            }}
          >
            <IconButton
              onClick={closeModal}
              sx={{
                position: "absolute",
                top: 5,
                right: 5
              }}
            >
              <Close
                color={"secondary"}
                sx={{
                  fontSize: 40
                }}
              />
            </IconButton>
            <Typography variant={"h3"} width={"100%"} align="center">{title}</Typography>
            {children}
            <Button
              type='submit'
              variant='contained'
              fullWidth
              disabled={!canSubmit}
            >
              {buttonText}
            </Button>
          </Stack>
        </ClickAwayListener>
      </Stack>
    </form>
  )
}
