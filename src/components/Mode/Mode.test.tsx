import React from "react";
import { render, screen } from "@testing-library/react";
import Mode from "./Mode";
import AppProvider from "../../providers/AppProvider";
import userEvent from '@testing-library/user-event'

//We can user custom render function to wrap our component with AppProvider
//See https://testing-library.com/docs/react-testing-library/setup/#custom-render

test("Mode component", async () => {
    render(<Mode />, { wrapper: AppProvider });
    const user = userEvent.setup()

    const headingEle = screen.getByRole("heading", {level: 3});
    const buttonEle = screen.getByRole("button", {name: /toggle/i});

    expect(headingEle).toHaveTextContent(/light/i);

    await user.click(buttonEle)

    expect(headingEle).toHaveTextContent(/dark/i);
})