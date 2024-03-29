// CustomButton.js
import React from "react";

import { purple } from "@mui/material/colors";

import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import Button, { ButtonProps } from "@mui/material/Button";

const PrevButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default PrevButton;
