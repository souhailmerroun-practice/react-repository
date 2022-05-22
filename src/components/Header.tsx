type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    return <h1 data-testid="header" >{title}</h1>
}