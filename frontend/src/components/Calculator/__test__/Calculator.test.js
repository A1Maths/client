import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calculator from '../Calculator';

describe("Login Card display tests", () => {

    afterEach(()=>{
        cleanup();
    })

    it('should render the A1 Maths Logo inside Login Card', async () => {
        render(<Calculator/>)
        const CalculatorElement = screen.getByText(/Calculator/i);
        expect(CalculatorElement).toBeInTheDocument();
    })

})