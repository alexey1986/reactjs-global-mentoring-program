import React from "react";
import Search from "./Search";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Search:", () => {

    afterEach(cleanup);
    test("renders search component", () => {
        render(<Search />);
        expect(screen.getByText(/Find your movie/i)).toBeInTheDocument();
        expect(screen.getByText(/Search/i)).toBeInTheDocument();
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("to matches snapshot", () => {
        const { asFragment } = render(<Search />);
        expect(asFragment(<Search />)).toMatchSnapshot();
    });

    test("search input should have a new value", () => {
        const { getByRole } = render(<Search />);
        const searchbox = getByRole(/searchbox/i);
        expect(searchbox).toHaveValue('');
        fireEvent.change(searchbox, { target: { value: "Jedi" } });
        expect(searchbox.value).toEqual("Jedi");
    });

    test("should call change event", () => {
        const { getByRole } = render(<Search />);
        const handleChange = jest.fn();
        const searchbox = getByRole(/searchbox/i);
        searchbox.onchange = handleChange;
        fireEvent.change(searchbox, { target: { value: 'Jedi' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('userEvent with callback provided as a prop', () => {
        const handleChange = jest.fn();
        const { getByRole } = render(<Search changeHandler={handleChange} />);
        const searchbox = getByRole(/searchbox/i);
        userEvent.type(searchbox, 'Mandalorian');
        expect(handleChange).toHaveBeenCalledTimes(11);
    });

    it('should submit form', async () => {
        const handleSubmit = jest.fn(e => e.preventDefault());
        const { getByRole } = render(<Search submitHandler={handleSubmit} />);
        const searchbox = getByRole(/searchbox/i);
        const button = getByRole(/button/i);
        fireEvent.change(searchbox, 'jedi');
        fireEvent.click(button);
        expect(handleSubmit).toHaveBeenCalled();
    });
});
