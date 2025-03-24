import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve permitir a inserção de dois comentários", () => {
    render(<Post />);

    const input = screen.getByTestId("add-comments");
    const button = screen.getByTestId("btn-comments");

    // Inserir o primeiro comentário
    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    // Inserir o segundo comentário
    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
