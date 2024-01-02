import { Button, ClickAwayListener, Stack, Typography } from "@mui/material";

interface FormBaseContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  buttonText: string
  closeModal: () => void
  handleSubmit: (e: React.FormEvent) => void
}

export const FormBaseContainer: React.FC<FormBaseContainerProps> = ({ children, buttonText, title, handleSubmit, closeModal }) => {
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
          >
            <Typography variant={"h3"} color={"white"}>{title}</Typography>
            {children}
            <Button
              type='submit'
              variant='contained'
              fullWidth
            >
              {buttonText}
            </Button>
          </Stack>
        </ClickAwayListener>
      </Stack>
    </form>
  )
}
