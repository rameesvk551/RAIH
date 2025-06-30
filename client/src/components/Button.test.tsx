import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders the button with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const mockClick = vi.fn(); // ✅ Use vi.fn()
    render(<Button label="Click Me" onClick={mockClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
