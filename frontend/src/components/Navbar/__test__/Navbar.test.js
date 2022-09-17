import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe("Navbar unit tests", () => {
    it('show display the A1 Maths Logo', async () => {
        render(<Navbar/>)
        const logoElement = screen.getByText(/A1Maths/i);
        expect(logoElement).toBeInTheDocument();
    })

    it('show display the Teacher link in Nav menu', async () => {
        render(<Navbar/>)
        const NavOptionElement = screen.getByText(/Teacher/i);
        expect(NavOptionElement).toBeInTheDocument();
    })

    it('show display the Student link in the Nav menu', async () => {
        render(<Navbar/>)
        const NavOptionElement = screen.getByText(/Teacher/i);
        expect(NavOptionElement).toBeInTheDocument();
    })
})