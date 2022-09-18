import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe("Footer unit tests", () => {
    it('show render the copyright text in the footer', async () => {
        render(<Footer/>)
        const copyrightElement = screen.getByText(/© 2022 Copyright: A1Maths.co.uk/i);
        expect(copyrightElement).toBeInTheDocument();
    })
})