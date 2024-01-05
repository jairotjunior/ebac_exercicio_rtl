import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index';

describe('Teste para o componente PostComment', () => {
    test('Deve ser adicionado um comentário ao Post', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentarios'), {
            target: {
                value: 'Ótimo carro'
            }
        })
    })
    test('Renderizar o comentário no componente', () => {
        fireEvent.submit(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Ótimo carro')).toBeInTheDocument()
    })
});