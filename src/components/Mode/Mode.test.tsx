import React from "react";
import { render, screen } from "@testing-library/react";
import Mode from "./Mode";
import AppProvider from "../../providers/AppProvider";
import userEvent from '@testing-library/user-event'

test("Mode component", async () => {
    render(<Mode />, { wrapper: AppProvider });
    const user = userEvent.setup()

    const headingEle = screen.getByRole("heading", {level: 3});
    const buttonEle = screen.getByRole("button", {name: /toggle/i});

    expect(headingEle).toHaveTextContent(/light/i);

    await user.click(buttonEle)

    expect(headingEle).toHaveTextContent(/dark/i);
})