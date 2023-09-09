import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Counter } from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter component test", () => {

    test("render the textarea", () => {
        const { getByPlaceholderText } = render(<Counter />);
        const textArea = getByPlaceholderText("Type or paste your text");
        expect(textArea).toBeTruthy();
    });
    
    test("render the character result", () => {
        const { getByTestId } = render(<Counter />);
        const charLength = getByTestId("charLength");
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

    test("change textarea and update result", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength")
        userEvent.type(textArea, "shubham");
        expect(charLength.innerHTML).toBe("Character: 7");
        expect(wordLength.innerHTML).toBe("Word: 1");
    });

    test("clear textarea and update result", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const clrBtn = screen.getByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength")

        userEvent.type(textArea, "shubham");
        userEvent.click(clrBtn);
        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");

    });

    test("clear textarea and update result all buttons", () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const clrBtn = screen.getAllByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength")

        userEvent.type(textArea, "shubham");
        userEvent.click(clrBtn[0]);
        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");

    });

    test("clear textarea and update result all buttons fire event", () => {
        render(<Counter />);
        // const textArea = screen.getByTestId("textArea");
        const clrBtn = screen.getAllByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength")

        // userEvent.type(textArea, "shubham");
        fireEvent.click(clrBtn[0]);
        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");

    });


});




