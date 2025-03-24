import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("deve adicionar dois comentários à lista", () => {
  render(<PostComment />);

  const input = screen.getByPlaceholderText("Digite seu comentário");
  const button = screen.getByText("Adicionar Comentário");

  // Inserir primeiro comentário
  fireEvent.change(input, { target: { value: "Primeiro comentário" } });
  fireEvent.click(button);

  // Inserir segundo comentário
  fireEvent.change(input, { target: { value: "Segundo comentário" } });
  fireEvent.click(button);

  // Verificar se os comentários aparecem na tela
  expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
  expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
});
