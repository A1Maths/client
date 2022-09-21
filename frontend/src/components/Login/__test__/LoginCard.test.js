import '@testing-library/jest-dom'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { AuthContext } from '../../../context/AuthContext';
import LoginCard from '../LoginCard';

const mockProp = jest.fn();

const MockLoginCard = () => {
    return (
        <AuthContext.Provider value={mockProp}>
            <LoginCard/>
        </AuthContext.Provider>
    )
}

describe("Login Card display tests", () => {

    // beforeEach(()=>{
    //     render(<LoginCard/>)
    // })

    afterEach(()=>{
        cleanup();
    })

    it('should render the A1 Maths Logo inside Login Card', async () => {
        render(<MockLoginCard/>)
        const logoElement = screen.getByText(/A1 Maths/i);
        expect(logoElement).toBeInTheDocument();
    })

    it('should render heading login instructions inside Login Card', async () => {
        render(<MockLoginCard/>)
        const headingElement = screen.getByText(/Sign into your account/i);
        expect(headingElement).toBeInTheDocument();
    })

    it('show render the login button', async () => {
        render(<MockLoginCard/>)
        const loginButtonElement = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButtonElement).toBeInTheDocument();
    })

    it('show render the forgot password button', async () => {
        render(<MockLoginCard/>)
        const loginButtonElement = screen.getByRole('button', {
            name: 'Forgot Password'
        });
        expect(loginButtonElement).toBeInTheDocument();
    })
})

describe("Login Card input tests", () => {

    it('should render empty field inside email text box', async () => {
        render(<MockLoginCard/>)
        const emailInput = screen.getByRole("textbox", {
            name: "email"
        });
        expect(emailInput.value).toBe("");
    })

    it('should render empty field inside password text box', async () => {
        render(<MockLoginCard/>)
        const passwordInput = screen.getByPlaceholderText(/Enter your password/i)
        expect(passwordInput.value).toBe("");
    })

    it('should render the input inside email text box', async () => {
        render(<MockLoginCard/>)
        const emailInput = screen.getByRole("textbox", {
            name: /email/i
        });
        fireEvent.change(emailInput, {
            target: {
                value: "john@email.com"
            }
        })
        expect(emailInput.value).toBe("john@email.com");
    })

    it('should render the input inside password text box', async () => {
        render(<MockLoginCard/>)
        const passwordInput = screen.getByPlaceholderText(/Enter your password/i)
        fireEvent.change(passwordInput, {
            target: {
                value: "abcd123@!"
            }
        })
        expect(passwordInput.value).toBe("abcd123@!");
    })
})