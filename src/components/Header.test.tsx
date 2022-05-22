import { render, screen } from '@testing-library/react'
import Header from './Header';

/**
 * https://testing-library.com/docs/queries/bytext
 * https://testing-library.com/docs/queries/about/#textmatch
 */
it('should render same text passed into title prop (getByText)', async () => {
    render(<Header title="Hello world" />);
    const headingElement = screen.getByText("Hello world");
    expect(headingElement).toBeInTheDocument();
});

it('should render same text passed into title prop (getByTestId)', async () => {
    render(<Header title="Hello world" />);
    const headingElement = screen.getByTestId("header");
    expect(headingElement).toBeInTheDocument();
});