import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from './Signup';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

// ✅ Mock react-toastify
vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn()
  }
}));

// ✅ Mock navigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

// ✅ Wrap with router
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Signup Component', () => {
  it('shows Google signup button initially', () => {
    renderWithRouter(<Signup />);
    expect(screen.getByText(/sign up with google/i)).toBeInTheDocument();
  });

  it('displays the form when "Continue with email" is clicked', () => {
    renderWithRouter(<Signup />);
    fireEvent.click(screen.getByText(/continue with email/i));
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
  });

  it('shows error if form is submitted empty', async () => {
    renderWithRouter(<Signup />);
    fireEvent.click(screen.getByText(/continue with email/i));

    const submitButton = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    });
  });
});
