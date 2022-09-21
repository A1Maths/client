import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthContext } from '../../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const mockProp = jest.fn();

const MockNavbar = () => {
    return (
        <AuthContext.Provider value={mockProp}>
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

describe("Navbar unit tests", () => {
    
    afterEach(()=>{
        cleanup();
    })

    it('show display the A1 Maths Logo', async () => {
        render(<MockNavbar/>)
        const logoElement = screen.getByText(/A1Maths/i);
        expect(logoElement).toBeInTheDocument();
    })

    it('show display the Teacher link in Nav menu', async () => {
        render(<MockNavbar/>)
        const NavOptionElement = screen.getByText(/Teacher/i);
        expect(NavOptionElement).toBeInTheDocument();
    })

    it('show display the Student link in the Nav menu', async () => {
        render(<MockNavbar/>)
        const NavOptionElement = screen.getByText(/Teacher/i);
        expect(NavOptionElement).toBeInTheDocument();
    })
})