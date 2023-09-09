import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Counter } from "../Counter";

describe("Counter component test", () => {

    test("render the textarea", () => {
        const { getByPlaceholderText } = render(<Counter />);
        const textArea = getByPlaceholderText("Type or paste your text");
        expect(textArea).toBeTruthy();
    });
    
    test("render the result", () => {
        const { getByTextId } = render(<Counter />);
        const charLength = getByTextId("charLength");
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    test("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByTestId("wordLength");
        expect(wordLength).toBeTruthy();
    });

    test("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();
    });

});




