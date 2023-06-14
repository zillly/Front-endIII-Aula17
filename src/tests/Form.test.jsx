
import { render, fireEvent, screen } from '@testing-library/react'
import Form from '../components/Form'


  describe("test form", () => {
    test("input não está recebendo valores numéricos", () => {
        render(<Form />)
        const input = screen.getByLabelText('Texto:');
        fireEvent.change(input, { target: { value: "546" } })
        expect(input.value).not.toBe(expect.any(Number))
    })
    test("botão deverá disparar o evento", () => {
        const onClick = jest.fn();
        render(<Form onClick={onClick}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})

