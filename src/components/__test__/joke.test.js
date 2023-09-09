import { render, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe("test joke component", () => {
    
    test("render joke text", async () => {
        const { getByTestId } = render(<Joke />);
        const jokeHeadlihe = getByTestId("jokeHeadline");
        await waitFor(() => expect(jokeHeadlihe.innerHTML).toBeTruthy());
    });

});